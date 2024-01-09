import { createContext, useState, useEffect } from 'react';

export const TitleContext = createContext({
  title: '',
  setTitle: () => {},
});

export const TitleProvider = ({ children }) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    const targetElement = document.getElementById('backBtnDiv1'); // Adjust selector as needed
    if (targetElement) {
      if (title === 'Home') {
        targetElement.style.display = 'none';
      } else {
        targetElement.style.display = 'initial';
      }
    }
  }, [title]);

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
};
