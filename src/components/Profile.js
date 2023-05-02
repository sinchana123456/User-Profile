import React, { Fragment } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import classes from "./Profile.module.css";

const Profile = ({ profileDetails }) => {
  const left_container = profileDetails.map((user) => (
    <div className={classes["left-container"]}>
      <img src={user.userProfilePic} alt="userPic" />
      <div className={classes["user-name"]}>
        <h2>{user.userName}</h2>
        <h3>{user.userProfession}</h3>
      </div>
      <div className={classes["about-me"]}>
        <h3>ABOUT ME</h3>
        <span>{user.aboutUser}</span>
      </div>
      <div className={classes.skills}>
        {user.userSkills.map((skill) => (
          <div>
            <h4>{skill.skill}</h4>
            <ProgressBar
              completed={skill.value}
              maxCompleted={100}
              barContainerClassName={classes.barContainer}
              bgColor="#aeb7c9"
              height="15px"
              labelSize="0px"
            />
          </div>
        ))}
      </div>
      <h3>CONTACTS</h3>
      <span>{user.userContact.email}</span>
      <span>{user.userContact.phone}</span>
    </div>
  ));
  const Helper = (props) => {
    var ret = props.collage.replace(/\\n/g,'\n');
    return(
    <Fragment>
      <div className={classes.helper}>
        <h5>{props.course}</h5>
        <h5>{props.year}</h5>
      </div>
      <span>{ret}</span>
    </Fragment>
  )};
  const right_container = profileDetails.map((user) => (
    <div className={classes["right-container"]}>
      <h3>EDUCATION</h3><br />
      {user.userEducation.map((edu) => (
        <Helper course={edu.course} year={edu.passOut} collage={edu.collage} />
      ))}
      <h3>LANGUAGES</h3><br />
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing</span><br /><br />
      <div className={classes.circleBar}>
        {user.language.map((lan) => (
          <div className={classes["circle-bar"]}>
            <CircularProgressbar
              styles={buildStyles({
                textColor: "#5d5d5d",
                trailColor: "#aeb7c9",
                pathColor: "#5d5d5d",
              })}
              value={lan.value}
              text={lan.language}
            />
          </div>
        ))}
      </div><br /><br />
      <h3>EXPERIENCE</h3><br />
      {user.experience.map((exp) => (
        <Helper course={exp.name} year={exp.year} collage={exp.expExplain} />
      ))}
    </div>
  ));
  return (
    <main className={classes.container}>
      {left_container}
      {right_container}
    </main>
  );
};

export default Profile;
