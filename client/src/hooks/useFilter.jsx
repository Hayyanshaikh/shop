import { useState, useEffect } from 'react';

const useFilter = ({ initialValue, initialData }) => {
  const [data, setData] = useState(initialData);
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    try {
      const regex = new RegExp(value, 'i');
      const filteredData = initialData.filter(item => {
        const properties = Object.keys(item);
        for (const prop of properties) {
          if (regex.test(item[prop])) {
            return true;
          }
        }
        return false;
      });

      if (JSON.stringify(data) !== JSON.stringify(filteredData)) {
        setData(filteredData);
      }
    } catch (error) {
      console.error('Invalid regular expression:', error.message);
    }
  }, [value, initialData, data]);

  return {
    value,
    data,
    setData,
    setValue,
  };
};

export default useFilter;