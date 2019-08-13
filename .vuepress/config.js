const getChildren = require('./childScript')

module.exports = {
  title: 'ECN Technology  |  Knowledge Base',
  description: '',
  plugins: [
    '@vuepress/back-to-top',
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-107905087-6' // UA-00000000-0
      }
    ],
  ],
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }]
  ],
  themeConfig: {
    logo: '/images/logo.png',
    nav: [{
      text: 'Home',
      link: '/'
    },
    {
      text: 'Knowledge Base',
      items: [
      {
        text: 'Internet Services',
        link: '/guides/internet-services/'
      },
      {
        text: 'Email Services',
        link: '/guides/email-services/'
      },
      {
        text: 'myCloudPBX',
        link: '/guides/mycloudpbx/'
      },
      {
        text: 'Inbound 1300',
        link: '/guides/inbound-1300/'
      },
      {
        text: 'Business SIP',
        link: '/guides/business-sip/'
      },
      {
        text: 'Cloud Dial',
        link: '/guides/cloud-dial/'
      },
      {
        text: 'Wholesale Support',
        link: '/guides/wholesale-support/'
      }
      ]
    },
    {
      text: 'ECN Website',
      link: 'https://www.ecn.net.au'
    },
    {
      text: 'Contact us',
      link: 'https://www.ecn.net.au/Contact/'
    },
    ],
    sidebar: {
      '/guides/internet-services/': [{
        title: 'Internet Services',
        children: getChildren('./guides/internet-services/')
      }],
      '/guides/email-services/': [{
        title: 'Email Services',
        children: getChildren('./guides/email-services/')
      }],
      '/guides/mycloudpbx/': [{
        title: 'myCloudPBX',
        children: getChildren('./guides/mycloudpbx/')
      }],
      '/guides/inbound-1300/': [{
        title: 'Inbound 1300',
        children: getChildren('./guides/inbound-1300/')
      }],
      '/guides/business-sip/': [{
        title: 'Business SIP',
        children: getChildren('./guides/business-sip/')
      }],
      '/guides/cloud-dial/': [{
        title: 'Cloud Dial',
        children: getChildren('./guides/cloud-dial/')
      }],
      '/guides/wholesale-support/': [{
        title: 'Wholesale Support',
        children: getChildren('./guides/wholesale-support/')
      }],
    },
    activeHeaderLinks: true,
    sidebarDepth: 2,
    lastUpdated: 'Last Updated:', // string | boolean
  },
};