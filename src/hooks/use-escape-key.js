import React from 'react';

function useEscapeKey(handleKeydown = () => {}) {
  React.useEffect(() => {
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    }
  }, [handleKeydown])
}

export default useEscapeKey;