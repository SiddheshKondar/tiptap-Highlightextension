// src/extensions/HighlightExtension.js
import { Mark, mergeAttributes } from '@tiptap/core';

// Create the Highlight extension
export const Highlight = Mark.create({
  name: 'highlight',

  // Define the markup and its style
  addAttributes() {
    return {
      class: {
        default: null,
      },
    };
  },

  // Add the command to toggle highlight
  addCommands() {
    return {
      toggleHighlight:
        () =>
        ({ commands }) => {
          return commands.toggleMark('highlight');
        },
    };
  },

  // Add keyboard shortcuts (e.g., ctrl+h or cmd+h)
  addKeyboardShortcuts() {
    return {
      'Mod-h': () => this.editor.commands.toggleHighlight(),
    };
  },

  // Define the HTML element to wrap selected text
  parseHTML() {
    return [
      {
        tag: 'mark',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['mark', mergeAttributes(HTMLAttributes)];
  },
});
