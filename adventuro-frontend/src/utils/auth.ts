export const getToken = () => {
  return localStorage.getItem("token");
};

export const isAuthenticated = () => {
  return Boolean(getToken());
};

export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};
