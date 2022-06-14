import Footer from "./Footer";
import { render, screen } from "@testing-library/react";

describe("Footer component", () => {
    test("Footer rendered 1 time", () => {
        render(<Footer/>);
        const element = screen.getByRole("contentinfo");
        expect(element).toBeInTheDocument()
    })
})