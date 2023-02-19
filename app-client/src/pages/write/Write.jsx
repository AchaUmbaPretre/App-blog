import React, { useState } from 'react'
import './write.css'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const Write = () => {
  const [value, setValue] = useState('')

  return (
    <>
      <div className="write">
        <div className="write-left">
          <input type="text" className="write-input" placeholder='Titre...' />
          <div className="write-input-quill">
            <ReactQuill theme='snow' className='write-quill' value={value} onChange={setValue}/>
          </div>
        </div>

        <div className="write-right">
          <div className="write-item">
            <h1 className="write-h1">Publish</h1>
            <span className="write-item-span"><b>Status :</b> Draft</span>
            <span className="write-item-span"><b>Visibility :</b> Public</span>
            <input type="file" name='' id='file' className="write-item-file" />
            <label htmlFor="file" className="write-label">Upload Image</label>
            <div className="write-button">
              <button className="write-btn">Save as a draft</button>
              <button className="write-btn">Update</button>
            </div>
          </div>
          <div className="write-item">
            <h1 className="write-h1">Category</h1>
            <div className="write-input-row">
              <input type="radio" name='cat' id='art' value='art' />
              <labeL htmlFor='art'>Art</labeL>
            </div>
            <div className="write-input-row">
              <input type="radio" name='cat' id='science' value='science' />
              <labeL htmlFor='science'>Science</labeL>
            </div>
            <div className="write-input-row">
              <input type="radio" name='cat' id='technology' value='technology' />
              <labeL htmlFor='technology'>Technology</labeL>
            </div>
            <div className="write-input-row">
              <input type="radio" name='cat' id='cinema' value='cinema' />
              <labeL htmlFor='cinema'>Cinema</labeL>
            </div>
            <div className="write-input-row">
              <input type="radio" name='cat' id='design' value='design' />
              <labeL htmlFor='design'>Design</labeL>
            </div>
            <div className="write-input-row">
              <input type="radio" name='cat' id='food' value='food' />
              <labeL htmlFor='food'>Food</labeL>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Write