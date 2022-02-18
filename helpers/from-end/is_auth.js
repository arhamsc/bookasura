export const isAuth = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    return token ? token : false;
  }
  return false;
};

export const logout = () => {
  if (typeof window !== 'undefined') {
    localStorage.clear();
  }
};
