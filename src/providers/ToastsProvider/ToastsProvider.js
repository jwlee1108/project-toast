import React from 'react';

export const ToastsContext = React.createContext();
function ToastsProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);


  return (
    <ToastsContext.Provider value={{ toasts, setToasts }}>
      {children}
    </ToastsContext.Provider>
  );
}

export default ToastsProvider;
