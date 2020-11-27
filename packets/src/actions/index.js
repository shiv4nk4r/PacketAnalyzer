export const setUserSignedIn = () => {
  return {
    type: "SIGN_IN",
    payload: true,
  };
};

export const setUserLoggedOut = () => {
  return {
    type: "SIGN_OUT",
    payload: false,
  };
};
