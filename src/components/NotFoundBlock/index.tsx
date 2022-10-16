import React, { FC } from 'react';

import styles from './notFoundBlock.module.scss';

const NotFoundBlock: FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😱</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>
        К сожалению данная позиция отсутствует в нашем интернет-магазине
      </p>
    </div>
  );
};

export default NotFoundBlock;
