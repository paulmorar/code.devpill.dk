export type SectionIconKey =
  | "compass"
  | "cursor"
  | "scissors"
  | "wand"
  | "box"
  | "search"
  | "bookmark"
  | "layers"
  | "rocket";

export interface CardConfig {
  title: string;
  description: string;
  entries: { command: string; description: string }[];
}

export interface ConfigGeneric {
  id: string;
  sectionTitle: string;
  sectionDescription: string;
  iconKey: SectionIconKey;
  cards: CardConfig[];
}

export const configuration: ConfigGeneric[] = [
  {
    id: "basics",
    sectionTitle: "The Basics",
    sectionDescription:
      "The handful of commands you actually need on day one — entering, exiting, saving, and undoing.",
    iconKey: "compass",
    cards: [
      {
        title: "Exiting Vim",
        description: "The eternal question — finally answered.",
        entries: [
          { command: ":q", description: "Close file" },
          { command: ":qa", description: "Close all files" },
          { command: ":w", description: "Save" },
          { command: ":wq", description: "Save and close file" },
          { command: ":x", description: "Save and close file" },
          { command: "ZZ", description: "Save and quit" },
          { command: "ZQ", description: "Quit without checking changes" },
          { command: "Esc / <C-[>", description: "Exit insert mode" },
          {
            command: "<C-C>",
            description: "Exit insert mode and abort current command",
          },
        ],
      },
      {
        title: "Word Navigation",
        description: "Move around without ever touching the arrow keys.",
        entries: [
          { command: "h / j / k / l", description: "Left / down / up / right" },
          { command: "<C-U> / <C-D>", description: "Half-page up / down" },
          { command: "<C-B> / <C-F>", description: "Page up / down" },
          { command: "b / w", description: "Previous / next word" },
          { command: "ge / e", description: "Previous / next end of word" },
          { command: "0", description: "Start of line" },
          { command: "^", description: "Start of line (after whitespace)" },
          { command: "$", description: "End of line" },
        ],
      },
      {
        title: "Document Navigation",
        description: "Jump across the file with surgical precision.",
        entries: [
          { command: "f{char}", description: "Jump forward to a character" },
          { command: "F{char}", description: "Jump backward to a character" },
          {
            command: "t{char}",
            description: "Jump until (before) a character",
          },
          { command: "gg", description: "First line" },
          { command: "G", description: "Last line" },
          { command: ":{n}", description: "Go to line {n}" },
          { command: "{n}G", description: "Go to line {n}" },
          { command: "{n}j", description: "Go down {n} lines" },
          { command: "{n}k", description: "Go up {n} lines" },
          { command: "%", description: "Jump to matching bracket" },
        ],
      },
      {
        title: "Editing",
        description: "Insert, append, replace — the core editing verbs.",
        entries: [
          { command: "a", description: "Append after cursor" },
          { command: "A", description: "Append at end of line" },
          { command: "i", description: "Insert before cursor" },
          { command: "I", description: "Insert at start of line" },
          { command: "o", description: "Open new line below" },
          { command: "O", description: "Open new line above" },
          { command: "s", description: "Delete character and insert" },
          { command: "S", description: "Delete line and insert" },
          { command: "C", description: "Change to end of line" },
          { command: "r", description: "Replace one character" },
          { command: "R", description: "Enter Replace mode" },
          { command: "u", description: "Undo" },
          { command: "<C-R>", description: "Redo" },
          { command: ".", description: "Repeat last change" },
        ],
      },
      {
        title: "Visual Mode",
        description: "Select first, act second.",
        entries: [
          { command: "v", description: "Enter visual mode" },
          { command: "V", description: "Enter visual line mode" },
          { command: "<C-V>", description: "Enter visual block mode" },
          { command: "d / x", description: "Delete selection" },
          { command: "s", description: "Replace selection" },
          { command: "y", description: "Yank selection (copy)" },
          { command: "gv", description: "Reselect last visual selection" },
          {
            command: "o",
            description: "Move cursor to other end of selection",
          },
        ],
      },
      {
        title: "Clipboard",
        description: "Cut, copy, paste — Vim style.",
        entries: [
          { command: "x", description: "Delete character" },
          { command: "dd", description: "Delete line (cut)" },
          { command: "yy", description: "Yank line (copy)" },
          { command: "p", description: "Paste after cursor" },
          { command: "P", description: "Paste before cursor" },
          { command: '"*p / "+p', description: "Paste from system clipboard" },
          { command: '"*y / "+y', description: "Yank to system clipboard" },
          { command: ":reg", description: "List all registers" },
        ],
      },
    ],
  },
  {
    id: "operators",
    sectionTitle: "Operators",
    sectionDescription:
      "Operators act on a range of text defined by a motion. Combine them to express edits like sentences.",
    iconKey: "cursor",
    cards: [
      {
        title: "Operators list",
        description: "See :help operator",
        entries: [
          { command: "d", description: "Delete" },
          { command: "y", description: "Yank (copy)" },
          { command: "c", description: "Change (delete then insert)" },
          { command: ">", description: "Indent right" },
          { command: "<", description: "Indent left" },
          { command: "=", description: "Auto-indent" },
          { command: "g~", description: "Swap case" },
          { command: "gU / gu", description: "Uppercase / lowercase" },
          { command: "!", description: "Filter through external program" },
        ],
      },
      {
        title: "Examples",
        description: "Compose operators with motions and counts.",
        entries: [
          { command: "dd", description: "Delete the current line" },
          { command: "dw", description: "Delete to next word" },
          { command: "db", description: "Delete to beginning of word" },
          { command: "2dd", description: "Delete 2 lines" },
          { command: "d$", description: "Delete to end of line" },
          { command: "dip", description: "Delete inside paragraph" },
          { command: 'ci"', description: "Change inside double quotes" },
          { command: "yi(", description: "Yank inside parentheses" },
          { command: ">ap", description: "Indent a paragraph" },
        ],
      },
    ],
  },
  {
    id: "text-objects",
    sectionTitle: "Text Objects",
    sectionDescription:
      "Operate on logical chunks — words, sentences, blocks, tags — with i (inside) or a (around).",
    iconKey: "box",
    cards: [
      {
        title: "Text objects",
        description: "See :help text-objects",
        entries: [
          { command: "p", description: "Paragraph" },
          { command: "w", description: "Word" },
          { command: "s", description: "Sentence" },
          { command: "[ ( { <", description: "A bracket / brace block" },
          { command: "' \" `", description: "A quoted string" },
          { command: "b", description: "A ( ) block" },
          { command: "B", description: "A { } block" },
          { command: "t", description: "An XML / HTML tag block" },
        ],
      },
      {
        title: "Examples",
        description: "Pair an operator with a text object.",
        entries: [
          { command: "vip", description: "Select inner paragraph" },
          { command: "yip", description: "Yank inner paragraph" },
          { command: "yap", description: "Yank paragraph (with newline)" },
          { command: "dip", description: "Delete inner paragraph" },
          { command: "cip", description: "Change inner paragraph" },
          { command: "dit", description: "Delete inside HTML / XML tag" },
          { command: "ca{", description: "Change around braces" },
        ],
      },
    ],
  },
  {
    id: "search-replace",
    sectionTitle: "Search & Replace",
    sectionDescription:
      "Find, jump, and rewrite text — from a single occurrence to every match in the file.",
    iconKey: "search",
    cards: [
      {
        title: "Searching",
        description: "Incremental search and navigation.",
        entries: [
          { command: "/pattern", description: "Search forward" },
          { command: "?pattern", description: "Search backward" },
          { command: "n / N", description: "Next / previous match" },
          { command: "*", description: "Search word under cursor (forward)" },
          { command: "#", description: "Search word under cursor (backward)" },
          { command: ":noh", description: "Clear search highlight" },
          { command: "gd", description: "Go to local definition" },
        ],
      },
      {
        title: "Substitution",
        description:
          "Replace patterns across lines, ranges, or the whole file.",
        entries: [
          {
            command: ":s/foo/bar/",
            description: "Replace first match on line",
          },
          {
            command: ":s/foo/bar/g",
            description: "Replace all on current line",
          },
          { command: ":%s/foo/bar/g", description: "Replace all in file" },
          {
            command: ":%s/foo/bar/gc",
            description: "Replace all in file, confirm each",
          },
          {
            command: ":'<,'>s/foo/bar/g",
            description: "Replace within visual selection",
          },
          {
            command: ":g/pattern/d",
            description: "Delete lines matching pattern",
          },
          {
            command: ":v/pattern/d",
            description: "Delete lines NOT matching pattern",
          },
        ],
      },
    ],
  },
  {
    id: "macros-registers",
    sectionTitle: "Macros & Registers",
    sectionDescription:
      "Record sequences of commands and replay them. Store yanked text in named registers.",
    iconKey: "wand",
    cards: [
      {
        title: "Macros",
        description: "Record once, replay anywhere.",
        entries: [
          { command: "q{a-z}", description: "Start recording into register" },
          { command: "q", description: "Stop recording" },
          { command: "@{a-z}", description: "Replay macro from register" },
          { command: "@@", description: "Replay last macro" },
          { command: "{n}@{a-z}", description: "Replay macro n times" },
          { command: ":reg", description: "List register contents" },
        ],
      },
      {
        title: "Registers",
        description: "Named clipboards for text and commands.",
        entries: [
          { command: '"{a-z}y', description: "Yank into named register" },
          { command: '"{a-z}p', description: "Paste from named register" },
          { command: '"0', description: "Last yanked text" },
          { command: '"+ / "*', description: "System clipboard" },
          { command: '"_', description: "Black hole — discard text" },
          { command: '"%', description: "Current file name" },
          { command: '":', description: "Last Ex command" },
        ],
      },
    ],
  },
  {
    id: "marks-jumps",
    sectionTitle: "Marks & Jumps",
    sectionDescription: "Bookmark positions in files and zip between them.",
    iconKey: "bookmark",
    cards: [
      {
        title: "Marks",
        description: "Set them with m, jump with ` or '.",
        entries: [
          { command: "m{a-z}", description: "Set mark in current buffer" },
          { command: "m{A-Z}", description: "Set global mark across files" },
          { command: "`{mark}", description: "Jump to exact mark position" },
          { command: "'{mark}", description: "Jump to start of mark's line" },
          { command: "`.", description: "Jump to last change" },
          {
            command: "``",
            description: "Jump back to position before last jump",
          },
          { command: ":marks", description: "List all marks" },
        ],
      },
      {
        title: "Jump list",
        description: "Vim remembers where you've been.",
        entries: [
          { command: "<C-O>", description: "Jump to older position" },
          { command: "<C-I>", description: "Jump to newer position" },
          { command: ":jumps", description: "Show jump list" },
          { command: "g;", description: "Go to older change" },
          { command: "g,", description: "Go to newer change" },
        ],
      },
    ],
  },
  {
    id: "windows-tabs",
    sectionTitle: "Windows, Buffers & Tabs",
    sectionDescription:
      "Split your screen, juggle buffers, and organize workspaces with tabs.",
    iconKey: "layers",
    cards: [
      {
        title: "Windows",
        description: "Split panes within the same Vim session.",
        entries: [
          { command: ":sp / :split", description: "Horizontal split" },
          { command: ":vsp / :vsplit", description: "Vertical split" },
          { command: "<C-W>h/j/k/l", description: "Move between windows" },
          { command: "<C-W>w", description: "Cycle windows" },
          { command: "<C-W>q", description: "Close window" },
          { command: "<C-W>o", description: "Close all other windows" },
          { command: "<C-W>=", description: "Equalize sizes" },
          { command: "<C-W>_", description: "Maximize height" },
          { command: "<C-W>|", description: "Maximize width" },
        ],
      },
      {
        title: "Buffers",
        description: "Files Vim has loaded into memory.",
        entries: [
          { command: ":ls / :buffers", description: "List buffers" },
          { command: ":b {name|n}", description: "Switch to buffer" },
          { command: ":bn / :bp", description: "Next / previous buffer" },
          { command: ":bd", description: "Delete (close) buffer" },
          { command: ":e {file}", description: "Edit file in current window" },
        ],
      },
      {
        title: "Tabs",
        description: "Workspaces holding window layouts.",
        entries: [
          { command: ":tabnew {file}", description: "Open file in new tab" },
          { command: "gt / gT", description: "Next / previous tab" },
          { command: "{n}gt", description: "Go to tab n" },
          { command: ":tabclose", description: "Close tab" },
          { command: ":tabonly", description: "Close all other tabs" },
        ],
      },
    ],
  },
  {
    id: "folding",
    sectionTitle: "Folding",
    sectionDescription:
      "Collapse regions of text so you can focus on what matters.",
    iconKey: "scissors",
    cards: [
      {
        title: "Folding commands",
        description: "See :help folding",
        entries: [
          { command: "zf{motion}", description: "Create fold over motion" },
          { command: "zo / zc", description: "Open / close fold" },
          { command: "za", description: "Toggle fold" },
          { command: "zR", description: "Open all folds" },
          { command: "zM", description: "Close all folds" },
          { command: "zd", description: "Delete fold" },
          { command: "zj / zk", description: "Next / previous fold" },
        ],
      },
    ],
  },
  {
    id: "power-tips",
    sectionTitle: "Power Tips",
    sectionDescription:
      "A handful of small commands that punch well above their weight.",
    iconKey: "rocket",
    cards: [
      {
        title: "Productivity boosters",
        description: "Memorize these and never look back.",
        entries: [
          { command: ".", description: "Repeat the last change" },
          { command: ";", description: "Repeat last f/F/t/T motion" },
          { command: ",", description: "Reverse last f/F/t/T motion" },
          { command: "<C-A>", description: "Increment number under cursor" },
          { command: "<C-X>", description: "Decrement number under cursor" },
          { command: "J", description: "Join line below into current line" },
          { command: "gJ", description: "Join without inserting a space" },
          { command: "~", description: "Toggle case of character" },
          { command: "gq{motion}", description: "Reformat text" },
          { command: "<C-G>", description: "Show file info" },
        ],
      },
      {
        title: "Command line",
        description: "Ex commands that pay rent.",
        entries: [
          { command: ":help {topic}", description: "Open help for topic" },
          { command: ":e .", description: "Open file explorer (netrw)" },
          { command: ":!{cmd}", description: "Run shell command" },
          { command: ":r {file}", description: "Insert contents of file" },
          {
            command: ":r !{cmd}",
            description: "Insert output of shell command",
          },
          { command: ":set nu", description: "Show line numbers" },
          { command: ":set rnu", description: "Show relative line numbers" },
          { command: ":sort", description: "Sort lines" },
          {
            command: ":earlier 5m",
            description: "Time-travel undo by 5 minutes",
          },
        ],
      },
    ],
  },
];
