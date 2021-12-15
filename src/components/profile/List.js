import React from 'react'
import { ListGroup, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import styles from './Profile.module.css'

const List = () => {
  const navigate = useNavigate()
  return (
    <>
      <ListGroup as="ol" numbered className="mt-4">
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
        </ListGroup.Item>
      </ListGroup>
      <Button className={styles.saveBtn} onClick={() => navigate("/book-list")}>
        Go to all list
      </Button>
    </>
  );
}

export default List
