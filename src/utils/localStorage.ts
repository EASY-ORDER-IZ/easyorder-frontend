/**
 * Remove an item from localStorage by ID
 * @param storageKey - The key of the localStorage array
 * @param id - The ID of the item to remove
 * @returns boolean - True if item was removed, false if not found
 */
export const removeFromLocalStorageById = (storageKey: string, id: string | number): boolean => {
  try {
    // Get the existing data from localStorage
    const existingData = localStorage.getItem(storageKey);

    if (!existingData) {
      return false;
    }

    // Parse the JSON data
    const parsedData = JSON.parse(existingData);

    // Ensure it's an array
    if (!Array.isArray(parsedData)) {
      return false;
    }

    // Find the index of the item with the matching ID
    const itemIndex = parsedData.findIndex((item) => item.id === id);

    if (itemIndex === -1) {
      return false; // Item not found
    }

    // Remove the item from the array
    parsedData.splice(itemIndex, 1);

    // Save the updated array back to localStorage
    localStorage.setItem(storageKey, JSON.stringify(parsedData));

    return true;
  } catch (error) {
    console.error('Error removing item from localStorage:', error);
    return false;
  }
};

/**
 * Get all items from a localStorage key
 * @param storageKey - The key of the localStorage array
 * @returns Array of items or empty array
 */
export const getFromLocalStorage = (storageKey: string): [] => {
  try {
    const existingData = localStorage.getItem(storageKey);
    return existingData ? JSON.parse(existingData) : [];
  } catch (error) {
    console.error('Error getting items from localStorage:', error);
    return [];
  }
};

/**
 * Add a single item to localStorage array
 * @param storageKey - The key of the localStorage array
 * @param newItem - The item to add
 * @param preventDuplicates - Whether to prevent duplicate items by ID (default: true)
 * @returns boolean - True if item was added, false if duplicate (when preventDuplicates is true)
 */
export const addToLocalStorage = (
  storageKey: string,
  newItem: T,
  preventDuplicates: boolean = true,
): boolean => {
  try {
    // Get existing items
    const existingItems = getFromLocalStorage(storageKey);

    // Check for duplicates if preventDuplicates is true
    if (preventDuplicates && newItem.id) {
      const exists = existingItems.some((item) => item.id === newItem.id);
      if (exists) {
        return false; // Item already exists
      }
    }

    // Add the new item
    existingItems.push(newItem);

    // Save back to localStorage
    saveToLocalStorage(storageKey, existingItems);

    return true;
  } catch (error) {
    console.error('Error adding item to localStorage:', error);
    return false;
  }
};

/**
 * Save an array of items to localStorage (overwrites existing data)
 * @param storageKey - The key to save to
 * @param data - The array of items to save
 */
export const saveToLocalStorage = (storageKey: string, data: []): void => {
  try {
    localStorage.setItem(storageKey, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving items to localStorage:', error);
  }
};
