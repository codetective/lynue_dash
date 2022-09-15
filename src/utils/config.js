export const BASE_API_URL = "http://localhost:5000";

export const AUTH_API = (role) => {
  let links = {
    login: `${BASE_API_URL}/${role}/login`,
    signup: `${BASE_API_URL}/${role}/signup`,
    reset_password: `${BASE_API_URL}/${role}/reset_password`,
    new_password: `${BASE_API_URL}/${role}/new_password`,
    forgot_password: `${BASE_API_URL}/${role}/forgot_password`,
  };
  return links;
};

export const roles = {
  superAdmin: {
    title: "superAdmin",
    path: "/superadmin",
  },
  adin: {
    title: "admin",
    path: "/admin",
  },
  analyst: {
    title: "analyst",
    path: "/analyst",
  },
  moderator: {
    title: "moderator",
    path: "/moderator",
  },
  support: {
    title: "support",
    path: "/support",
  },
};
