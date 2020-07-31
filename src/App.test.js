import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Create a CRUD application for animal ‘top trumps’", () => {
    const { getByText } = render(<App />);
    const appHeading = getByText(/Animal ‘top trumps’/i);
    expect(appHeading).toBeInTheDocument();
});
