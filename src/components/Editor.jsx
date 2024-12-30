import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Highlight } from '../extensions/HighlightExtension'; // Import custom highlight extension
import Toolbar from './Toolbar'; // Import toolbar with the highlight button

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Highlight], // Initialize editor with StarterKit and Highlight extension
    content: '<p>Hello <mark>world</mark>!</p>', // Sample content with initial highlight
  });

  if (!editor) {
    return <div>Loading editor...</div>;
  }

  return (
    <div className="editor-content">
      <Toolbar editor={editor} /> {/* Pass editor instance to Toolbar */}
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
