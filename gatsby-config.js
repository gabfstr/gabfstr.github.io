module.exports = {
  plugins: [
    {
      resolve: require.resolve("./plugins/gatsby-theme-portfolio-minimal"),
      options: {
        siteUrl: "https://www.gabriel.fiastre.fr", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/draw_logo_contour.png", // Path is relative to the root
          siteName: "Gabriel Fiastre Portfolio", // Used in manifest.json
          shortName: "Gabriel Fiastre", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#FFFFFF", // Used in manifest.json
          themeColor: "#000000", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        // googleAnalytics: {
        //     trackingId: "UA-XXXXXX-X",
        //     anonymize: true, // Default true
        //     environments: ["production", "development"] // Default ["production"]
        // }
      },
    },
  ],
};
