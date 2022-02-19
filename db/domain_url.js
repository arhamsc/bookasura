export const requestUrl = (endpoint) => {
  const url = process.env.VERCEL_URL || 'http://localhost:3000';
  return `${url}/${endpoint ?? ''}`;
};
