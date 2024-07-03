const domain = "http://localhost:5000";

const SummaryApi = {
  signUp: {
    url: `${domain}/api/signup`,
    method: "post",
  },
  signIn: {
    url: `${domain}/api/signin`,
    method: "post",
  },
  current_user: {
    url: `${domain}/api/user-details`,
    method: "get",
  },
  logout_user: {
    url: `${domain}/api/logout`,
    method: "post",
  },
};

export default SummaryApi;
