import React from "react";
import "../SearchResult/SearchResult.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="search--result">
      <img src={img} alt="" />

      <div className="search--result--info">
        <div className="search--result--info--top">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>

        <div className="search--result--info--bottom">
          <FavoriteBorderOutlinedIcon className="search--result--heart" />

          <div className="search--result--stars">
            <StarOutlinedIcon className="search--result--star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="search--results--price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
