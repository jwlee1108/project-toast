import React from 'react';
import {AlertOctagon, AlertTriangle, CheckCircle, Info, X,} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ message, variant, id, setToasts }) {
  const IconType = ICONS_BY_VARIANT[variant];

  function handleCloseButtonClick() {
    setToasts(currentToasts => {
      return currentToasts.filter(toast => toast.id !== id);
    })
  }

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <IconType size={24} />
      </div>
      <p className={styles.content}>
          {message}
      </p>
      <button className={styles.closeButton} onClick={handleCloseButtonClick}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
