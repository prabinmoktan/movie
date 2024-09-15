import Cookies from 'js-cookie';

export const isUserLoggedIn = () => {
  const accessToken = Cookies.get('accessToken'); // Replace 'accessToken' with your actual cookie name
  return !!accessToken; // Returns true if accessToken exists, otherwise false
};