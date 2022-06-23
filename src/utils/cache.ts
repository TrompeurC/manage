// 本地缓存

export const setLocalItem = (key: string, value: any) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalItem = (key: string) => {
  return window.localStorage.getItem(key);
};

export const deleteLocalItem = (key: string) => {
  window.localStorage.removeItem(key);
};

export const clearLocalItem = () => {
  window.localStorage.clear();
};
