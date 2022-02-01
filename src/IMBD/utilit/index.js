// +++++++++++++++

export const filterCatgry = (arr, tag, value) => {
  return arr.filter((item) =>
    item[tag].toLowerCase().includes(value.toLowerCase())
  );
};

export const addToObj = (arr) => {
  return arr.map((item, i, arr) => {
    return i % 2
      ? { ...item, category: "movie" }
      : { ...item, category: "tv-show" };
  });
};

export const sortfilter = (arr, tag) => {
  arr.sort((a, b) => a[tag] - b[tag]);
};

export const sortfilterDescending = (arr, tag) => {
  arr.sort((a, b) => b[tag] - a[tag]);
};

export const sortfilterAlpha = (arr, tag) => {
  arr.sort((a, b) => a[tag].toLowerCase().localeCompare(b[tag].toLowerCase()));
};

export const sortfilterAlphaDescending = (arr, tag) => {
  arr.sort((a, b) => b[tag].toLowerCase().localeCompare(a[tag].toLowerCase()));
};

export const filterSearch = (arr, sarchTag, value) => {
  return arr.filter((item) =>
    item[sarchTag].toLowerCase().includes(value.toLowerCase())
  );
};

export const isUserValid = (arr, target) => {
  return arr.filter(
    (item) =>
      item.email === target.elements.email.value &&
      item.password === target.elements.password.value
  );
};

export const getObj = (target) => {
  return {
    name: target.elements.name.value,
    email: target.elements.email.value,
    password: target.elements.password.value,
  };
};

export const handleRegisterDataStore = (obj) => {
  const arr =
    JSON.parse(localStorage.getItem("userArr")) !== null
      ? JSON.parse(localStorage.getItem("userArr"))
      : [];
  localStorage.setItem("userArr", JSON.stringify(arr.concat(obj)));
};

export const makeFormEmpty = (target) => {
  Array.from(target.elements).forEach((item) => {
    item.value = "";
    item.disabled = true;
  });
};

export const isUserLogin = (userObj) => {
  return Object.keys(userObj).length ? true : false;
};

export const isRepeat = (arr, id) => {
  return arr.some((item) => item.id === id);
};

export const fetchAnyData = (url, tag, value) => {
  console.log(url);
  fetch(url)
    .then((promise) => promise.json())
    .then((item) => tag(item[value]));
};
