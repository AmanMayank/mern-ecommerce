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
  all_users: {
    url: `${domain}/api/all-users`,
    method: "get",
  },
  update_users: {
    url: `${domain}/api/update-user`,
    method: "post",
  },
};

export default SummaryApi;
