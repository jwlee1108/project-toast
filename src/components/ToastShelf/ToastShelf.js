import React from 'react';

import Toast from '../Toast';
import { ToastsContext } from '../../providers/ToastsProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts, setToasts } = React.useContext(ToastsContext);

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
