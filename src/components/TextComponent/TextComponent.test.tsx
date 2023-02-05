import React from "react";
import { render } from "@testing-library/react";

import TextComponent from "./TextComponent";

describe("TextComponent", () => {
  test("renders the TextComponent component", () => {
    const headingText = "TextComponent Heading Jest Text";
    render(<TextComponent headingText={headingText} />);
  });
});