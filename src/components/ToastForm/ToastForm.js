import React from 'react';
import styles from "./ToastForm.module.css";
import Button from "../Button";

import { VARIANT_OPTIONS, DEFAULT_OPTION_INDEX } from '../../constants/constants';

function ToastForm({ setToasts }) {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[DEFAULT_OPTION_INDEX]);
  function handleSubmit(ev) {
    ev.preventDefault();

    setToasts(currentToasts => {
      const nextToasts = [...currentToasts];
      nextToasts.push({ message, variant, id: crypto.randomUUID() });

      return nextToasts;
    })

    setMessage('');
    setVariant(VARIANT_OPTIONS[DEFAULT_OPTION_INDEX]);
  }

  return (
    <div className={styles.controlsWrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              value={message}
              className={styles.messageInput}
              required={true}
              onChange={(ev) => setMessage(ev.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((option) => {
              return (
                  <label htmlFor={`variant-${option}`} key={option}>
                    <input
                        id={`variant-${option}`}
                        type="radio"
                        name="variant"
                        value={option}
                        checked={option === variant}
                        onChange={(ev) => setVariant(ev.target.value)}
                    />
                    {option}
                  </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastForm;
