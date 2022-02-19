export const requestUrl = (endpoint) => {
  const url = `https://${process.env.VERCEL_URL}` || 'http://localhost:3000';
  return `${url}/${endpoint ?? ''}`;
};
