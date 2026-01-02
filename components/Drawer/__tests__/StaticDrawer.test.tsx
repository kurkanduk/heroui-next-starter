import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import StaticDrawer from "../StaticDrawer";

describe("StaticDrawer", () => {
  it("renders children correctly", () => {
    render(
      <StaticDrawer>
        <div>Drawer Content</div>
      </StaticDrawer>
    );

    expect(screen.getByText("Drawer Content")).toBeInTheDocument();
  });

  it("renders with default placement left", () => {
    const { container } = render(
      <StaticDrawer>
        <div>Content</div>
      </StaticDrawer>
    );

    const drawer = container.firstChild as HTMLElement;
    expect(drawer).toBeInTheDocument();
    expect(drawer.tagName).toBe("ASIDE");
  });

  it("renders with right placement", () => {
    const { container } = render(
      <StaticDrawer placement="right">
        <div>Content</div>
      </StaticDrawer>
    );

    const drawer = container.firstChild as HTMLElement;
    expect(drawer).toBeInTheDocument();
    expect(drawer.tagName).toBe("ASIDE");
  });

  it("renders with default width", () => {
    const { container } = render(
      <StaticDrawer>
        <div>Content</div>
      </StaticDrawer>
    );

    const drawer = container.firstChild as HTMLElement;
    expect(drawer).toHaveClass("w-64");
  });

  it("renders with custom width", () => {
    const { container } = render(
      <StaticDrawer width="w-80">
        <div>Content</div>
      </StaticDrawer>
    );

    const drawer = container.firstChild as HTMLElement;
    expect(drawer).toHaveClass("w-80");
  });

  it("renders collapsed state", () => {
    const { container } = render(
      <StaticDrawer isCollapsed={true}>
        <div>Content</div>
      </StaticDrawer>
    );

    const drawer = container.firstChild as HTMLElement;
    expect(drawer).toHaveClass("w-20");
  });

  it("applies sticky positioning", () => {
    const { container } = render(
      <StaticDrawer>
        <div>Content</div>
      </StaticDrawer>
    );

    const drawer = container.firstChild as HTMLElement;
    expect(drawer).toHaveClass("sticky", "top-[var(--navbar-height)]");
  });

  it("applies z-index", () => {
    const { container } = render(
      <StaticDrawer>
        <div>Content</div>
      </StaticDrawer>
    );

    const drawer = container.firstChild as HTMLElement;
    expect(drawer).toHaveClass("z-39");
  });

  it("applies custom className", () => {
    const { container } = render(
      <StaticDrawer className="custom-class">
        <div>Content</div>
      </StaticDrawer>
    );

    const drawer = container.firstChild as HTMLElement;
    expect(drawer).toHaveClass("custom-class");
  });

  it("handles collapsed state with right placement", () => {
    const { container } = render(
      <StaticDrawer placement="right" isCollapsed={true}>
        <div>Content</div>
      </StaticDrawer>
    );

    const drawer = container.firstChild as HTMLElement;
    expect(drawer).toHaveClass("w-20");
  });
});
