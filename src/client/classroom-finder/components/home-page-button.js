import React from "react";
import { Button } from "@ombiel/aek-lib";
import commonStyles from "../css/common-styles.css";
export default function HomePageButton() {
  return ( 
    <Button href="#/" icon="home" className={`${commonStyles.btnGreen} ${commonStyles.btnWide}`}>Home</Button> 
  );
}
