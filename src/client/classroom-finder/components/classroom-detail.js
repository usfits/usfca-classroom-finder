import React from "react";
import {
  Page,
  BasicSegment
} from "@ombiel/aek-lib";
import Carousel from "./carousel-with-thumbnails";
import classroomDetailStyles from "../css/classroom-detail-styles.css";
import "../css/classroom-detail-styles.css"
import commonStyles from "../css/common-styles.css";
import DrivingSvg from "../icons/driving-icon";
import TransitSvg from "../icons/transit-icon";
import WalkingSvg from "../icons/walking-icon";
import AssistiveSvg from "../icons/assistive-icon";
import { bgColorMap } from "../constants";

export default function ClassroomDetail(props) {
    const masterData = props?.masterData;
    const classroomName = props.ctx.params.classroom;
    const buildingName = props.ctx.params.building;
    const buildingImageName = buildingName.replace(/\s*\(.*?\)\s*/g, '').trim().replace(/\s+/g, '-');
    
    const buildingObj = masterData.find(building=> building.building.indexOf(buildingName) !== -1);

    const classroomObj = buildingObj.classrooms.find(classroom=> classroom.room.indexOf(classroomName) !== -1);
    console.log(classroomObj);

    const directionItems = classroomObj.directions.split("\n");
    const directionDesc = directionItems.map((item, index) => <p key={index}>{index + 1}-{item}</p>);

    const imageItems = classroomObj.layout.map((item, index) => { return { id: index, value: item.thumbnails.large.url } });

    return (
        <Page>
            <BasicSegment style={{ padding: "0px" }}>
                <img className={classroomDetailStyles.imgFrame} src={`https://portal-na.campusm.exlibrisgroup.com/assets/UniversityofSanFrancisco/UniversityofSanFrancisco/AEKs/Classroom-finder/${buildingImageName}.png`}/>
            </BasicSegment>
            <BasicSegment className={classroomDetailStyles.buildingBanner}>
                <h4 className={commonStyles.textCenterWhite}>{buildingName}</h4>
            </BasicSegment>
            <BasicSegment className={commonStyles.backgroundGrey}>
                <h5 className={commonStyles.textCenterBlack}>DIRECTIONS TO THE BUILDING</h5>
                <div className={classroomDetailStyles.directionsIcons}>
                <img style={{ height: "60px", width: "60px" }} src={`https://portal-na.campusm.exlibrisgroup.com/assets/UniversityofSanFrancisco/UniversityofSanFrancisco/AEKs/Classroom-finder/transportation/driving.svg`}/>
                    <img style={{ height: "60px", width: "60px" }} src={`https://portal-na.campusm.exlibrisgroup.com/assets/UniversityofSanFrancisco/UniversityofSanFrancisco/AEKs/Classroom-finder/transportation/transit.svg`}/>
                    <img style={{ height: "60px", width: "60px" }} src={`https://portal-na.campusm.exlibrisgroup.com/assets/UniversityofSanFrancisco/UniversityofSanFrancisco/AEKs/Classroom-finder/transportation/walking.svg`}/>
                    <img style={{ height: "60px", width: "60px" }} src={`https://portal-na.campusm.exlibrisgroup.com/assets/UniversityofSanFrancisco/UniversityofSanFrancisco/AEKs/Classroom-finder/transportation/assistive.svg`}/>
                </div>
                <h5 className={commonStyles.textCenterBlack}>Directions to the classroom</h5>
                <h4 className={commonStyles.textCenterBlack}>{classroomName}</h4>
                {directionDesc}
            </BasicSegment>
            <BasicSegment>
                <h5>ROOM DESCRIPTION</h5>
                {classroomObj.roomDescription}
                <h5>CAPACITY</h5>
                {classroomObj.capacity}
                <h5>DISPLAY</h5>
                <div className={classroomDetailStyles.container}>
                    {classroomObj.display.map((item, index) => <div style={{ backgroundColor: bgColorMap[index], padding: "4px" }} key={index}>{item}</div>)}
                </div>
                <h5>CLASSROOM COMPUTER</h5>
                <div className={classroomDetailStyles.container}>
                    {classroomObj.classroomComputer.map((item, index) => <div style={{ backgroundColor: bgColorMap[index], padding: "4px" }} key={index}>{item}</div>)}
                </div>
                <h5>AV FEATURES</h5>
                <div className={classroomDetailStyles.container}>
                    {classroomObj.avFeatures.map((item, index) => {
                        const svg = item.includes("AirPlay") ? item.split(" ")[2].slice(1, 8) : item
                        return <div className={classroomDetailStyles.itemContainer} style={{ backgroundColor: bgColorMap[index] }}>
                            <span key={index}>{item}</span>
                            {svg !== "Blu-ray Player" && svg !== "HyFlex Equipped" && svg !== "Height-Adjustable Lectern" && svg !== "Cable Tuner" && <img className={classroomDetailStyles.avFeatureSvg} src={`https://portal-na.campusm.exlibrisgroup.com/assets/UniversityofSanFrancisco/UniversityofSanFrancisco/AEKs/Classroom-finder/${svg}.svg`}/>}
                        </div>
                    })}
                </div>
                <h5>LECTURE CAPTURE</h5>
                {classroomObj.lectureCapture}
                <h5>SEATING</h5>
                <div className={classroomDetailStyles.container}>
                    {classroomObj.seating.map((item, index) => <div style={{ backgroundColor: bgColorMap[index], padding: "4px" }} key={index}>{item}</div>)}
                </div>
                <h5>KEY NEEDED</h5>
                <div className={classroomDetailStyles.container}>
                    {classroomObj.keyNeeded.map((item, index) => <div style={{ backgroundColor: bgColorMap[index], padding: "4px" }} key={index}>{item}</div>)}
                </div>
                <h5>LAYOUT</h5>
                <Carousel imgs={imageItems}/>
            </BasicSegment>
        </Page>
    );
}
  