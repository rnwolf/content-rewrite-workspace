(function () {
  // Configuration
  var PASSWORD = "password"; // Set your password here
  var SESSION_KEY = "content_workspace_auth";

  // Check if user is already authenticated
  if (sessionStorage.getItem(SESSION_KEY) === "true") {
    return;
  }

  // Create the overlay
  var overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.backgroundColor = '#ffffff';
  overlay.style.zIndex = '2147483647'; // Max z-index
  overlay.style.display = 'flex';
  overlay.style.flexDirection = 'column';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.fontFamily = '"GDS Transport", arial, sans-serif';
  overlay.style.padding = '20px';
  overlay.style.textAlign = 'center';
  overlay.boxSizing = 'border-box';

  var header = document.createElement('h1');
  header.innerText = 'Restricted Access';
  header.style.marginBottom = '20px';
  header.style.fontSize = '36px';
  header.style.color = '#0b0c0c';
  overlay.appendChild(header);

  var msg = document.createElement('p');
  msg.innerText = 'This content is currently in draft/review. Please enter the password to continue.';
  msg.style.marginBottom = '30px';
  msg.style.maxWidth = '600px';
  msg.style.fontSize = '19px';
  msg.style.lineHeight = '1.31579';
  overlay.appendChild(msg);

  var input = document.createElement('input');
  input.type = 'password';
  input.placeholder = 'Enter Password';
  input.style.padding = '8px';
  input.style.fontSize = '19px';
  input.style.marginBottom = '20px';
  input.style.border = '2px solid #0b0c0c';
  input.style.width = '200px';
  overlay.appendChild(input);

  var button = document.createElement('button');
  button.innerText = 'Continue';
  button.style.backgroundColor = '#00703c';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.padding = '10px 20px';
  button.style.fontSize = '19px';
  button.style.cursor = 'pointer';
  button.style.boxShadow = '0 2px 0 #002d18';
  button.style.fontWeight = 'bold';

  // Hover effect helper
  button.onmouseover = function () { this.style.backgroundColor = '#005a30'; };
  button.onmouseout = function () { this.style.backgroundColor = '#00703c'; };

  overlay.appendChild(button);

  // Validation Logic
  function checkPassword() {
    if (input.value === PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "true");
      // Fade out effect
      overlay.style.transition = 'opacity 0.5s';
      overlay.style.opacity = '0';
      setTimeout(function () {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      }, 500);
    } else {
      alert("Incorrect password");
      input.value = '';
      input.focus();
    }
  }

  button.onclick = checkPassword;
  input.onkeypress = function (e) {
    if (e.key === 'Enter') checkPassword();
  };

  // Wait for body to exist to append
  function init() {
    if (!document.body) {
      window.requestAnimationFrame(init);
      return;
    }
    document.body.appendChild(overlay);
    // Ensure input is focused when it appears
    input.focus();
  }

  // If document is already loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();