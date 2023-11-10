import React, { useEffect, useState } from "react";
import DrawioTheme from "@theme/Drawio";

export const Drawio = React.memo(({ filename }) => {
  const [drawioFileContent, setDrawioFileContent] = useState(null);

  useEffect(() => {
    const fetchDrawioFile = async () => {
      try {
        const module = await import(
          `!!raw-loader!@site/static/drawio/${filename}.drawio`
        );
        setDrawioFileContent(module.default);
      } catch (error) {
        console.error(`Error loading drawio file: ${error}`);
      }
    };

    fetchDrawioFile();
  }, [filename]);

  if (!drawioFileContent) {
    // You can render a loading state or handle the absence of content as needed
    return <div>Loading...</div>;
  }

  return <DrawioTheme content={drawioFileContent} />;
});
