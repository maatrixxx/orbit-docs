/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      collapsible: true,
      collapsed: false,
      items: ['introduction/getting-started', 'introduction/what-is-orbit'],
    },
    {
      type: 'category',
      label: 'Settings',
      collapsible: true,
      collapsed: false,
      items: [
        'settings/overview',
        'settings/api-keys',
        'settings/sms',
        'settings/imap',
        'settings/discord',
        'settings/capguru',
      ],
    },
    {
      type: 'category',
      label: 'Emails',
      collapsible: true,
      collapsed: false,
      items: [
        'emails/overview',
        'emails/creating-a-list',
        'emails/icloud-generator',
      ],
    },
    {
      type: 'category',
      label: 'Proxies',
      collapsible: true,
      collapsed: false,
      items: ['proxies/overview', 'proxies/creating-a-group'],
    },
    {
      type: 'category',
      label: 'Accounts',
      collapsible: true,
      collapsed: false,
      items: [
        'accounts/overview',
        'accounts/creating-a-group',
        'accounts/opening-sessions',
        'accounts/import-export',
      ],
    },
    {
      type: 'category',
      label: 'Tasks — Amazon',
      collapsible: true,
      collapsed: false,
      items: [
        'tasks/overview',
        'tasks/amazon-generator',
        'tasks/amazon-invite',
        'tasks/amazon-session',
        'tasks/amazon-checkout',
      ],
    },
    {
      type: 'category',
      label: 'Vinted',
      collapsible: true,
      collapsed: false,
      items: ['vinted/overview', 'vinted/sniper', 'vinted/tracker'],
    },
    'troubleshooting',
  ],
}

module.exports = sidebars
