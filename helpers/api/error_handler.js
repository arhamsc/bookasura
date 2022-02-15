const errorHandler = (res, message, statusCode = 500) => {
  return res.status(statusCode).json({ error: { message } });
};

export default errorHandler;
