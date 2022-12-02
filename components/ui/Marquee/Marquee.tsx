import React, { ReactNode, FC } from 'react';
import styles from './Marquee.module.css'

interface Props {
  children: ReactNode[]
}


const Marquee: FC<Props> = ({children}) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
}

export default Marquee;