// src/components/Editor.jsx
import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Highlight } from '../extensions/HighlightExtension'; // Import the custom Highlight extension
import Toolbar from './Toolbar'; // Import the Toolbar component

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Highlight], // Include the custom Highlight extension
    content: '<p>Hello <mark>world</mark>!</p>', // Sample content with some highlighted text
  });

  if (!editor) {
    return <div>Loading editor...</div>;
  }

  return (
    <div className="editor-container">
      <Toolbar editor={editor} /> {/* Pass editor instance to Toolbar */}
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
