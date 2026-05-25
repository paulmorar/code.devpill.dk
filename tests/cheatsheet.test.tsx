import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Cheatsheet } from "@/components/cheatsheet";
import type { ConfigGeneric } from "@/lib/configurations";

const fixture: ConfigGeneric[] = [
  {
    id: "alpha",
    sectionTitle: "Alpha Section",
    sectionDescription: "First section",
    iconKey: "compass",
    cards: [
      {
        title: "Greetings",
        description: "Say hello",
        entries: [
          { command: ":hello", description: "Says hello" },
          { command: ":bye", description: "Says goodbye" },
        ],
      },
    ],
  },
  {
    id: "beta",
    sectionTitle: "Beta Section",
    sectionDescription: "Second section",
    iconKey: "rocket",
    cards: [
      {
        title: "Launch",
        description: "Liftoff",
        entries: [{ command: ":launch", description: "Blast off" }],
      },
    ],
  },
];

describe("Cheatsheet", () => {
  it("renders every section by default", () => {
    render(<Cheatsheet configuration={fixture} />);
    expect(screen.getAllByText("Alpha Section").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Beta Section").length).toBeGreaterThan(0);
    expect(screen.getByText(":hello")).toBeInTheDocument();
    expect(screen.getByText(":launch")).toBeInTheDocument();
  });

  it("filters entries by command text", () => {
    render(<Cheatsheet configuration={fixture} />);
    fireEvent.change(screen.getByRole("searchbox"), {
      target: { value: "launch" },
    });
    expect(screen.queryByText(":hello")).not.toBeInTheDocument();
    expect(screen.getByText(":launch")).toBeInTheDocument();
  });

  it("filters by description text", () => {
    render(<Cheatsheet configuration={fixture} />);
    fireEvent.change(screen.getByRole("searchbox"), {
      target: { value: "goodbye" },
    });
    expect(screen.getByText(":bye")).toBeInTheDocument();
    expect(screen.queryByText(":launch")).not.toBeInTheDocument();
  });

  it("shows an empty state when nothing matches", () => {
    render(<Cheatsheet configuration={fixture} />);
    fireEvent.change(screen.getByRole("searchbox"), {
      target: { value: "zzznotamatch" },
    });
    expect(screen.getByText(/No commands match/i)).toBeInTheDocument();
  });

  it("clears the query via the clear button", () => {
    render(<Cheatsheet configuration={fixture} />);
    const input = screen.getByRole("searchbox") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "launch" } });
    expect(input.value).toBe("launch");
    fireEvent.click(screen.getByRole("button", { name: /clear search/i }));
    expect(input.value).toBe("");
    expect(screen.getByText(":hello")).toBeInTheDocument();
  });

  it("renders a nav link per section", () => {
    render(<Cheatsheet configuration={fixture} />);
    const nav = screen.getByRole("navigation", { name: /sections/i });
    expect(nav.querySelectorAll("a")).toHaveLength(fixture.length);
  });
});
