import jwtDecode from "jwt-decode";

export const verifyToken = () => {
  const { accessToken } = localStorage;
  let verified = {};
  if (accessToken) {
    const customerData = jwtDecode(accessToken);
    if (customerData !== null) {
      verified = customerData;
    } else {
      verified = null;
    }
  } else {
    verified = null;
  }
  return verified;
};
