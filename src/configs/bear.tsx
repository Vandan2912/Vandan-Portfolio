import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:home",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Hey there! I'm a dragon lost in human world..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Here are some status about my github account..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "Multi Commerce Platform",
        title: "Multi Commerce...",
        file: "markdown/ecom.md",
        icon: "i-heroicons-solid:shopping-bag",
        excerpt: "A scalable multi-tenant e-commerce platform powering multiple...",
        link: "https://www.turtle.in/"
      },
      {
        id: "Chat Agent",
        title: "Chat Agent",
        file: "markdown/chat-agent.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "AI-powered chatbots with LLM contextual responses...",
        link: "https://github.com/evega-projects/CHATAGENT"
      },
      {
        id: "portfolio-macos",
        title: "Portfolio macOS",
        file: "markdown/portfolio-macos.md",
        icon: "i-ri:gamepad-line",
        excerpt: "My portfolio website simulating macOS's GUI...",
        link: "https://github.com/Vandan2912/Vandan-Portfolio"
      },
      {
        id: "Reworked AI",
        title: "Reworked AI",
        file: "markdown/reworked-ai.md",
        icon: "i-ri:newspaper-fill",
        excerpt: "An AI-powered lead generation & lead sorting platform for...",
        link: "https://www.reworked.ai/"
      },
      {
        id: "Face Recognition",
        title: "Face Recognition",
        file: "markdown/face-recog.md",
        icon: "i-heroicons-solid:camera",
        excerpt: "A web-based attendance system using facial recognition...",
        link: ""
      },
      {
        id: "Botcy",
        title: "Botcy",
        file: "markdown/botcy.md",
        icon: "i-heroicons-solid:shopping-cart",
        excerpt: "An AI-driven shopping platform delivering chat-based product...",
        link: ""
      },
      {
        id: "Siddhi Vinayak Exim",
        title: "Siddhi Vinayak Exim",
        file: "markdown/siddhivinayakexim.md",
        icon: "i-heroicons-solid:globe",
        excerpt: "Business website and custom web system developed for an...",
        link: "https://www.siddhivinayakexim.in/"
      }
    ]
  }
];

export default bear;
