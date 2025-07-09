/**
 * Get the correct asset path based on the current environment
 */
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // For GitHub Pages, assets are served from the repo root
  return cleanPath;
};