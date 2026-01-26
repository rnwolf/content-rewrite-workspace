import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

export default function (eleventyConfig) {
  // Register the plugin with custom overrides
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    // Remove the Crown and GOV.UK logotype
    header: {
      logotype: {
        text: 'Content Prototype'
      },
      productName: 'Draft Content Workspace',
      search: false
    },
    footer: {
      contentLicence: {
        html: 'Content is draft and subject to change.'
      },
      copyright: {
        text: '© Department Name'
      }
    },
    titleSuffix: 'Prototype'
  });

  // Pass through assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // Lock configuration
  const ENABLE_LOCK = false;
  const PATH_PREFIX = "/content-rewrite-workspace/";

  if (ENABLE_LOCK) {
    eleventyConfig.addTransform("lock-script", function (content) {
      if (this.page.outputPath && this.page.outputPath.endsWith(".html")) {
        return content.replace("</body>", `<script src="${PATH_PREFIX}assets/lock.js"></script></body>`);
      }
      return content;
    });
  }

  return {
    pathPrefix: PATH_PREFIX,
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: "src",
      output: "docs"
    }
  };
};