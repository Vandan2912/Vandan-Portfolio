import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi, this is Vandan Pate;. I'm a Full-Stack / Frontend-focused Software
              Engineer with strong 4 Years of experience building scalable web
              applications and AI-powered platforms.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content:
          "Full-Stack Engineering / AI-Powered Products / System Design / SaaS Architecture / Performance Optimization / Real-Time Apps / Developer Experience / Clean UI + Solid Backend"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content: "I'm looking for a Full Stack Developer Job."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:vandanp2912@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                vandanp2912@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/Vandan2912"
                target="_blank"
                rel="noreferrer"
              >
                @Vandan2912
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/vandanp29/"
                target="_blank"
                rel="noreferrer"
              >
                Vandan Patel
              </a>
            </li>
            <li>
              Personal Website:{" "}
              <a
                className="text-blue-300"
                href="https://vandanpatel.in"
                target="_blank"
                rel="noreferrer"
              >
                https://vandanpatel.in
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
