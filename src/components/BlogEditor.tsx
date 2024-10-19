import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const BlogEditor = ({ content, setContent }: { content: string; setContent: (content: string) => void }) => {
  return (
    <ReactQuill 
      theme="snow" 
      value={content} 
      onChange={setContent}
      modules={{
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      }}
    />
  );
};

export default BlogEditor;

