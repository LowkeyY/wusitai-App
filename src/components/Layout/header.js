import React from 'react';
import styles from './header.less';
function Header() {
  return (
     <div className={styles['logo-box']}>
       <img src={require('../../themes/images/logo.png')} alt=""/>
     </div>
  );
}
export default Header;

