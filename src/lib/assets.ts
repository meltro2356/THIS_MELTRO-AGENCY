/**
 * Get the correct asset path based on the current environment
 * In development: uses absolute path from root
 * In production (GitHub Pages): includes the base path
 */
export const getAssetPath = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // Always use the full GitHub Pages path for consistency
  return `/THIS_MELTRO-AGENCY${cleanPath}`;
};