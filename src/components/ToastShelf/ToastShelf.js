import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, setToasts }) {

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ message, variant, id}) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast variant={variant} message={message} id={id} setToasts={setToasts} />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
