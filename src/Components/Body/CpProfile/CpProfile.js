import React from "react"
import AchievementCrousel from "../Achievements/AchievementsCrousel"
import MyPieChart from "../PieChart/MyPieChart"

export default function CpProfile(){
    return (
        <>
        <p style={{fontSize:'30px',borderBottom:'5px solid gray',padding:'15px',color:'blue'}}>
      CP Profile
      </p>
        <div className="row justify-content-between align-items-center mt-1">
        <MyPieChart></MyPieChart>
        <AchievementCrousel></AchievementCrousel>
        </div>
        </>
    )
}