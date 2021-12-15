import React, {useMemo} from 'react'
import styles from '../CreateComment.module.css';

export function StarIcon(props) {
  const { fill = "none" } = props;
  return (
    <svg
      className={styles.starIcon}
      fill={fill}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0491 2.92702C11.3491 2.00602 12.6521 2.00602 12.9511 2.92702L14.4701 7.60102C14.5355 7.80151 14.6625 7.9762 14.8332 8.10012C15.0038 8.22405 15.2092 8.29086 15.4201 8.29102H20.3351C21.3041 8.29102 21.7061 9.53102 20.9231 10.101L16.9471 12.989C16.7763 13.1132 16.6492 13.2882 16.584 13.4891C16.5188 13.6899 16.5188 13.9062 16.5841 14.107L18.1021 18.781C18.4021 19.703 17.3471 20.469 16.5641 19.899L12.5881 17.011C12.4172 16.8868 12.2114 16.8199 12.0001 16.8199C11.7888 16.8199 11.583 16.8868 11.4121 17.011L7.4361 19.899C6.6531 20.469 5.5981 19.702 5.8981 18.781L7.4161 14.107C7.48137 13.9062 7.48141 13.6899 7.4162 13.4891C7.351 13.2882 7.22389 13.1132 7.0531 12.989L3.0771 10.101C2.2931 9.53102 2.6971 8.29102 3.6651 8.29102H8.5791C8.79014 8.29107 8.9958 8.22436 9.16662 8.10042C9.33744 7.97648 9.46467 7.80167 9.5301 7.60102L11.0491 2.92702V2.92702Z"
        stroke="#FFD233"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const RatingIcon = (props) => {
  const {
    index,
    rating,
    hoverRating,
    onMouseEnter,
    onMouseLeave,
    onSaveRating,
  } = props;

  //changes the color to yellow depending on hover ond stars index
  const fill = useMemo(() => {
    if (hoverRating >= index) {
      return "#FFD233";
    } else if (!hoverRating && rating >= index) {
      return "#FFD233";;
    }
    return "none";
  }, [rating, hoverRating, index]);

  return (
    
      <div
        className={styles.starsWrapper}
        onMouseEnter={() => onMouseEnter(index)}
        onMouseLeave={() => onMouseLeave()}
        onClick={() => onSaveRating(index)}
      >
        <StarIcon fill={fill} />
      </div>
    
  );
}

export default RatingIcon
