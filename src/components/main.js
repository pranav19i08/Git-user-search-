import React,{useState} from "react";
import SearchBar from "./searchBar";


// const dummyData = {
//   login: "pranav19i08",
//   id: 90757050,
//   node_id: "MDQ6VXNlcjkwNzU3MDUw",
//   avatar_url: "https://avatars.githubusercontent.com/u/90757050?v=4",
//   gravatar_id: "",
//   url: "https://api.github.com/users/pranav19i08",
//   html_url: "https://github.com/pranav19i08",
//   followers_url: "https://api.github.com/users/pranav19i08/followers",
//   following_url:
//     "https://api.github.com/users/pranav19i08/following{/other_user}",
//   gists_url: "https://api.github.com/users/pranav19i08/gists{/gist_id}",
//   starred_url:
//     "https://api.github.com/users/pranav19i08/starred{/owner}{/repo}",
//   subscriptions_url: "https://api.github.com/users/pranav19i08/subscriptions",
//   organizations_url: "https://api.github.com/users/pranav19i08/orgs",
//   repos_url: "https://api.github.com/users/pranav19i08/repos",
//   events_url: "https://api.github.com/users/pranav19i08/events{/privacy}",
//   received_events_url:
//     "https://api.github.com/users/pranav19i08/received_events",
//   type: "User",
//   site_admin: false,
//   name: "Pranav Mishra",
//   company: null,
//   blog: "",
//   location: null,
//   email: null,
//   hireable: null,
//   bio: null,
//   twitter_username: null,
//   public_repos: 3,
//   public_gists: 0,
//   followers: 0,
//   following: 0,
//   created_at: "2021-09-15",
//   updated_at: "2022-07-26T06:28:57Z",
// };

function main(props) {
const[userData, setUserData] = useState();
console.log(userData);
  return (
    <>
      <main>
        <SearchBar setUserData={setUserData} userData={userData} />
      </main>
    </>
  );
}
export default main;
