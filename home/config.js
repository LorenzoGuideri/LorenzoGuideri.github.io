const CONFIG = {
  // General
  name: "Lorenzo",
  imageBackground: false,
  openInNewTab: false,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: "Buongiorno, boss!",
  greetingAfternoon: "Buon pomeriggio, boss!",
  greetingEvening: "Buonasera, capo!",
  greetingNight: "Sono stanco, capo",

  // Layout
  bentoLayout: "lists", // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: "8b05d62206f459e1d298cbe5844d7d87", // Write here your API Key
  weatherIcons: "OneDark", // 'OneDark', 'Nord', 'Dark', 'White'
  weatherUnit: "C", // 'F', 'C'
  language: "it", // More languages in https://openweathermap.org/current#multi

  trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: "46.010",
  defaultLongitude: "8.960",

  // Autochange
  autoChangeTheme: false,

  // Autochange by OS
  changeThemeByOS: false,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: "18:30",
  hourDarkThemeInactive: "07:00",

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: "1",
      name: "Github",
      icon: "github",
      link: "https://github.com/",
    },
    {
      id: "2",
      name: "Mail",
      icon: "mail",
      link: "https://mail.protonmail.com/",
    },
    {
      id: "3",
      name: "Todoist",
      icon: "trello",
      link: "https://todoist.com",
    },
    {
      id: "4",
      name: "Calendar",
      icon: "calendar",
      link: "https://calendar.google.com/calendar/r",
    },
    {
      id: "5",
      name: "Reddit",
      icon: "glasses",
      link: "https://reddit.com",
    },
    {
      id: "6",
      name: "Odysee",
      icon: "youtube",
      link: "https://odysee.com/",
    },
  ],

  secondButtonsContainer: [
    {
      id: "1",
      name: "Music",
      icon: "headphones",
      link: "https://open.spotify.com",
    },
    {
      id: "2",
      name: "twitter",
      icon: "twitter",
      link: "https://twitter.com/",
    },
    {
      id: "3",
      name: "bot",
      icon: "bot",
      link: "https://discord.com/app",
    },
    {
      id: "4",
      name: "Amazon",
      icon: "shopping-bag",
      link: "https://amazon.com/",
    },
    {
      id: "5",
      name: "Hashnode",
      icon: "pen-tool",
      link: "https://hashnode.com/",
    },
    {
      id: "6",
      name: "Figma",
      icon: "figma",
      link: "https://figma.com/",
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: "briefcase-business",
      id: "1",
      links: [
        {
          name: "DEC Admin",
          link: "https://dec-energy.ch/admin/",
        },
        {
          name: "Repo",
          link:
            "https://github.com/orgs/Decentralized-Energy-Corporation/repositories",
        },
        {
          name: "Notion",
          link: "https://www.notion.so/Lollo-e288ccf19ba9438fb69d08b7d0e54025/",
        },
        {
          name: "Django Docs",
          link: "https://docs.djangoproject.com/",
        },
      ],
    },
    {
      icon: "tv-minimal-play",
      id: "2",
      links: [
        {
          name: "YouTube",
          link: "https://www.youtube.com/",
        },
        {
          name: "Netflix",
          link: "https://www.netflix.com/",
        },
        {
          name: "Spotify",
          link: "https://open.spotify.com/",
        },
        {
          name: "1337x",
          link: "https://1337x.to/",
        },
      ],
    },
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: "message-circle",
      id: "1",
      links: [
        {
          name: "Proton",
          link: "https://mail.proton.me/u/0/inbox/",
        },
        {
          name: "Outlook",
          link: "https://outlook.office.com/mail/",
        },
        {
          name: "Instagram",
          link: "https://www.instagram.com/",
        },
        {
          name: "Linkedin",
          link: "https://www.linkedin.com/feed/",
        },
      ],
    },
    {
      icon: "file-code-2",
      id: "2",
      links: [
        {
          name: "SOW",
          link: "https://stackoverflow.com/",
        },
        {
          name: "LeetCode",
          link: "https://leetcode.com/problemset/",
        },
        {
          name: "iCorsi",
          link: "https://www.icorsi.ch/my/",
        },
        {
          name: "GPT",
          link: "https://chatgpt.com/",
        },
      ],
    },
  ],
};
