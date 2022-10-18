import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import styles from './UserBar.module.css';

export function UserBar() {
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
            <p> Test </p>
      </div>
    </div>
  );
}
