export const requestUrl = (endpoint) => {
  return `http://localhost:3000/${endpoint ?? ''}`;
};
