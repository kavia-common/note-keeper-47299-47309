import React, { useEffect } from 'react';

/**
 * PUBLIC_INTERFACE
 * HomeScreen125171
 * This React page renders the Figma-generated Home Screen (screen_125:171) using the exact DOM hierarchy,
 * classes, and data attributes from assets/home-screen-125-171.html. It imports the CSS files and injects
 * the provided JS behavior on mount without modifying the original asset files.
 *
 * Notes:
 * - Styles are imported directly from assets to apply pixel-perfect design.
 * - JS files (assets/app.js and assets/home-screen-125-171.js) are dynamically injected on mount to execute any behavior.
 * - Image tags reference exact "assets/figmaimages/..." paths as generated.
 */
function HomeScreen125171() {
  useEffect(() => {
    // Import CSS via link injection to guarantee cascade order similar to the HTML reference.
    const commonCss = document.createElement('link');
    commonCss.rel = 'stylesheet';
    commonCss.href = '/assets/common.css';

    const screenCss = document.createElement('link');
    screenCss.rel = 'stylesheet';
    screenCss.href = '/assets/home-screen-125-171.css';

    document.head.appendChild(commonCss);
    document.head.appendChild(screenCss);

    // Inject JS scripts (non-module) in the same order as HTML
    const appScript = document.createElement('script');
    appScript.src = '/assets/app.js';
    appScript.async = false;

    const screenScript = document.createElement('script');
    screenScript.src = '/assets/home-screen-125-171.js';
    screenScript.async = false;

    document.body.appendChild(appScript);
    document.body.appendChild(screenScript);

    // Cleanup: remove injected assets on unmount to avoid duplicates when navigating
    return () => {
      if (appScript.parentNode) appScript.parentNode.removeChild(appScript);
      if (screenScript.parentNode) screenScript.parentNode.removeChild(screenScript);
      if (screenCss.parentNode) screenCss.parentNode.removeChild(screenCss);
      if (commonCss.parentNode) commonCss.parentNode.removeChild(commonCss);
    };
  }, []);

  // JSX mirrors the HTML structure exactly; using React-friendly attributes
  return (
    <div className="screen" role="main" aria-label="Home Screen" style={{ margin: '24px auto' }}>
      {/* Rectangle 8 */}
      <div className="el-125-175" aria-hidden="true"></div>

      {/* Book Review text */}
      <div className="el-125-176 typo-13">
        <span>Book Review : The Design of Everyday Things by Don Norman</span>
      </div>

      {/* Empty Text (placeholder) */}
      <div className="el-125-177 typo-13" aria-hidden="true">
        <span></span>
      </div>

      {/* Rectangle 11 */}
      <div className="el-125-178" aria-hidden="true"></div>

      {/* Animes produced by Ufotable */}
      <div className="el-125-179 typo-13">
        <span>Animes produced by Ufotable</span>
      </div>

      {/* Rectangle 10 */}
      <div className="el-125-180" aria-hidden="true"></div>

      {/* Mangas planned to read */}
      <div className="el-125-181 typo-13">
        <span>Mangas planned to read</span>
      </div>

      {/* Hero Text Notes */}
      <div className="el-125-186 typo-14">
        <span>Notes</span>
      </div>

      {/* Button 1 background */}
      <div className="el-125-187" aria-hidden="true"></div>
      {/* info_outline icon (component image) */}
      <div className="el-125-188" role="img" aria-label="info_outline icon">
        <img
          src="/assets/figmaimages/figma_image_125_188_9cae0a35.svg"
          alt="info_outline"
          className="icon-img"
        />
      </div>

      {/* Button 4 background */}
      <div className="el-125-189" aria-hidden="true"></div>
      {/* search icon (component image) */}
      <div className="el-125-190" role="img" aria-label="search icon">
        <img
          src="/assets/figmaimages/figma_image_125_190_7f05506b.svg"
          alt="search"
          className="icon-img"
        />
      </div>

      {/* Rectangle 13 */}
      <div className="el-136-37" aria-hidden="true"></div>
      {/* Rectangle 9 */}
      <div className="el-136-38" aria-hidden="true"></div>
      {/* Awesome tweets collection */}
      <div className="el-136-39 typo-13">
        <span>Awesome tweets collection</span>
      </div>
      {/* List of free & open source apps */}
      <div className="el-136-40 typo-13">
        <span>List of free & open source apps</span>
      </div>

      {/* Ellipse 1 */}
      <div className="el-125-191" aria-hidden="true"></div>
      {/* add icon */}
      <div className="el-125-192" role="img" aria-label="add icon">
        <img
          src="/assets/figmaimages/figma_image_125_192_76848e5b.svg"
          alt="add"
          className="icon-img"
        />
      </div>
    </div>
  );
}

export default HomeScreen125171;
