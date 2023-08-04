import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://webhaikal.vercel.app" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
    return (
      <>
        <meta name="viewport" content="width=device-width initial-scale=1.0" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "haikal"} />
        <meta
          property="og:description"
          content={
            frontMatter.description || "Talks about tech and law in Indonesia"
          }
        />
      </>
    );
  },
  search: {
    placeholder: "Search",
  },
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 2,
    toggleButton: true,
  },

  logo: (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="28"
        fill="currentColor"
        viewBox="0 0 15 15"
      >
        <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
      </svg>
      <span style={{ marginLeft: ".4em", fontWeight: 900 }}>Haikal</span>
    </>
  ),
  faviconGlyph: "⚖️",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s | haikal",
      };
    }
  },
  footer: {
    text: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a
          href="https://github.com/mujamilhaikal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Muhamad Haikal Mujamil
        </a>
        <a href="https://instagram.com/haikal.mujamil.id">&nbsp;|&nbsp;</a>
        <span>{new Date().getFullYear()} ©</span>
        <a href="https://nextra.site" target="_blank" rel="noopener noreferrer">
          &nbsp;Nextra
        </a>
      </div>
    ),
  },
};
export default config;
