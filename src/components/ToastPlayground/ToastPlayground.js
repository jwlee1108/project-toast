import React from 'react';

import ToastForm from '../ToastForm';
import ToastShelf from '../ToastShelf';
import ToastsProvider from '../../providers/ToastsProvider';

import styles from './ToastPlayground.module.css';

function ToastPlayground() {
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastsProvider>
        <ToastShelf />
        <ToastForm />
      </ToastsProvider>
    </div>
  );
}

export default ToastPlayground;
