export function sortByKey(objectsArray, key , ascending = true) {
    const sortedArray = [...objectsArray];
  
    sortedArray.sort((a, b) => {
      let valueA = a[key];
      let valueB = b[key];
  
      if (typeof valueA === 'string' && typeof valueB === 'string') {
        valueA = valueA.toLowerCase();
        valueB = valueB.toLowerCase();
        return ascending ? valueA.localeCompare(valueB): valueB.localeCompare(valueA)
      }
      
      return ascending ? valueA - valueB : valueB - valueA;
    });
  
    return sortedArray;
  }