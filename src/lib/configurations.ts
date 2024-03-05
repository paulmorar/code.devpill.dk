export interface CardConfig {
  title: string;
  description: string;
  entries: {
    command: string;
    description: string;
  }[];
}

export interface ConfigGeneric {
  sectionTitle: string;
  sectionDescription: string;
  cards: CardConfig[];
}

export const configuration: ConfigGeneric[] = [
  {
    sectionTitle: "Basic commands",
    sectionDescription: "Stuff",
    cards: [
      {
        title: "Exit",
        description: "The thing no one knows how to do",
        entries: [
          {
            command: ":q",
            description: "Close file",
          },
          {
            command: ":qa",
            description: "Close all files",
          },
          {
            command: ":w",
            description: "Save",
          },
          {
            command: ":wq",
            description: "Save and close file",
          },
          {
            command: ":x",
            description: "Save and close file",
          },
          {
            command: "ZZ",
            description: "Save and quit",
          },
          {
            command: "ZQ",
            description: "Quit without checking changes",
          },
          {
            command: "Esc / <C-[>",
            description: "Exit insert mode",
          },
          {
            command: "<C-C>",
            description: "Exit insert mode, and abort current command",
          },
        ],
      },
      {
        title: "Word Navigation",
        description: "Every day I'm traveling",
        entries: [
          {
            command: "h / j / k / l",
            description: "Arrow keys",
          },
          {
            command: "<C-U> / <C-D>",
            description: "Half-page up/down",
          },
          {
            command: "<C-B> / <C-F>",
            description: "Page up/down",
          },
          {
            command: "b / w",
            description: "Previous/next word",
          },
          {
            command: "ge / e",
            description: "Previous/next end of word",
          },
          {
            command: "0",
            description: "Start of line",
          },
          {
            command: "^",
            description: "Start of line (after whitespace)",
          },
          {
            command: "$",
            description: "End of line",
          },
        ],
      },
      {
        title: "Document Navigation",
        description: "Every day I'm traveling",
        entries: [
          {
            command: "f{character}",
            description: "Go forward to a character",
          },
          {
            command: "F{character}",
            description: "Go backward to a character",
          },
          {
            command: "gg",
            description: "First line",
          },
          {
            command: "G",
            description: "Last line",
          },
          {
            command: ":{number}",
            description: "Go to line {number}",
          },
          {
            command: "{number}G",
            description: "Go to line {number}",
          },
          {
            command: "{number}j",
            description: "Go down {number} of lines",
          },
          {
            command: "{number}k",
            description: "Go up {number} of lines",
          },
        ],
      },
      {
        title: "Editing",
        description: "Splash",
        entries: [
          {
            command: "a",
            description: "Append",
          },
          {
            command: "A",
            description: "Append from end of line",
          },
          {
            command: "i",
            description: "Insert",
          },
          {
            command: "o",
            description: "Next line",
          },
          {
            command: "O",
            description: "Previous line",
          },
          {
            command: "s",
            description: "Delete char and insert",
          },
          {
            command: "S",
            description: "Delete line and insert",
          },
          {
            command: "C",
            description: "Delete until end of line and insert",
          },
          {
            command: "r",
            description: "Replace one character",
          },
          {
            command: "R",
            description: "Enter Replace mode",
          },
          {
            command: "u",
            description: "Undo changes",
          },
          {
            command: "<C-R>",
            description: "Redo changes",
          },
        ],
      },
      {
        title: "Visual Mode",
        description: "Splash",
        entries: [
          {
            command: "v",
            description: "Enter visual mode",
          },
          {
            command: "V",
            description: "Enter visual line mode",
          },
          {
            command: "<C-V>",
            description: "Enter visual block mode",
          },
          {
            command: "d / x",
            description: "Delete selection",
          },
          {
            command: "s",
            description: "Replace selection",
          },
          {
            command: "y",
            description: "Yank selection (Copy)",
          },
        ],
      },
      {
        title: "Clipboard",
        description: "Splash",
        entries: [
          {
            command: "x",
            description: "Delete character",
          },
          {
            command: "dd",
            description: "Delete line (Cut)",
          },
          {
            command: "yy",
            description: "Yank line (Copy)",
          },
          {
            command: "p",
            description: "Paste",
          },
          {
            command: "P",
            description: "Paste before",
          },
          {
            command: '"*p / "+p',
            description: "Paste from system clipboard",
          },
          {
            command: '"*y / "+y',
            description: "Paste to system clipboard",
          },
        ],
      },
    ],
  },
  {
    sectionTitle: "Operators",
    sectionDescription:
      "Operators let you operate in a range of text (defined by motion). These are performed in normal mode.",
    cards: [
      {
        title: "Operators list",
        description: "See :help operator",
        entries: [
          {
            command: "d",
            description: "Delete",
          },
          {
            command: "y",
            description: "Yank (copy)",
          },
          {
            command: "c",
            description: "Change (delete then insert)",
          },
          {
            command: ">",
            description: "Indent right",
          },
          {
            command: "<",
            description: "Indent left",
          },
          {
            command: "=",
            description: "Autoindent",
          },
          {
            command: "g~",
            description: "Swap case",
          },
          {
            command: "gU / gu",
            description: "Uppercase / Lowercase",
          },
          {
            command: "!",
            description: "Filter through external program",
          },
        ],
      },
      {
        title: "Examples",
        description: "Combine operators with motions to use them.",
        entries: [
          {
            command: "dd",
            description: "(repeat the letter) Delete current line",
          },
          {
            command: "dw",
            description: "Delete to next word",
          },
          {
            command: "db",
            description: "Delete to beginning of word",
          },
          {
            command: "2dd",
            description: "Delete 2 lines",
          },
          {
            command: "dip",
            description: "Delete a text object (inside paragraph)",
          },
          {
            command: "(in visual mode) d",
            description: "Delete selection",
          },
        ],
      },
    ],
  },
  {
    sectionTitle: "Text objects",
    sectionDescription:
      "Text objects let you operate (with an operator) in or around text blocks (objects).",
    cards: [
      {
        title: "Text objects",
        description: "See :help text object",
        entries: [
          {
            command: "p",
            description: "Paragraph",
          },
          {
            command: "w",
            description: "Word",
          },
          {
            command: "s",
            description: "Sentence",
          },
          {
            command: "[ ( { <",
            description: "A [], (), or {} block",
          },
          {
            command: "' \" `",
            description: "A quoted string",
          },
          {
            command: "b",
            description: "A block [(",
          },
          {
            command: "B",
            description: "A block in [{",
          },
          {
            command: "t",
            description: "A XML tag block",
          },
        ],
      },
      {
        title: "Examples",
        description: "See Operators for other things you can do.",
        entries: [
          {
            command: "vip",
            description: "Select paragraph",
          },
          {
            command: "vipipipip",
            description: "Select more",
          },
          {
            command: "yip",
            description: "Yank inner paragraph",
          },
          {
            command: "yap",
            description: "Yank paragraph (including newline)",
          },
          {
            command: "dip",
            description: "Delete inner paragraph",
          },
          {
            command: "cip",
            description: "Change inner paragraph",
          },
        ],
      },
    ],
  },
];
