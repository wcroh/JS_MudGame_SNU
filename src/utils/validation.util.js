const isStringType = (arg) => {
  return typeof arg === "string";
};

const validateName = (name) => {
  const regex = /^[a-zA-Z0-9]{4,12}$/;

  return regex.test(name);
};

const validateEmail = (email) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(email) && email.length <= 100;
};

const validatePassword = (password) => {
  return (
    typeof password === "string" &&
    password.length >= 8 &&
    password.length <= 16
  );
};

const filterObject = (obj, filter, filterValue) =>
  Object.keys(obj).reduce(
    (acc, val) =>
      obj[val][filter] === filterValue
        ? acc
        : {
            ...acc,
            [val]: obj[val],
          },
    {}
  );

const getAssetMoreThanZero = (assets) => {
  return Object.entries(assets).filter(([key, value]) => value > 0);
};

export {
  isStringType,
  validateName,
  validateEmail,
  validatePassword,
  filterObject,
  getAssetMoreThanZero,
};
