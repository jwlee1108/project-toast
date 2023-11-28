import React from 'react';

export const ToastsContext = React.createContext();
function ToastsProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    function handleKeydown(ev) {
      if (ev.code === "Escape") {
        setToasts([]);
      }
    }

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    }
  }, [])

  return (
    <ToastsContext.Provider value={{ toasts, setToasts }}>
      {children}
    </ToastsContext.Provider>
  );
}

export default ToastsProvider;
