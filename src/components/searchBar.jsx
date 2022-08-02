import React, { useState, useCallback, useEffect } from "react";
import styles from "../styles/searchBar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import UserCard from "./userCard";
import SearchList from "./searchList";

const SearchBar = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [inputText, setInputText] = useState(searchParams.get("q"));

  const [flag, setFlag] = useState(false);
  const [userFlag, setUserFlag] = useState(false);
  const [userList, setUserList] = useState([]);
  const [userData, setUserData] = useState();

  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      });
    };
  }

  const apiCall = useCallback(
    debounce(async (searchParams) => {
      const url = `http://api.github.com/search/users?q=${searchParams.get(
        "q"
      )}&per_page=10`;

      const response = await fetch(url).catch((err) => console.log(err));

      const user = await response.json();

      setUserList(user && user.items);
      // setUserFlag(false);
    }, 1000),
    [userList, userFlag]
  );

  useEffect(() => {
    if (searchParams.get("q") && typeof searchParams.get("q") === "string")
      apiCall(searchParams);
  }, [searchParams]);

  const handleChange = useCallback(
    (e) => {
      setFlag(true);
      setUserFlag(false);
      e.preventDefault();
      console.log(inputText);

      setInputText(e.target.value);
      setSearchParams({ q: e.target.value });
    },
    [inputText, flag, searchParams]
  );

  const handleSubmit = useCallback(
    async (e) => {
      // console.log(e.target.value);
      // e.preventDefault();

      const searchValue =
        e && e.target && e.target.value
          ? e.target.value
          : searchParams.get("q");

      try {
        let a = await axios.get(`http://api.github.com/users/${searchValue}`);
        console.log(a.data);
        setInputText(a.data.login);
        setSearchParams({ q: a.data.login });
        setUserData(a.data);
        setUserList([]);
        console.log(e.target.value);
        setFlag(false);
        setUserFlag(true);
      } catch (e) {
        console.log(e);
      }
    },
    [searchParams, userFlag, flag]
  );

  return (
    <>
      <form className={styles.mainSearchBar}>
        <div className={styles.userSearchBar}>
          <SearchIcon sx={{ color: "#2C58FE", marginRight: "10px" }} />
          <input
            onChange={(e) => handleChange(e)}
            className={styles.userInput}
            value={inputText}
            type="text"
            placeholder="    search GitHub Username..."
          />
          <button
            onClick={(e) => handleSubmit(e)}
            className={styles.userSearchButton}
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
      {flag && <SearchList data={userList} handleSubmit={handleSubmit} />}
      {userFlag && <UserCard data={userData} />}
    </>
  );
};

export default SearchBar;
