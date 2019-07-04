const withFonts = require("next-fonts");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withCSS = require("@zeit/next-css");

module.exports = withPlugins([
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
      mozjpeg: { quality: 30 },
      pngquant: { quality: 30 },
      optipng: { optimizationLevel: 6 },
      svgo: {
        plugins: [
          { removeComments: false },
          { removeDesc: false },
          { removeMetadata: false },
          { removeEmptyAttrs: false },
          { removeEmptyContainers: false }
        ]
      } // at least one svg image should now be bigger
    }
  ],
  [withFonts],
  [withCSS],
  {
    target: "serverless"
  }
]);
