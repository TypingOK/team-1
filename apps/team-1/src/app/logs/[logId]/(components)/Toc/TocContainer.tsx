import React, { useEffect } from "react";
import "./style.css";
import tocbot from "tocbot";

const TocContainer = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".js-toc",
      contentSelector: ".js-toc-content",
      headingSelector: "h1, h2, h3",
      hasInnerContainers: true,
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <div className="sticky align-top hidden top-0 text-xs text-neutral-50 bg-primary-0 lg:inline-block text-left w-[200px] pl-[40px]">
      <div className="w-[160px]">
        <div className="js-toc"></div>
      </div>
    </div>
  );
};

export default TocContainer;
