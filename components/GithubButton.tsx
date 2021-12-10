import { useEffect } from "react";

export default function GithubButton({
  variant,
  dark,
}: {
  variant: string;
  dark?: boolean;
}) {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://buttons.github.io/buttons.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {variant === "stars" && (
        <a
          className="github-button"
          href="https://github.com/calendso/calendso"
          data-icon="octicon-star"
          data-size="large"
          data-color-scheme={
            dark && "no-preference: dark; light: dark; dark: dark;"
          }
          data-show-count="true"
          aria-label="Star calendso/calendso on GitHub"
        >
          Star
        </a>
      )}

      {variant === "downloads" && (
        <a
          className="github-button"
          href="https://github.com/calendso/calendso/archive/HEAD.zip"
          data-icon="octicon-download"
          data-size="large"
          aria-label="Download calendso/calendso on GitHub"
        >
          Download
        </a>
      )}

      {variant === "forks" && (
        <a
          className="github-button"
          href="https://github.com/calendso/calendso/fork"
          data-icon="octicon-repo-forked"
          data-size="large"
          data-show-count="true"
          aria-label="Fork calendso/calendso on GitHub"
        >
          Fork
        </a>
      )}
    </>
  );
}
