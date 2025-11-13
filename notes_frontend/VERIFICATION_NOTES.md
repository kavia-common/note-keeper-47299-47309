# Verification Notes

Date: 2025-11-13

- CRA dev server port: 3003 (3000 was occupied; CRA auto-selected a new port)
- Verified routes:
  - /home -> OK (HTML shell responded; in-browser renders HomeScreen125171 with assets)
  - /home-empty -> OK
- Static assets serving:
  - /assets/common.css -> OK
  - /assets/figmaimages/figma_image_111_12.png -> OK (PNG bytes)
- Backend health:
  - http://localhost:3001/ -> {"message":"Healthy"} (OK)
  - http://localhost:3001/health -> 404 (expected; backend defines "/" as health)
- Frontend env:
  - .env contains:
    - REACT_APP_API_BASE=http://localhost:3001
    - REACT_APP_HEALTHCHECK_PATH=/
    - PORT=3000 (CRA adjusted to 3003 since 3000 was busy)
- Assets were copied into public/assets from ../../assets prior to verification.

