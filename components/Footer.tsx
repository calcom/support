import React from "react";
import GithubButton from "./GithubButton";

const navigation = {
  solutions: [
    { name: "Self-hosted", href: "https://github.com/calendso/calendso" },
    { name: "Hosted", href: "https://cal.com/pricing" },
    { name: "Enterprise", href: "https://cal.com/enterprise" },
  ],
  docs: [
    { name: "Getting Started", href: "https://docs.cal.com" },
    { name: "Developer & API", href: "https://developer.cal.com" },
    { name: "Design & Branding", href: "https://design.cal.com" },
  ],
  resources: [
    { name: "Blog", href: "https://cal.com/blog" },
    { name: "Merch Store", href: "https://cal.com/merch" },
    { name: "Open Startup", href: "https://cal.com/open" },
  ],
  legal: [
    { name: "Privacy", href: "https://cal.com/privacy" },
    { name: "Terms", href: "https://cal.com/terms" },
    {
      name: "License",
      href: "https://github.com/calendso/calendso/blob/main/LICENSE",
    },
  ],
  social: [
    {
      name: "Slack",
      href: "/slack",
      icon: (props: any) => (
        <svg
          className="w-5 h-5 text-gray-400 hover:text-white dark:hover:text-white"
          aria-hidden="true"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <title>Slack icon</title>
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"></path>
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/calendso",
      icon: (props: any) => (
        <svg
          style={{ marginTop: -3 }}
          fill="currentColor"
          viewBox="0 0 24 24"
          {...props}
        >
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/calendso",
      icon: (props: any) => (
        <svg
          style={{ marginTop: -3 }}
          fill="currentColor"
          viewBox="0 0 24 24"
          {...props}
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer
      className="relative z-50 bg-gray-900"
      aria-labelledby="footerHeading"
    >
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="px-4 space-y-8 xl:col-span-1">
            <img className="h-4" src="https://cal.com/logo-white.svg" alt="Cal.com Logo" />
            <p className="text-gray-500 text-base max-w-[250px]">
              Our mission is to connect a billion people by 2031 through
              calendar scheduling.
            </p>
            <div className="flex space-x-6">
              <GithubButton dark variant="stars" />
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="mt-1 text-gray-400 hover:text-white"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="w-6 h-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-12 ml-6 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase font-cal">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase font-cal">
                  Documentation
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.docs.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-0">
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase font-cal">
                  Resources
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase font-cal">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-12">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()}{" "}
            <strong className="text-white font-cal">Cal.com, Inc</strong>. All
            rights reserved.
          </p>
          {/* <small className="block mt-1 text-xs text-gray-400 xl:text-center">
            Cal and Cal.com are registered trademarks by Cal.com, Inc.
            Cal Sans is licensed under the SIL Open Font
            License, Version 1.1
          </small>*/}
        </div>
      </div>
    </footer>
  );
}
