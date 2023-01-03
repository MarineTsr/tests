export const add = (a, b) => {
  return a + b;
};

export const timer = async (callback) => {
  setTimeout(() => {
    callback("Hello world !");
  }, 10000);
};
