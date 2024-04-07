import React from 'react'

const Tagslist = ({ tag }) => {
  return (
    <div className='tag'>
      <h5>{tag.tagName}</h5>
      <p>{tag.tagDesc}</p>
    </div>
  )
}

export default Tagslist