import React from 'react'
import {Card, Button} from 'react-bootstrap'
import styles from './BooksList.module.css'
import noImage from '../../assets/images/noImg.png'

const BookCard = ({image, title}) => {
 
  return (
    <Card className={styles.cardWrapper}>
      <Card.Title
       className={styles.cardTitle}>{title}</Card.Title>
      <Card.Body>
      
        <Card.Img className={styles} src={image ? image : noImage} />
        <Button className={styles.cardBtn}>Join conversation</Button>
      </Card.Body>
    </Card>
  );
}

export default BookCard
