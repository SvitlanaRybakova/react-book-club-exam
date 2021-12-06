import React from 'react'
import {Row, Col} from 'react-bootstrap'
import styles from './Comment.module.css'
import userLogo from '../../assets/images/user.png'
const Comment = () => {
  return (
    <Row className={styles.commentWrapper}>
      <Row>
        <div className="userLogo">
          <img src={userLogo} alt="user logo" />
        </div>
        <Col className="username"> Bob</Col>
        <Col> 17:33 6th Aug 2021 </Col>
      </Row>
      <Row className="my-3">
        <p>The best book what I have ever read :-)</p>
      </Row>
    </Row>
  );
}

export default Comment
