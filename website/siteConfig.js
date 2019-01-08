/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'TIL',
  tagline: '📚 Easy access to course notes',
  url: 'https://teach.rakinu.com',
  cname: 'teach.rakinu.com',
  baseUrl: '/', // Base URL for project */

  // Used for publishing and more
  projectName: 'today-i-learned',
  organizationName: 'RakinUddin',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'intro', label: 'Docs'},
    {page: 'contact', label: 'Contact'},
    {href: 'https://rakinuddin.typeform.com/to/jvhlzN', label: 'Feedback'},
    {href: 'https://github.com/ItsMeWithTheFace/til', label: 'Contribute'}
  ],
  
  editUrl: 'https://github.com/ItsMeWithTheFace/til/edit/master/docs/',

  /* path to images for header/footer */
  headerIcon: 'img/book_icon.svg',
  footerIcon: 'img/book_icon.svg',
  favicon: 'img/favicon/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#237699',
    secondaryColor: '#05435a',
  },

  /* Google Analytics Tracking */
  gaTrackingId: `${process.env.REACT_APP_GOOGLE_ANALYTICS_KEY}`,

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Rakin Uddin`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'solarized-dark'
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/book_icon.png',
  twitterImage: 'img/book_icon.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  scrollToTop: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/ItsMeWithTheFace/til',
};

module.exports = siteConfig;
