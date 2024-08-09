"use client";
import { Highlight, themes, Prism } from "prism-react-renderer";
import { useEffect } from "react";

export default function CodeBlock({ codeBlock }) {
  useEffect(() => {
    (async () => {
      try {
        (typeof global !== "undefined" ? global : window).Prism = Prism;
        await import("prismjs/components/prism-bash");
      } catch (error) {
        console.error("Error loading Prism component:", error);
      }
    })();
  }, []);

  return (
    <Highlight theme={themes.dracula} code={codeBlock} language="bash">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style} className="p-2">
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
