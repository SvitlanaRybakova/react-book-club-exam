import React from "react";
import {Row, Col} from 'react-bootstrap'
import { firebaseTimestampToString } from "../../services/helpers";
import userLogo from "../../assets/images/user.png";
import { StarIcon } from "../create_comment/Rating_icons/RatingIcon";

const CommentItem = ({ comment }) => {
  return (
    <Row className="my-2">
      <Row>
        <div className="userLogo">
          <img
            src={comment.userPhoto ? comment.userPhoto : userLogo}
            alt="user logo"
          />
        </div>
        <Col className="username"> {comment.userName}</Col>
        <Col className="d-flex">
          {[1, 2, 3, 4, 5].map((index) => {
            return (
              <StarIcon
                key={index}
                fill={index <= comment.bookRating ? "#FFD233" : "none"}
              />
            );
          })}
        </Col>
        <Col className="text-secondary ">
         <span style={{fontSize: "0.8rem"}}>{firebaseTimestampToString(comment.created)}</span>
        </Col>
      </Row>
      <Row className="my-3">
        <p>{comment.comment}</p>
      </Row>
      <hr />
    </Row>
  );
};

export default CommentItem;
