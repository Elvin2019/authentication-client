export const localStorageData = (() => {
    const saveData = <T>(key: string, data: T): T => {
      localStorage.setItem(key, JSON.stringify(data));
      return data;
    };
    const loadData = <T>(key: string, data: T): T => {
      return JSON.parse(localStorage.getItem(key) || JSON.stringify(data));
    };
    return {
      saveData,
      loadData,
    };
  })();
  