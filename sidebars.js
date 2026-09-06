/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  // ── Beginner sidebar (translatable) ────────────────────────────────────
  beginnerSidebar: [
    {
      type: 'category',
      label: 'Beginner',
      collapsible: true,
      collapsed: false,
      items: [
        'beginner/intro',
        'beginner/how-sites-work',
        'beginner/proxies-beginner',
        'beginner/emails-beginner',
        'beginner/next-steps',
      ],
    },
  ],

  // ── Guide sidebar (beginner guide only — translatable) ──────────────────
  guideSidebar: [
    {
      type: 'category',
      label: 'Beginner Guide',
      collapsible: true,
      collapsed: false,
      items: [
        'guide/overview',
        'guide/proxies',
        'guide/sms',
        'guide/captcha',
        'guide/first-tasks',
        'guide/sticky-proxy',
        'guide/best-practices',
      ],
    },
  ],

  // ── Docs sidebar (full reference — English only) ─────────────────────────
  docsSidebar: [
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
        'settings/capguru',
        'settings/capsolver',
        'settings/sms',
        'settings/imap',
        'settings/discord',
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
      label: 'Identity Profiles',
      collapsible: true,
      collapsed: false,
      items: ['profiles/overview'],
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
      label: 'Tasks — Fnac',
      collapsible: true,
      collapsed: false,
      items: [
        'tasks/fnac-generator',
        'tasks/fnac-fill-profile',
        'tasks/fnac-buy',
      ],
    },
    {
      type: 'category',
      label: 'Tasks — Philibert',
      collapsible: true,
      collapsed: false,
      items: [
        'tasks/philibert-generator',
        'tasks/philibert-fill-profile',
        'tasks/philibert-buy',
      ],
    },
    {
      type: 'category',
      label: 'Tasks — Dreamland',
      collapsible: true,
      collapsed: false,
      items: [
        'tasks/dreamland-generator',
        'tasks/dreamland-invite',
      ],
    },
    {
      type: 'category',
      label: 'Tasks — KingDultes',
      collapsible: true,
      collapsed: false,
      items: ['tasks/tasks-kingdultes'],
    },
    {
      type: 'category',
      label: 'Tasks — Shopify',
      collapsible: true,
      collapsed: false,
      items: ['tasks/shopify-buy', 'tasks/relay-points'],
    },
    {
      type: 'category',
      label: 'Order Tracking',
      collapsible: true,
      collapsed: false,
      items: ['orders/overview'],
    },
    'troubleshooting',
  ],
}

module.exports = sidebars
