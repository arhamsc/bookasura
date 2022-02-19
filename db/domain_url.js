export const requestUrl = (endpoint) => {
  const url = process.env.NEXT_PUBLIC_FRONTEND_URL;
  return `${url}/${endpoint ?? ''}`;
};
