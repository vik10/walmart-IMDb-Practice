export const isRepeat = (arr, index) => {
  for (let item of arr) {
    if (item.id === index) return true;
  }
  return false;
};
