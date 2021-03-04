module.exports = {
  siteMetadata: {
    title: `CivicActions | Open and Agile Digital Government Services`,
    email: `contact@civicactions.com`,
    phone: `(510) 408-7510`,
    address: `3527 Mt Diablo Blvd,`,
    address_line_2: `Unit 269,`,
    city: `Lafayette, CA 94549`,
    siteUrl: `https://civicactions.com`,
  },
  pathPrefix: `/civicactions.com`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-source-jazz`,
    `gatsby-plugin-node-fields`,
    `gatsby-plugin-client-side-redirect`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://strapi.prod.civicactions.dev`,
        queryLimit: 1000,
        contentTypes: [`case-study`, `staff-profile`, `press`, `press-release`],
        singleTypes: [],
        loginData: {
          identifier: "",
          password: "",
        },
      },
    },
  ],
};
