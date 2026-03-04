# content-rewrite-workspace
Demo if how one might be able to use github pages to rework gov dot uk content pages

# GOV.UK Eleventy Plugin Overview

The GOV.UK Eleventy Plugin is a powerful tool designed for testing and building documentation websites using Markdown with the styling of GOV.UK. While it is tailored for services related to the UK government, it can also be utilized by other services, provided certain guidelines are followed concerning branding and representation. This plugin offers a seamless way to create documentation that aligns with GOV.UK guidelines while still being accessible to a broader audience.

For developers looking to leverage this plugin, it requires a few specific technologies to be in place, ensuring compatibility and functionality. With clear installation and usage instructions, the GOV.UK Eleventy Plugin is an excellent addition to any developer’s toolkit, especially those focusing on documentation and site design.

## Features


Markdown Support: Easily write documentation in Markdown format, simplifying the content creation process.

GOV.UK Styling: Incorporates the distinctive GOV.UK styles, providing a professional and consistent appearance to your documentation.

Flexible Usage: While primarily aimed at GOV.UK services, it can be adapted for other projects that meet specific branding criteria.

Node.js Compatibility: Requires Node.js version 22 or later, ensuring that you are using the latest technology stack.

Version Control: Simplifies releasing new versions with a straightforward command that manages version tagging, publishing, and generating release notes.

Open Source Contribution: Encourages collaboration, allowing developers to contribute and improve the plugin as part of the open-source community.

## Installation

Install rquired version of node.
Copy the repo to a local folder.
Setup with just an npm command.

`npm install`

## Content folder

All the content for the site, is in `docs` folder.

## Generate site pages

To generate a site, type the following command:

`npx eleventy --serve`
