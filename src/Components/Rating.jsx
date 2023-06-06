import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} style={style}>
          {rating > i ? (
            <AiFillStar fontSize="20px" style={{margin:"5px"}}/>
          ) : (
            <AiOutlineStar fontSize="20px" style={{margin:"5px"}}/>
          )}
        </span>
      ))}
    </>
  );
};

export default Rating;