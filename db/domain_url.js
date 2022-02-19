export const requestUrl = (endpoint) => {
  let url;
  if (process.env.NODE_ENV === 'production') {
    url = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  } else {
    url = `https://${process.env.VERCEL_URL}` || 'http://localhost:3000';
  }
  return `${url}/${endpoint ?? ''}`;
};
