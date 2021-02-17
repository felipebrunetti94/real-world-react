const get = (key) => {
  try {
    const JSONvalue = localStorage.getItem(key);
    return JSON.parse(JSONvalue);
  } catch (error) {
    console.error("CacheError", error);
    return null;
  }
};

const set = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("CacheError", error);
  }
};

const clear = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("CacheError", error);
  }
};

const cache = {
  get,
  set,
  clear,
};

export default cache;
