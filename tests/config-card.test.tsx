import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ConfigCard } from "@/components/config-card";

const sampleConfig = {
  title: "Sample Title",
  description: "Sample Description",
  entries: [
    { command: ":q", description: "Close file" },
    { command: ":w", description: "Save" },
  ],
};

describe("ConfigCard", () => {
  it("renders the title and description", () => {
    render(<ConfigCard config={sampleConfig} />);
    expect(screen.getByText("Sample Title")).toBeInTheDocument();
    expect(screen.getByText("Sample Description")).toBeInTheDocument();
  });

  it("renders all entry commands and descriptions", () => {
    render(<ConfigCard config={sampleConfig} />);
    for (const entry of sampleConfig.entries) {
      expect(screen.getByText(entry.command)).toBeInTheDocument();
      expect(screen.getByText(entry.description)).toBeInTheDocument();
    }
  });

  it("renders one row per entry", () => {
    render(<ConfigCard config={sampleConfig} />);
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(sampleConfig.entries.length);
  });

  it("renders no rows when entries is empty", () => {
    render(
      <ConfigCard config={{ title: "T", description: "D", entries: [] }} />,
    );
    expect(screen.queryAllByRole("row")).toHaveLength(0);
  });
});
