import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Typography from "../Typography";

describe("Typography", () => {
  it("renders children correctly", () => {
    render(<Typography>Test Text</Typography>);
    expect(screen.getByText("Test Text")).toBeInTheDocument();
  });

  it("renders with default variant body1", () => {
    const { container } = render(<Typography>Text</Typography>);
    const element = container.firstChild as HTMLElement;
    expect(element.tagName).toBe("P");
    expect(element).toHaveClass("text-base");
  });

  it("renders with h1 variant", () => {
    const { container } = render(<Typography variant="h1">Heading</Typography>);
    const element = container.firstChild as HTMLElement;
    expect(element.tagName).toBe("H1");
    expect(element).toHaveClass("text-4xl", "font-bold");
  });

  it("renders with h2 variant", () => {
    const { container } = render(<Typography variant="h2">Heading</Typography>);
    const element = container.firstChild as HTMLElement;
    expect(element.tagName).toBe("H2");
    expect(element).toHaveClass("text-3xl", "font-bold");
  });

  it("applies align prop", () => {
    const { container } = render(<Typography align="center">Text</Typography>);
    const element = container.firstChild as HTMLElement;
    expect(element).toHaveClass("text-center");
  });

  it("applies color prop", () => {
    const { container } = render(<Typography color="primary">Text</Typography>);
    const element = container.firstChild as HTMLElement;
    expect(element).toHaveClass("text-primary");
  });

  it("uses custom component", () => {
    const { container } = render(
      <Typography component="span">Text</Typography>
    );
    const element = container.firstChild as HTMLElement;
    expect(element.tagName).toBe("SPAN");
  });

  it("applies custom className", () => {
    const { container } = render(
      <Typography className="custom-class">Text</Typography>
    );
    const element = container.firstChild as HTMLElement;
    expect(element).toHaveClass("custom-class");
  });

  it("renders all variants correctly", () => {
    const variants = [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "body1",
      "body2",
      "subtitle1",
      "subtitle2",
      "caption",
      "overline",
    ] as const;

    variants.forEach((variant) => {
      const { container } = render(
        <Typography variant={variant}>Text</Typography>
      );
      const element = container.firstChild as HTMLElement;
      expect(element).toBeInTheDocument();
    });
  });
});
