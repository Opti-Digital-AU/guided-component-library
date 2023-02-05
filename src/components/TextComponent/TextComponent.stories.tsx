import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import TextComponent from "./TextComponent";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof TextComponent> = {
	title: "Components/TextComponent",
	component: TextComponent,
	argTypes: {
		headingText: { control: "text" },
	},
};

export default meta;
type Story = StoryObj<typeof TextComponent>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const ExampleOne: Story = {
	args: {
		headingText: "ExampleOne TextComponent Heading!",
	},
};

export const ExampleTwo: Story = {
	args: {
		headingText: "ExampleTwo TextComponent Heading!",
	},
};
