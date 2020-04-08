const fs = require("fs");
const filesize = require("file-size");

module.exports = (function (eleventyConfig) {

    eleventyConfig.addFilter("filesize", function (path) {
        let stat = fs.statSync(path); if (stat) {
            return filesize(stat.size).human();
        } return "";
    });

    eleventyConfig.setTemplateFormats([
        "md",
        "njk",
        "liquid",
        "html",
        "png",
        "gif",
        "jpg",
        "css" // css is not yet a recognized template extension in Eleventy
    ]);

});