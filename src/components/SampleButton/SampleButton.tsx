import React, { ReactNode } from "react";
import classes from "./SampleButton.module.css";

export interface ButtonProps {
	label: string;
	children: ReactNode;
}

// const Button = (props: ButtonProps) => {
// 	return <button className={styles.button}>{props.label}</button>;
// };

function SampleButton(props: ButtonProps) {
	return <button id={props.label} className={classes.button}>{props.children}</button>;
}

export default SampleButton;
