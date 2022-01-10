const demoOptions = [
  {
    label: 'Owl Shoes',
    value: 'owlshoes',
  },
  {
    label: 'Owl Air',
    value: 'owlair',
  },
  {
    label: 'Owl Bank',
    value: 'owlbank',
  },
  {
    label: 'Owl Health',
    value: 'owlhealth',
  },
  {
    label: 'Public Sector',
    value: 'pubsec',
  },
  {
    label: 'Zendesk',
    value: 'zendesk',
  },
  {
    label: 'IVR Demo',
    value: 'ivr',
  },
  {
    label: 'Twilio CCAI',
    value: 'ccai',
  },
  {
    label: 'Direct to Flex',
    value: 'directToFlex',
  },
]

const themeableItems = [
  {
    id: 'fte-main-header-logo-url',
    label: 'Main Header Logo URL',
    placeholder: 'https://some.url/image.png',
    settingPaths: null,
  },
  {
    id: 'fte-main-header-background-color',
    label: 'Background Color',
    placeholder: '#a1b2c3',
    sectionTitle: 'Main Header',
    settingPaths: [
      'MainHeader.Container.backgroundColor',
      'MainHeader.Container.background',
      'MainHeader.Button.background',
      'MainHeader.Button.backgroundColor',
    ],
  },
  {
    id: 'fte-main-header-text-color',
    label: 'Text Color',
    placeholder: '#a1b2c3',
    sectionTitle: 'Main Header',
    settingPaths: ['MainHeader.Button.color', 'MainHeader.Container.color'],
  },
  {
    id: 'fte-side-nav-background-color',
    label: 'Background Color',
    placeholder: '#a1b2c3',
    sectionTitle: 'Side Navigation',
    settingPaths: [
      'SideNav.Container.background',
      'SideNav.Button.background',
      'SideNav.Container.backgroundColor',
      'SideNav.Button.backgroundColor',
    ],
  },
  {
    id: 'fte-side-nav-text-color',
    label: 'Text Color',
    placeholder: '#a1b2c3',
    sectionTitle: 'Side Navigation',
    settingPaths: ['SideNav.Button.color', 'SideNav.Icon.color'],
  },
  {
    id: 'fte-msg-bubbles-from-others-background-color',
    label: 'Background Color',
    placeholder: '#a1b2c3',
    sectionTitle: 'Message Bubbles from Customer',
    settingPaths: [
      'Chat.MessageListItem.FromOthers.Avatar.background',
      'Chat.MessageListItem.FromOthers.Bubble.background',
      'Chat.MessageListItem.FromOthers.Header.background',
    ],
  },
  {
    id: 'fte-msg-bubbles-from-others-text-color',
    label: 'Text Color',
    placeholder: '#a1b2c3',
    sectionTitle: 'Message Bubbles from Customer',
    settingPaths: [
      'Chat.MessageListItem.FromOthers.Avatar.color',
      'Chat.MessageListItem.FromOthers.Bubble.color',
      'Chat.MessageListItem.FromOthers.Header.color',
    ],
  },
  {
    id: 'fte-msg-bubbles-from-me-background-color',
    label: 'Background Color',
    placeholder: '#a1b2c3',
    sectionTitle: 'Message Bubbles from Agent',
    settingPaths: ['Chat.MessageListItem.FromMe.Bubble.background'],
  },
  {
    id: 'fte-msg-bubbles-from-me-text-color',
    label: 'Text Color',
    placeholder: '#a1b2c3',
    sectionTitle: 'Message Bubbles from Agent',
    settingPaths: [
      'Chat.MessageListItem.FromMe.Bubble.color',
      'Chat.MessageListItem.FromMe.Header.color',
    ],
  },
]

const panel2Items = [
  {
    enabled: true,
    value: 'hubspot',
    label: 'HubSpot',
    hasCrmContainer: true,
    docUrl:
      'https://www.twilio.com/docs/flex/flex-ui-configuration-customization#crm-integrated-into-an-iframe-controlled-by-flex',
  },
  {
    enabled: true,
    value: 'iframe',
    label: 'iFrame a webpage',
    hasCrmContainer: true,
    docUrl:
      'https://www.twilio.com/docs/flex/flex-ui-configuration-customization#crm-integrated-into-an-iframe-controlled-by-flex',
    tweakableOptions: [
      {
        id: 'noTaskUrl',
        label: 'URL to show when no task is selected',
        placeholder: '//webapplayers.com/luna_admin-v1.4/profile.html',
        defaultValue: '//webapplayers.com/luna_admin-v1.4/profile.html',
        type: 'text',
      },
      {
        id: 'taskUrl',
        label: 'URL to show when task is selected',
        placeholder: '//webapplayers.com/luna_admin-v1.4/metrics.html',
        defaultValue: '//webapplayers.com/luna_admin-v1.4/profile.html',
        type: 'text',
      },
    ],
  },
  {
    enabled: true,
    value: 'bing',
    label: 'Bing',
    hasCrmContainer: true,
    docUrl:
      'https://www.twilio.com/docs/flex/flex-ui-configuration-customization#crm-integrated-into-an-iframe-controlled-by-flex',
  },
  {
    enabled: true,
    value: 'ccai',
    label: 'Twilio CCAI',
    hasCrmContainer: true,
    docUrl: '',
  },
  {
    enabled: false,
    value: 'retail',
    label: 'Custom React View - Twilio Shirts',
    hasCrmContainer: false,
    docUrl: '',
  },
  {
    enabled: true,
    value: 'owlshoes',
    label: 'Custom React View - Owl Shoes',
    hasCrmContainer: false,
    docUrl: '',
    tweakableOptions: [
      {
        id: 'recommendations',
        label: 'Swap the inventory panel with product recommendations',
        placeholder: false,
        defaultValue: false,
        type: 'checkbox',
      },
      {
        id: 'displaySegment',
        label: 'Display Segment Persona and Journey',
        placeholder: false,
        defaultValue: false,
        type: 'checkbox',
      },
    ],
  },
  {
    enabled: false,
    value: 'senior-sentinel',
    label: 'Custom React View - Senior Sentinel',
    hasCrmContainer: false,
    docUrl: '',
  },
  {
    enabled: true,
    value: 'owlair',
    label: 'Custom React View - Owl Air',
    hasCrmContainer: false,
    docUrl: '',
    tweakableOptions: [
      {
        id: 'displaySegment',
        label: 'Display Segment Persona and Journey',
        placeholder: false,
        defaultValue: false,
        type: 'checkbox',
      },
    ],
  },
  {
    enabled: true,
    value: 'owlbank',
    label: 'Custom React View - Owl Bank',
    hasCrmContainer: false,
    docUrl: '',
    tweakableOptions: [
      {
        id: 'displaySegment',
        label: 'Display Segment Persona and Journey',
        placeholder: false,
        defaultValue: false,
        type: 'checkbox',
      },
    ],
  },
  {
    enabled: true,
    value: 'wix',
    label: 'Custom React View - Wix KB',
    hasCrmContainer: false,
    docUrl: '',
    tweakableOptions: [
      {
        id: 'keywords',
        label: 'Keywords to be monitored (seperated by ",")',
        keywords: 'sizing,size,shoes,warranty',
        type: 'text',
      },
    ],
  },
  {
    enabled: true,
    value: 'pubsec',
    label: 'Custom React View - Public Sector',
    hasCrmContainer: false,
    docUrl: '',
    tweakableOptions: [
      {
        id: 'displaySegment',
        label: 'Display Segment Persona and Journey',
        placeholder: false,
        defaultValue: false,
        type: 'checkbox',
      },
      {
        id: 'benefitUrl',
        label: 'URL for Learn More buttons',
        placeholder: 'https://gov.owldemo.com/services/education',
        defaultValue: 'https://gov.owldemo.com/services/education',
        type: 'text',
      },
    ],
  },
  {
    enabled: true,
    value: 'generic',
    label: 'Custom React View - Generic',
    hasCrmContainer: false,
    docUrl: '',
    tweakableOptions: [
      {
        id: 'label',
        label: 'Label to be shown above iframe',
        placeholder: 'Panel Name',
        defaultValue: 'Admin Dashboard',
        type: 'text',
      },
      {
        id: 'url',
        label: 'URL to show when task is selected',
        placeholder: '//bing.com',
        defaultValue: '//bing.com',
        type: 'text',
      },
      {
        id: 'displaySegment',
        label: 'Display Segment Persona and Journey',
        placeholder: false,
        defaultValue: false,
        type: 'checkbox',
      },
    ],
  },
  {
    enabled: false,
    value: 'developer',
    label: 'Custom React View - Developer Example',
    hasCrmContainer: false,
    docUrl: '',
    tweakableOptions: [
      {
        id: 'text',
        label: 'Text Value',
        placeholder: 'a cool text value',
        defaultValue: 'default text value',
        type: 'text',
      },
      {
        id: 'select',
        label: 'How will a select look',
        placeholder: '',
        options: [
          {
            label: 'An option a',
            value: 'a',
          },
          {
            label: 'Bees, Bees, Bees!',
            value: 'b',
          },
          {
            label: 'C is the best',
            value: 'c',
          },
        ],
        type: 'select',
      },
      {
        id: 'boolean',
        label: 'Example checkbox',
        placeholder: false,
        type: 'checkbox',
      },
    ],
  },
]

const outboundCallerIdOverride = [
  {
    prefix: '+61',
    callerId: '+61488807639',
  },
  {
    prefix: '+55',
    callerId: '+5521933007003',
  },
  {
    prefix: '+49',
    callerId: '+4915735982122',
  },
  {
    prefix: '+85',
    callerId: '+85230087278',
  },
  {
    prefix: '+62',
    callerId: '+622180600645',
  },
  {
    prefix: '+81',
    callerId: '+815031965639',
  },
  {
    prefix: '+33',
    callerId: '+33757918695',
  },
  {
    prefix: '+65',
    callerId: '+6531292773',
  },
  {
    prefix: '+44',
    callerId: '+447449473539',
  },
]

const localStorageKeys = {
  showPanel2: 'fdc-show-panel2-',
  panel2Selected: 'fdc-panel2-',
  mapEnabled: 'fdc-show-map-',
}

const constants = {
  demoOptions,
  themeableItems,
  panel2Items,
  outboundCallerIdOverride,
  localStorageKeys,
}
export default constants
