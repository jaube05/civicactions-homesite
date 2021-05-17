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
  pathPrefix: `/civicactions-homesite`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `@danbruegge/gatsby-plugin-stylelint`,
      options: {
        files: [`src/**/*.(s(c|a)ss|css)`],
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://app.jazz.co/feeds/rss/jobs/ampifire`, //For testing only
        // url: `https://app.jazz.co/feeds/rss/jobs/civicactions`,
        name: `JobList`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            item: ['itunes:duration']
          }
        }
      }
    },
    `gatsby-plugin-node-fields`,
    `gatsby-plugin-client-side-redirect`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Nunito\:300,400,600,700`, `Work Sans\:300,400,600,700`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://civicactions-content.civicactions-content.app.civicactions.net`,
        queryLimit: 1000,
        contentTypes: [`case-study`, `press`, `press-release`, `staff-profile`],
        singleTypes: [],
      },
    },
  ],
};
