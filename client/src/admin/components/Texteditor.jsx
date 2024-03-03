import React, {useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Texteditor = () => {
  const [value, setValue] = useState('');
  return <ReactQuill value={value} onChange={setValue} />;
}

export default Texteditor