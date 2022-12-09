import React from 'react';

import styles from '../../CSS/FeedPhotosItem.module.css'
import Image from './../Helper/Image';


const FeedPhotosItem = ({photo, setModalPhoto}) => {

  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem