export const checkValidData = (email, password) => {
  const isEmailValid =
    /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/.test(
      email
    );
  const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/.test(
    password
  );

  if(!isEmailValid) return "Email not Valid";
  if(!isPasswordValid) return "Password not Valid";

  return null;
};
