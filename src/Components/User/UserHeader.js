import React, { useState,  useEffect  } from 'react'
import { useLocation } from 'react-router-dom';

import UserHeaderNav from './UserHeaderNav';
import styles from '../../CSS/UserHeader.module.css'

const UserHeader = () => {
  const [title, setTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    switch(location.pathname) {
      case '/conta/estatisticas':
        setTitle('Estísticas');
        break;

      case '/conta/postar':
        setTitle('Poste sua Foto');
        break;
        
      default:
        setTitle('Minha Conta');
      
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader