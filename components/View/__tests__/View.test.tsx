import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import View from "../View";

describe("View", () => {
  it("renders children correctly", () => {
    render(
      <View>
        <div>View Content</div>
      </View>
    );

    expect(screen.getByText("View Content")).toBeInTheDocument();
  });

  it("renders as main element by default", () => {
    const { container } = render(
      <View>
        <div>Content</div>
      </View>
    );

    expect(container.firstChild?.nodeName).toBe("MAIN");
  });

  it("applies padding for drawer on left when hasDrawer is true", () => {
    const { container } = render(
      <View hasDrawer={true} drawerWidth="w-64" drawerPlacement="left">
        <div>Content</div>
      </View>
    );

    const view = container.firstChild as HTMLElement;
    expect(view).toHaveClass("pl-64");
  });

  it("applies padding for drawer on right when hasDrawer is true", () => {
    const { container } = render(
      <View hasDrawer={true} drawerWidth="w-64" drawerPlacement="right">
        <div>Content</div>
      </View>
    );

    const view = container.firstChild as HTMLElement;
    expect(view).toHaveClass("pr-64");
  });

  it("applies padding for collapsed drawer (w-20)", () => {
    const { container } = render(
      <View hasDrawer={true} drawerWidth="w-20" drawerPlacement="left">
        <div>Content</div>
      </View>
    );

    const view = container.firstChild as HTMLElement;
    expect(view).toHaveClass("pl-20");
  });

  it("applies inline style padding for pixel values", () => {
    const { container } = render(
      <View hasDrawer={true} drawerWidth="256px" drawerPlacement="left">
        <div>Content</div>
      </View>
    );

    const view = container.firstChild as HTMLElement;
    expect(view).toHaveStyle({ paddingLeft: "256px" });
  });

  it("applies inline style padding for numeric values", () => {
    const { container } = render(
      <View hasDrawer={true} drawerWidth={256} drawerPlacement="left">
        <div>Content</div>
      </View>
    );

    const view = container.firstChild as HTMLElement;
    expect(view).toHaveStyle({ paddingLeft: "256px" });
  });

  it("applies padding for header height", () => {
    const { container } = render(
      <View headerHeight={64}>
        <div>Content</div>
      </View>
    );

    const view = container.firstChild as HTMLElement;
    expect(view).toHaveStyle({ paddingTop: "64px" });
  });

  it("applies padding for header height as string", () => {
    const { container } = render(
      <View headerHeight="64px">
        <div>Content</div>
      </View>
    );

    const view = container.firstChild as HTMLElement;
    expect(view).toHaveStyle({ paddingTop: "64px" });
  });

  it("does not apply drawer padding when hasDrawer is false", () => {
    const { container } = render(
      <View hasDrawer={false} drawerWidth="w-64">
        <div>Content</div>
      </View>
    );

    const view = container.firstChild as HTMLElement;
    expect(view).not.toHaveClass("pl-64");
    expect(view).not.toHaveClass("pr-64");
  });

  it("applies both drawer and header padding", () => {
    const { container } = render(
      <View
        hasDrawer={true}
        drawerWidth="w-64"
        drawerPlacement="left"
        headerHeight={64}
      >
        <div>Content</div>
      </View>
    );

    const view = container.firstChild as HTMLElement;
    expect(view).toHaveClass("pl-64");
    expect(view).toHaveStyle({ paddingTop: "64px" });
  });

  it("applies custom className", () => {
    const { container } = render(
      <View className="custom-class">
        <div>Content</div>
      </View>
    );

    const view = container.firstChild as HTMLElement;
    expect(view).toHaveClass("custom-class");
  });

  it("handles right placement with pixel width", () => {
    const { container } = render(
      <View hasDrawer={true} drawerWidth="200px" drawerPlacement="right">
        <div>Content</div>
      </View>
    );

    const view = container.firstChild as HTMLElement;
    expect(view).toHaveStyle({ paddingRight: "200px" });
  });

  it("handles w-80 width class", () => {
    const { container } = render(
      <View hasDrawer={true} drawerWidth="w-80" drawerPlacement="left">
        <div>Content</div>
      </View>
    );

    const view = container.firstChild as HTMLElement;
    expect(view).toHaveClass("pl-80");
  });

  it("does not apply padding when drawerWidth is 0", () => {
    const { container } = render(
      <View hasDrawer={true} drawerWidth={0}>
        <div>Content</div>
      </View>
    );

    const view = container.firstChild as HTMLElement;
    expect(view).not.toHaveClass("pl-64");
    expect(view).not.toHaveClass("pr-64");
    // Check that paddingLeft is not set or is empty
    const paddingLeft = view.style.paddingLeft;
    expect(paddingLeft).toBe("");
  });

  it("does not apply padding when headerHeight is 0", () => {
    const { container } = render(
      <View headerHeight={0}>
        <div>Content</div>
      </View>
    );

    const view = container.firstChild as HTMLElement;
    // Check that paddingTop is not set or is empty
    const paddingTop = view.style.paddingTop;
    expect(paddingTop).toBe("");
  });
});
