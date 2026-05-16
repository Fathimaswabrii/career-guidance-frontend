const normalizeToken = (token) => {
  if (!token || typeof token !== "string") return null;
  const trimmed = token.trim();
  if (!trimmed || trimmed === "undefined" || trimmed === "null") return null;
  return trimmed;
};

export const setTokens = ({ access, refresh }) => {
  const normalizedAccess = normalizeToken(access);
  const normalizedRefresh = normalizeToken(refresh);

  if (normalizedAccess) {
    localStorage.setItem("access", normalizedAccess);
  }

  if (normalizedRefresh) {
    localStorage.setItem("refresh", normalizedRefresh);
  }
};

export const getToken = () => {
  return normalizeToken(localStorage.getItem("access"));
};

export const getRefreshToken = () => {
  return normalizeToken(localStorage.getItem("refresh"));
};

export const logout = () => {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
};

export const isAuthenticated = () => {
  return !!getToken();
};