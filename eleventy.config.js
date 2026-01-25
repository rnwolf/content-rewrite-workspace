import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

export default function(eleventyConfig) {
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

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: "src",
      output: "docs"
    }
  };
};