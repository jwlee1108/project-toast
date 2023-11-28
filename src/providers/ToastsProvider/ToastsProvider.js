import React from 'react';
import useEscapeKey from '../../hooks/use-escape-key';

export const ToastsContext = React.createContext();
function ToastsProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);


  function handleKeydown(ev) {
    if (ev.code === "Escape") {
      setToasts([]);
    }
  }

  useEscapeKey(handleKeydown);

  return (
    <ToastsContext.Provider value={{ toasts, setToasts }}>
      {children}
    </ToastsContext.Provider>
  );
}

export default ToastsProvider;
