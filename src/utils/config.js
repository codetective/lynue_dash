export const API_HOSTNAME = "http://localhost:5000";

export const AUTH_API = {
  login: `${API_HOSTNAME}/auth/login`,
  signup: `${API_HOSTNAME}/auth/signup`,
  reset_password: `${API_HOSTNAME}/auth/reset_password`,
  new_password: `${API_HOSTNAME}/auth/new_password`,
  forgot_password: `${API_HOSTNAME}/auth/forgot_password`,
};

export const roles = {
  superAdmin: {
    title: "superAdmin",
    path: "/superadmin",
  },
  admin: {
    title: "admin",
    path: "/admin",
  },
  analyst: {
    title: "analyst",
    path: "/analyst",
  },
  blog: {
    title: "blog",
    path: "/blog",
  },
  support: {
    title: "support",
    path: "/support",
  },
};

export const PAGETITLE = (baseUrl, pathname) => {
  switch (pathname) {
    case baseUrl:
      return "Overview";

    case baseUrl + "/settings":
      return "Settings";
    case baseUrl + "/profile":
      return "Profile";
    case baseUrl + "/complaints":
      return "Complaints";
    case baseUrl + "/transactions":
      return "Transactions";
    default:
      return "Dashboard";
  }
};
