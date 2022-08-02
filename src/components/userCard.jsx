import React from "react";
import styles from "../styles/userCard.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import BusinessIcon from "@mui/icons-material/Business";
import { Grid, Typography } from "@mui/material";

function UserCard({ ...props }) {
  const { data } = props;
  return (
    <div className={styles.userCard}>
      <div className={styles.userCardUserAvatarWraper}>
        <img
          className={styles.userCardUserAvatar}
          src={ data && data.avatar_url}
          alt=""
        />
        <div className={styles.userCardUserInfo}>
          <h2 className={styles.userCardTitle}>{data && data.name}</h2>
          <h3 className={styles.userInfoUsername}>{ data && data.login}</h3>
          <p className={styles.userInfoJoinedDate}>{ data && data.created_at}</p>
        </div>
      </div>

      <div className={styles.userCardBio}>
        <p>{data && data.bio || "This profile has no bio"}</p>
      </div>

      <div className={styles.userCardStats}>
        <div className={styles.userRepos}>
          <p className={styles.userStatTitle}>Repos</p>
          <p className={styles.userStatNumber}>{data && data.public_repos}</p>
        </div>
        <div className={styles.userFollowers}>
          <p className={styles.userStatTitle}>Followers</p>
          <p className={styles.userStatNumber}>{data && data.followers}</p>
        </div>
        <div className={styles.userFollowing}>
          <p className={styles.userStatTitle}>Following</p>
          <p className={styles.userStatNumber}>{data && data.following}</p>
        </div>
      </div>
      {/* <ul className={styles.userCardContact}>
          <li>
            <LocationOnIcon />
            <p class="lock">{data.location || "not available"}</p>
          </li>
          <li>
            <LanguageIcon />
            <p class="lock">{data.blog || "not available"}</p>
          </li>
          <li>
            <TwitterIcon />
            <p class="lock">{data.twitter || "not available"}</p>
          </li>
          <li>
            <BusinessIcon />
            <p class="lock">{data.company || "not available"}</p>
          </li>
        </ul> */}
      <Grid className={styles.footer1}>
        <Grid container xs={12}>
          <Grid item container xs={12} md={6} lg={6}>
            <LocationOnIcon />
            <Typography sx={{ marginLeft: "4%" }}>
              {data && data.location || "not available"}
            </Typography>
          </Grid>
          <Grid item container xs={12} md={6} lg={6}>
            <LanguageIcon />
            <Typography sx={{ marginLeft: "4%" }}>
              {data && data.blog || "not available"}
            </Typography>
          </Grid>
          {""}
        </Grid>
        <Grid container xs={12}>
          <Grid item container xs={12} md={6} lg={6}>
            <TwitterIcon />
            <Typography sx={{ marginLeft: "4%" }}>
              {data && data.location || "not available"}
            </Typography>
          </Grid>{" "}
          <Grid item container xs={12} md={6} lg={6}>
            <BusinessIcon />
            <Typography sx={{ marginLeft: "4%" }}>
              {data && data.location || "not available"}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default UserCard;
