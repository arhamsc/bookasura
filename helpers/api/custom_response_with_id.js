const objectResponseWithIdKey = (objectData) => {
  const resObj = {};
  for (let i in objectData) {
    if (Object.keys(objectData).length > 0) {
      resObj[objectData[i]._id] = { ...objectData[i]._doc };
    }
  }
  return resObj;
};

export default objectResponseWithIdKey
