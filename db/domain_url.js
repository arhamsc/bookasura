export const requestUrl = (endpoint) => {
  const url = process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000';
  return `${url}/${endpoint ?? ''}`;
};
