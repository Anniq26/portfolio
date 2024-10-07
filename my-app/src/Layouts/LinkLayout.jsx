import React from 'react';
import Header from '../headerxfootercomponents/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../headerxfootercomponents/Footer';
import styles from '../linklayout.module.css';

const LinkLayout = () => {
  return (
    <div className={styles.linklayoutwrapper}>
      <Header />
      <div className={styles.outletstyle}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LinkLayout;
