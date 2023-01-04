const handleError = (res, message, status) => {
  res.json({ message, status, data: null });
};
const handleSuccess = (res, message, status, data) => {
  res.json({ message, status, data });
};
module.exports = { handleError, handleSuccess };
