define({
  ru: 'active',
  mainTitle: {
    top: 'Компания по разработке',
    bottom: 'Мобильного ПО'
  },
  navMenu: [
    {
      name: 'About us',
      link: "#about"
    },
    {
      name: 'Services',
      link: "#services"
    },
    {
      name: 'Our works',
      link: "#our-works"
    },
    {
      name: 'Technologies',
      link: "#tools"
    },
    {
      name: 'Get in touch',
      link: "#form"
    }
  ],
  sliderList: [
    {
      name: 'Shake App', // for 'alt' attribute
      link: 'https://shakeup.app/',
      title: 'See what we do for Shake App',
      imgSrc: './../assets/images/shake-app-image.svg'
    },
    {
      name: 'Lingvalien', // for 'alt' attribute
      link: 'https://lingvalien.com/',
      title: 'See what we do for Lingvalien',
      imgSrc: './../assets/images/lingvalien-app-image.svg'
    },
    {
      name: 'BindAp', // for 'alt' attribute
      link: 'https://bindap.com/',
      title: 'See what we do for BindAp',
      imgSrc: './../assets/images/bind-app-image.svg'
    },
    {
      name: 'Govoroon', // for 'alt' attribute
      link: 'https://govoroon.app/',
      title: 'See what we do for Govoroon',
      imgSrc: './../assets/images/govoroon-app-image.svg'
    }
  ],
  aboutSection: {
    title: 'About',
    description: 'INTERKIT is a digital transformation consultancy company that provides ' +
      'full-cycle software in mobile app development. We create award-winning digital products and ' +
      'services for startups. It is important for us to satisfy our client’s requirements.',
    advantageList: [
      {
        title: 'Interface Design',
        description: 'Our design team knows how to make users be attracted by the app. ' +
          'We collaborate with our client and create the user-friendly and informative interface',
        iconClassName: 'design-icon'
      },
      {
        title: 'Application Audit',
        description: 'Application Audit allows to detect lack in codebase and generate ' +
          'complex of solutions which can stabilize and optimize your application.',
        iconClassName: 'audit-icon'
      },
      {
        title: 'Support & Maintenance',
        description: 'Our team offers support service for deployed application ' +
          'according to defined SLA. Troubleshooting, new features development and analytics are the common services',
        iconClassName: 'support-icon'
      },
      {
        title: 'Outstaff',
        description: 'We offer the clients’ team extension with software and hardware engineers. ' +
          'The engineers are available at client’s office or remotely',
        iconClassName: 'outstaff-icon'
      }
    ]
  },
  ourWorksSection: {
    title: 'Our works',
    appList: [
      {
        title: 'Shake App',
        logo: null,
        className: 'shake-app',
        keywords: 'Android・iOS・UX/UI Design',
        description: `The alarm clock App designed especially for the 
        deaf and hard of hearing people. Second place of the 
        Facebook Developer Circles startups contest`,
        links: [
          {
            key: 'google-play',
            link: 'https://shakeup.app/'
          },
          {
            key: 'app-store',
            link: 'https://shakeup.app/'
          }
        ],
        review: {
          photoSrc: './../assets/images/evgeny-fomin-photo.svg',
          author: 'Evgeny Fomin',
          description: `“It was a great success to meet the INTERKIT team. 
          Participation in a socially significant project indicates that 
          the right values are at the heart of the company's culture. 
          I liked working with responsible and smart people on the project ShakeUp”`
        },
        imageSrc: './../assets/images/shake-app-image.svg'
      },
      {
        title: 'Lingvalien',
        logo: `<span class="logo">
                <img src="./../assets/images/lingvalien-app-logo.svg" alt="Lingvalien app logo">
               </span>`,
        className: 'lingvalien-app',
        keywords: 'Android',
        description: `Want to learn English? Then jump into a plate and fly to the ground. 
        Already, Lingvalien allows you to learn English with your own alien, search 
        for details and return home, tens of thousands of words, phrases, and grammar 
        rules, fight on the map with other players, learn the language through celebrity tweets.`,
        links: [
          {
            key: 'google-play',
            link: 'https://play.google.com/store/apps/details?id=com.lingvaliens'
          }
        ],
        review: {
          photoSrc: './../assets/images/vadim-bondar-photo.svg',
          author: 'Vadim Bondar',
          description: `“We had really complex tasks during our product development. 
          INTERKIT expertise allowed us to solve all of them clearly. They are responsible and really good guys”`
        },
        imageSrc: './../assets/images/lingvalien-app-image.svg'
      },
      {
        title: 'BindAp',
        logo: `<span class="logo">
                <img src="./../assets/images/bind-app-logo.svg" alt="Bind app logo">
              </span>`,
        className: 'bind-app',
        keywords: 'Android・iOS・UX/UI Design',
        description: `We have set ourselves the ambitious goal of uniting 
        all private households in one place, linking them to the participants 
        in the housing and public utilities market and the state, involving 
        business in the sphere of consumer goods and services, as well 
        as to provide real estate market participants with a convenient 
        and safe platform for carrying out transactions.`,
        links: [
          {
            key: 'google-play',
            link: 'https://play.google.com/store/apps/details?id=com.bindap'
          }
        ],
        review: {
          photoSrc: './../assets/images/sergey-photo.svg',
          author: 'Sergey Skripnik',
          description: `“We had outstaff engineers from INTERKIT team. 
          These guys are professionals. It was an exciting experience working with them”`
        },
        imageSrc: './../assets/images/bind-app-image.svg'
      },
      {
        title: 'Govoroon',
        logo: `<span class="logo">
                <img src="./../assets/images/govoroon-app-logo.svg" alt="Govoroon app logo">
              </span>`,
        className: 'govoroon-app',
        keywords: 'Android・iOS・UX/UI Design',
        description: `The Govoroon app is developed to record children’s statements and share them in social networks`,
        links: [
          {
            key: 'google-play',
            link: 'https://play.google.com/store/apps/details?id=pro.apki.govoroon'
          },
          {
            key: 'app-store',
            link: 'https://apps.apple.com/us/app/govoroon/id1481756312'
          }
        ],
        review: {
          photoSrc: './../assets/images/ilya-photo.svg',
          author: 'Ilya Nikishin',
          description: `“Working with InterKIT practically revived our project. 
          Within the strict limits of the set budget, the team was able to 
          complete the tasks set, as well as perform refactoring and even 
          add things that we initially forgot to take into account in the technical task”`
        },
        imageSrc: './../assets/images/govoroon-app-image-2.svg'
      }
    ]
  },
  statisticsSection: {
    title: 'Some real statistics',
    list: [
      {
        numbers: '20+',
        description: `More than 20 created projects and satisfied clients.`
      },
      {
        numbers: '1.1M',
        description: `Users downloaded apps that we developed.`
      },
      {
        numbers: '300k',
        description: `Monthly Active Users in our apps.`
      },
      {
        numbers: '4.8',
        description: `Average score of our apps in App Store & Play Market`
      }
    ]
  },
  toolsSection: {
    title: 'Technologies & Tools',
    list: [
      {
        title: 'Design',
        description: `We use well-proven tools to make the design which satisfies the client’s and users’ needs`,
        iconList: [
          {
            name: 'Figma',
            iconSrc: './../assets/images/tools-icons/design/figma.svg'
          },
          {
            name: 'Sketch',
            iconSrc: './../assets/images/tools-icons/design/sketch.svg'
          },
          {
            name: 'Zeplin',
            iconSrc: './../assets/images/tools-icons/design/zeplin.svg'
          },
          {
            name: 'Photoshop',
            iconSrc: './../assets/images/tools-icons/design/photoshop.svg'
          },
          {
            name: 'Illustrator',
            iconSrc: './../assets/images/tools-icons/design/adobe-illustrator.svg'
          },
          {
            name: 'After Effects',
            iconSrc: './../assets/images/tools-icons/design/after-effects.svg'
          }
        ]
      },
      {
        title: 'Backend',
        description: `We create reliable, scalable, high-performing systems 
        using modern technology stack to handle complex operations`,
        iconList: [
          {
            name: 'Python',
            iconSrc: './../assets/images/tools-icons/backend/python.svg'
          },
          {
            name: 'JavaScript',
            iconSrc: './../assets/images/tools-icons/backend/js.svg'
          },
          {
            name: 'Node.Js',
            iconSrc: './../assets/images/tools-icons/backend/node-js.svg'
          },
          {
            name: 'PHP',
            iconSrc: './../assets/images/tools-icons/backend/php.svg'
          },
          {
            name: 'Spring',
            iconSrc: './../assets/images/tools-icons/backend/spring.svg'
          },
          {
            name: 'GO',
            iconSrc: './../assets/images/tools-icons/backend/golang.svg'
          }
        ]
      },
      {
        title: 'Mobile',
        description: `We have a solid experience in building 
        responsive and extendable mobile apps using our best practices`,
        iconList: [
          {
            name: 'Kotlin',
            iconSrc: './../assets/images/tools-icons/mobile/kotlin.svg'
          },
          {
            name: 'Java',
            iconSrc: './../assets/images/tools-icons/mobile/java.svg'
          },
          {
            name: 'Objective - C',
            iconSrc: './../assets/images/tools-icons/mobile/objective-c.svg'
          },
          {
            name: 'Swift',
            iconSrc: './../assets/images/tools-icons/mobile/swift.svg'
          }
        ]
      },
      {
        title: 'Infrastructure',
        description: `We deliver all environments by using CI/CD best practices 
        coupled with right tooling and automated test cycles`,
        iconList: [
          {
            name: 'Amazon Web Services',
            iconSrc: './../assets/images/tools-icons/infrastructure/aws.svg'
          },
          {
            name: 'Gitlab Cl',
            iconSrc: './../assets/images/tools-icons/infrastructure/aws.svg'
          },
          {
            name: 'Azure',
            iconSrc: './../assets/images/tools-icons/infrastructure/azure.svg'
          }
        ]
      },
      {
        title: 'Project Management',
        description: `We have automated business processes due 
        to well-designed and functional tools which are used in it`,
        iconList: [
          {
            name: 'Trello',
            iconSrc: './../assets/images/tools-icons/management/trello.svg'
          },
          {
            name: 'Atlassian Jira',
            iconSrc: './../assets/images/tools-icons/management/jira.svg'
          },
          {
            name: 'Slack',
            iconSrc: './../assets/images/tools-icons/management/slack.svg'
          },
          {
            name: 'Skype',
            iconSrc: './../assets/images/tools-icons/management/skype.svg'
          },
          {
            name: 'Google Meet',
            iconSrc: './../assets/images/tools-icons/management/google-meet.svg'
          }
        ]
      }
    ]
  },
  formSection: {
    title: 'Get in touch',
    chatLinks: [
      {
        key: 'telegram', // or whatsapp
        link: 'https://t.me/interkit', // or https://wa.me/77028034333
        iconSrc: './../assets/images/telegram-icon.svg' // or ./../assets/images/whatsapp-icon.svg
      }
    ],
    phone: {
      numbers: '+7 (702) 803 43-33',
      link: 'tel:+77028034333'
    },
    email: 'contact@interkit.io',
    form: {
      actionLink: 'https://formspree.io/f/mrgoljpa',
      inputs: [
        {
          placeholder: 'Имя',
          name: 'name',
          type: 'text',
          id: 'name-field'
        },
        {
          placeholder: 'Номер телефона',
          name: 'phone',
          type: 'text',
          id: null
        },
        {
          placeholder: 'Почта',
          name: 'email',
          type: 'email',
          id: null
        },
      ],
      submit: 'Отправить'
    }
  }
});