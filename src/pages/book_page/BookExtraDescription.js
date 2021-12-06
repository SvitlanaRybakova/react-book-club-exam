import React from "react";
import { Col, Row } from "react-bootstrap";
import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlineRequestPage } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { BsCalendarWeek } from "react-icons/bs";
import styles from "./BookPage.module.css";

const BookExtraDescription = ({ bookInfo }) => {
  const features = [
    {
      category: "Categories",
      icon: <BiCategoryAlt size={"1.5rem"} className={styles.extraDescrIcon} />,
      info: bookInfo.categories ? bookInfo?.categories[0] : "no data",
    },
    {
      category: "Page Count",
      icon: (
        <MdOutlineRequestPage
          size={"1.5rem"}
          className={styles.extraDescrIcon}
        />
      ),
      info: bookInfo.pageCount? bookInfo.pageCount: 'no data' ,
    },
    {
      category: "Language",
      icon: <GrLanguage size={"1.5rem"} className={styles.extraDescrIcon} />,
      info: bookInfo.language ? bookInfo.language : 'no data',
    },
    {
      category: "Publication date",
      icon: (
        <BsCalendarWeek size={"1.5rem"} className={styles.extraDescrIcon} />
      ),
      info: bookInfo.publishedDate ? bookInfo.publishedDate : 'no data',
    },
  ];
  return (
    <>
      <Row className={styles.extraDescrWrapper}>
        {features.map((feat, id) => (
          <Col key={id} className={styles.extraDescrCol}>
            <h6>{feat.category}</h6>
            {feat.icon}
            <p>{feat.info}</p>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default BookExtraDescription;
