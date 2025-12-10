/**
 * Get image path with basePath for production
 * In development, returns the path as-is. In production, adds the basePath prefix.
 */
export const getImgPath = (path: string = ""): string => {
  if (!path) return "";

  // Если это полный URL (https / http) — возвращаем как есть
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  // Базовый префикс для GitHub Pages (из next.config / env)
  const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH && process.env.NEXT_PUBLIC_BASE_PATH !== "/"
      ? process.env.NEXT_PUBLIC_BASE_PATH
      : "";

  // Гарантируем, что локальный путь начинается с "/"
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${basePath}${normalizedPath}`;
};

/**
 * Get data file path with basePath for production
 * Used for fetching JSON data files
 */
export const getDataPath = (path: string): string => {
  if (typeof window !== "undefined") {
    const basePath = window.location.pathname.split("/")[1] || "";
    if (basePath && path.startsWith("/")) {
      return `/${basePath}${path}`;
    }
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!basePath) {
    return path;
  }

  if (path.startsWith(basePath)) {
    return path;
  }

  return `${basePath}${path}`;
};
