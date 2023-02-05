import React from "react";
import classes from "./TextComponent.module.css";

export interface TextComponentTypes {
	headingText: string;
}

function TextComponent(props: TextComponentTypes) {
	return <h2 className={classes.textComponentHeading}>{props.headingText}</h2>;
}

export default TextComponent;
