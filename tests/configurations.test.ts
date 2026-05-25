import { describe, it, expect } from "vitest";
import { configuration } from "@/lib/configurations";

const ALLOWED_ICONS = new Set([
  "compass",
  "cursor",
  "scissors",
  "wand",
  "box",
  "search",
  "bookmark",
  "layers",
  "rocket",
]);

describe("configuration", () => {
  it("contains at least one section", () => {
    expect(configuration.length).toBeGreaterThan(0);
  });

  it("each section has id, title, description, iconKey and cards array", () => {
    for (const section of configuration) {
      expect(typeof section.id).toBe("string");
      expect(section.id).toMatch(/^[a-z0-9-]+$/);
      expect(typeof section.sectionTitle).toBe("string");
      expect(section.sectionTitle.length).toBeGreaterThan(0);
      expect(typeof section.sectionDescription).toBe("string");
      expect(ALLOWED_ICONS.has(section.iconKey)).toBe(true);
      expect(Array.isArray(section.cards)).toBe(true);
      expect(section.cards.length).toBeGreaterThan(0);
    }
  });

  it("each card has a title, description and non-empty entries", () => {
    for (const section of configuration) {
      for (const card of section.cards) {
        expect(typeof card.title).toBe("string");
        expect(card.title.length).toBeGreaterThan(0);
        expect(typeof card.description).toBe("string");
        expect(Array.isArray(card.entries)).toBe(true);
        expect(card.entries.length).toBeGreaterThan(0);
        for (const entry of card.entries) {
          expect(typeof entry.command).toBe("string");
          expect(entry.command.length).toBeGreaterThan(0);
          expect(typeof entry.description).toBe("string");
          expect(entry.description.length).toBeGreaterThan(0);
        }
      }
    }
  });

  it("section ids and titles are unique", () => {
    const ids = configuration.map((s) => s.id);
    const titles = configuration.map((s) => s.sectionTitle);
    expect(new Set(ids).size).toBe(ids.length);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it("descriptions are not placeholders", () => {
    const placeholders = ["Stuff", "Splash", "Every day I'm traveling"];
    for (const section of configuration) {
      for (const card of section.cards) {
        expect(placeholders).not.toContain(card.description);
      }
    }
  });
});
