import jwt from 'jwt-decode';

//** +[1] set token when user login  **/
export const setAuthToken = token => {
  localStorage.setItem('token', token);
};

//** +[2] get token and user if his logged in **/
export const getAuthToken = () => {
  if (localStorage.getItem('token')) {
    const user = jwt(localStorage.getItem('token'));

    if (Date.now() >= user.exp * 1000) {
      // remove token
      removeAuthToken();
      return {};
    }

    return {
      token: localStorage.getItem('token'),
      user: user,
    };
  } else {
    return {};
  }
};

//** +[3] remove token form local storage **/
export const removeAuthToken = () => {
  if (localStorage.getItem('token')) {
    localStorage.removeItem('token');
  }
};
