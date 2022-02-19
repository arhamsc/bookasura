export const requestUrl = (endpoint) => {
  const url = `https://${process.env.VERCEL_URL}`;
  return `${url}/${endpoint ?? ''}`;
};
