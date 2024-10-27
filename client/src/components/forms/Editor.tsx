import React from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false })

type EditorProps = {
    value: string;
    onChange: (newValue: string) => void;
}

function Editor({ value, onChange }: EditorProps) {
    const quillModules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            [{ align: [] }],
            [{ color: [] }],
            ['code-block'],
            ['clean'],
        ],
    }
    
    const quillFormats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'align',
    'color',
    'code-block',
    ]

  return (
    <div>
        <QuillEditor modules={quillModules} formats={quillFormats} value={value} onChange={onChange} className='bg-white max-h-[300px] overflow-auto' />
    </div>
  )
}

export default Editor