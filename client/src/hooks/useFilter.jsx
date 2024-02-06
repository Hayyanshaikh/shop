import { useState, useEffect } from 'react';

const useFilter = ({ initialValue, data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    try {
      const regex = new RegExp(value, 'i');
      const filteredData = data.filter(item => {
        const properties = Object.keys(item);
        for (const prop of properties) {
          if (regex.test(item[prop])) {
            return true;
          }
        }
        return false;
      });

      setFilteredData(filteredData);
    } catch (error) {
      console.error('Invalid regular expression:', error.message);
    }
  }, [value, data]);

  return {
    value,
    data: filteredData,
    setData: setFilteredData,
    setValue,
  };
};

export default useFilter;
