import React, { useEffect } from 'react';

/**
 * PUBLIC_INTERFACE
 * HomeScreenEmpty898
 * This React page renders the Figma-generated Home Screen Empty (screen_89:8) using the exact DOM structure
 * and classes from assets/home-screen-empty-89-8.html. It loads CSS and JS assets without modifying them.
 *
 * Integration notes:
 * - CSS is injected as <link> tags to maintain the cascade consistent with the original HTML.
 * - JS scripts are appended when the component mounts and removed on unmount to avoid duplicate execution.
 * - Images reference the exact assets/figmaimages paths.
 */
function HomeScreenEmpty898() {
  useEffect(() => {
    const commonCss = document.createElement('link');
    commonCss.rel = 'stylesheet';
    commonCss.href = '/assets/common.css';

    const screenCss = document.createElement('link');
    screenCss.rel = 'stylesheet';
    screenCss.href = '/assets/home-screen-empty-89-8.css';

    document.head.appendChild(commonCss);
    document.head.appendChild(screenCss);

    const appScript = document.createElement('script');
    appScript.src = '/assets/app.js';
    appScript.async = false;

    const screenScript = document.createElement('script');
    screenScript.src = '/assets/home-screen-empty-89-8.js';
    screenScript.async = false;

    document.body.appendChild(appScript);
    document.body.appendChild(screenScript);

    return () => {
      if (appScript.parentNode) appScript.parentNode.removeChild(appScript);
      if (screenScript.parentNode) screenScript.parentNode.removeChild(screenScript);
      if (screenCss.parentNode) screenCss.parentNode.removeChild(screenCss);
      if (commonCss.parentNode) commonCss.parentNode.removeChild(commonCss);
    };
  }, []);

  return (
    <div className="screen-89-8" role="main" aria-label="Home Screen Empty" style={{ margin: '24px auto' }}>
      {/* Create your first note ! */}
      <div className="el-91-12">
        <span>Create your first note !</span>
      </div>

      {/* Illustration image */}
      <div className="el-111-12" role="img" aria-label="notebook illustration">
        <img
          src="/assets/figmaimages/figma_image_111_12.png"
          alt="notebook illustration"
          className="image-cover"
        />
      </div>

      {/* Hero Text Notes */}
      <div className="el-125-51">
        <span>Notes</span>
      </div>

      {/* Button 1 background */}
      <div className="el-125-52" aria-hidden="true"></div>
      {/* info_outline icon */}
      <div className="el-125-53" role="img" aria-label="info_outline icon">
        <img
          src="/assets/figmaimages/figma_image_125_53.svg"
          alt="info_outline"
          className="icon-img"
        />
      </div>

      {/* Button 4 background */}
      <div className="el-125-54" aria-hidden="true"></div>
      {/* search icon */}
      <div className="el-125-55" role="img" aria-label="search icon">
        <img
          src="/assets/figmaimages/figma_image_125_55.svg"
          alt="search"
          className="icon-img"
        />
      </div>

      {/* Floating action ellipse */}
      <div className="el-89-29" aria-hidden="true"></div>
      {/* add icon */}
      <div className="el-115-17" role="img" aria-label="add icon">
        <img
          src="/assets/figmaimages/figma_image_115_17.svg"
          alt="add"
          className="icon-img"
        />
      </div>
    </div>
  );
}

export default HomeScreenEmpty898;
