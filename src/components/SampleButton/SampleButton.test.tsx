import React from "react";
import { render } from "@testing-library/react";

import SampleButton from "./SampleButton";

describe("SampleButton", () => {
  test("renders the SampleButton component", () => {
    const label = "SampleButton Jest Test Label Text";
    const innerText = "Sample Button Text";
    render(<SampleButton label={label}>{innerText}</SampleButton>);
  });
});