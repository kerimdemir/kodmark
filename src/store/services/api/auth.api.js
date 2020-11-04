import ajax from '../AxiosService';

const API_URL = 'https://gann.digilabtech.com';

export const signIn = (email, password) => {
  const data = {
    email,
    password,
    isCustomer: false,
  };
  const test = {
    email: 'api@gannmarkets.com',
    password: 'gZadyxtZBn23Fj2J',
    isCustomer: false,
  };

  return ajax.post(`${API_URL}/api/auth/login`, test);
};

export const getRefreshToken = (access_token, refresh_token) => {
  const data = {
    expiredToken: access_token,
    refreshToken: refresh_token,
  };

  return ajax.post(`${API_URL}/api/auth/refresh-token`, data);
};
