import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Stack from "../Stack";

describe("Stack", () => {
  it("renders children correctly", () => {
    render(
      <Stack>
        <div>Child 1</div>
        <div>Child 2</div>
      </Stack>
    );

    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
  });

  it("renders with default direction column", () => {
    const { container } = render(
      <Stack>
        <div>Child</div>
      </Stack>
    );

    const stack = container.firstChild as HTMLElement;
    expect(stack).toHaveClass("flex-col");
  });

  it("renders with row direction", () => {
    const { container } = render(
      <Stack direction="row">
        <div>Child</div>
      </Stack>
    );

    const stack = container.firstChild as HTMLElement;
    expect(stack).toHaveClass("flex-row");
  });

  it("applies spacing when provided as number", () => {
    const { container } = render(
      <Stack spacing={8}>
        <div>Child 1</div>
        <div>Child 2</div>
      </Stack>
    );

    const stack = container.firstChild as HTMLElement;
    expect(stack).toHaveStyle({ gap: "8px" });
  });

  it("applies spacing when provided as string", () => {
    const { container } = render(
      <Stack spacing="1rem">
        <div>Child 1</div>
        <div>Child 2</div>
      </Stack>
    );

    const stack = container.firstChild as HTMLElement;
    expect(stack).toHaveStyle({ gap: "1rem" });
  });

  it("renders custom divider between children", () => {
    const { container } = render(
      <Stack divider={<hr />} spacing={4}>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Stack>
    );

    const dividers = container.querySelectorAll("hr");
    expect(dividers).toHaveLength(2);
  });

  it("renders HeroUI Divider with horizontal orientation for column direction", () => {
    const { container } = render(
      <Stack direction="column" divider={true}>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Stack>
    );

    // HeroUI Divider renders as hr or div with role="separator"
    const dividers = container.querySelectorAll('[role="separator"]');
    expect(dividers.length).toBeGreaterThan(0);
  });

  it("renders HeroUI Divider with vertical orientation for row direction", () => {
    const { container } = render(
      <Stack direction="row" divider={true}>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Stack>
    );

    // HeroUI Divider renders as hr or div with role="separator"
    const dividers = container.querySelectorAll('[role="separator"]');
    expect(dividers.length).toBeGreaterThan(0);
  });

  it("applies spacing when divider is present", () => {
    const { container } = render(
      <Stack divider={true} spacing={6}>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Stack>
    );

    const stack = container.firstChild as HTMLElement;
    expect(stack).toHaveStyle({ gap: "6px" });
  });

  it("renders horizontal divider for column direction", () => {
    const { container } = render(
      <Stack direction="column" divider={true}>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Stack>
    );

    const dividers = container.querySelectorAll('[role="separator"]');
    expect(dividers.length).toBe(2);

    // Check that dividers have horizontal orientation
    dividers.forEach((divider) => {
      const element = divider as HTMLElement;
      const orientation = element.getAttribute("data-orientation");
      expect(orientation).toBe("horizontal");
    });
  });

  it("renders vertical divider for row direction", () => {
    const { container } = render(
      <Stack direction="row" divider={true}>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Stack>
    );

    const dividers = container.querySelectorAll('[role="separator"]');
    expect(dividers.length).toBe(2);

    // Check that dividers have vertical orientation
    dividers.forEach((divider) => {
      const element = divider as HTMLElement;
      const orientation = element.getAttribute("data-orientation");
      expect(orientation).toBe("vertical");
    });
  });

  it("uses custom component", () => {
    const { container } = render(
      <Stack component="section">
        <div>Child</div>
      </Stack>
    );

    expect(container.firstChild?.nodeName).toBe("SECTION");
  });

  it("applies custom className", () => {
    const { container } = render(
      <Stack className="custom-class">
        <div>Child</div>
      </Stack>
    );

    const stack = container.firstChild as HTMLElement;
    expect(stack).toHaveClass("custom-class");
  });
});
