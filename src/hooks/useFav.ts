export interface expiringItem<T> {
  value: T;
  expireAt: Date;
}

export function addItemTOFav<T>(key: string, value: T): void {
  const now = new Date();
  const item = {
    value,
    expiry: now.getDate() + 7 * 24 * 60 * 60 * 1000,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

export function getItemFromLocalStorage<T>(key: string): T | null {
  const storageItem = localStorage.getItem(key);
  if (!storageItem) return null;

  try {
    const item: expiringItem<T> = JSON.parse(storageItem);
    const now = new Date();

    if (now > item.expireAt) {
      localStorage.removeItem(key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function removeItemFromFav(key: string): void {
  localStorage.removeItem(key);
}
