
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("itemCard", function(name, image, link) {
    return `<div class="item-card">
      <a href="${link}">
        <img src="${image}" alt="${name}" />
        <h2>${name}</h2>
      </a>
    </div>`;
  });
}