exports.createPages = async gatsby => {
  await require('./podcast')(gatsby);
  await require('./persons')(gatsby);
  // eslint-disable-next-line
  return Promise.resolve();
};
