import React from "react";
import Styles from "../styles/searchList.module.css";

const SearchList = ({ data , handleSubmit}) => {
  console.log(data)
  return(
    <div className={Styles.box}>
      {data &&
       data.length !== 0 &&
      data.map((val, index) => {
        return(
       <>
        <ul>
          <li key ={val.id}>
            <button 
            type ="submit"
            className= {Styles.btn}
            onClick={(e) => {
              handleSubmit(e);
            }}
            value={val.login}
            >
              {val.login}
            </button>
          </li>
        </ul>
      </>
);
})}
</div>
);
};
export default SearchList;