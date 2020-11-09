/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
title:'Joséphine Östman\'s Portfolio',
menuLinks:[
  {
    name:'home',
    link:'/'
  },{
    name:'contact',
    link:'/contact'
  },{
    name:'projects',
    link:'/projects'
  },{
    name:'skills',
    link:'/skills'
  }
]
  },
  plugins: [{
    resolve: `gatsby-plugin-styled-components`,
    options: {
    },
  },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
        }
      }
    }
  ],
}
