export const generateRandomId = () => {
  return Math.floor(Math.random() * Date.now());
};

export const generateRandomPower = () => {
  return Math.floor(Math.random() * 100) + 1;
};
