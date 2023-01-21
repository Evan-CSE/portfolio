import React from "react";
import AchievementCrousel from "./Achievements/AchievementsCrousel";
import CpProfile from "./CpProfile/CpProfile";
import Project from "./Project/Project";

export default function Body(){
    return (
        <>
          <CpProfile></CpProfile>
          <Project></Project>
        </>
    )
}
