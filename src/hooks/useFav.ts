export interface expiringItem<T> {
  value: T[];
  expireAt: Date;
}

// key       value
// fav        [{item} , {item} , ...ect]

export const addToFav = <T>(key: string, item: T) => {
  const store: T[] = [];

  const fav = localStorage.getItem(key);
  if (fav) {
    store.push(...JSON.parse(fav));
  }

  store.push(item);

  localStorage.setItem(key, JSON.stringify(store));
};

export const getAllFav = <T>(key: string): T[] => {
  const exist = localStorage.getItem(key);
  if (!exist) return [];
  return JSON.parse(exist);
};

export const getFavItem = (key: string, id: number) => {
  const exist = localStorage.getItem(key);
  if (!exist) return;
  const find = JSON.parse(exist).find((i) => i.id === id);
  return find;
};

export const removeFromFav = <T extends { id: number }>(key: string, id: number) => {
  const exist = localStorage.getItem(key);
  if (!exist) return;

  const items: T[] = JSON.parse(exist);
  const filtered = items.filter((i) => i.id !== id);

  localStorage.setItem(key, JSON.stringify(filtered));
};
