export const baseUrl =
  window.location.href.indexOf("localhost") >= 0
    ? "http://localhost:3000/api/v1"
    : "https://cayn.herokuapp.com/api/v1";
