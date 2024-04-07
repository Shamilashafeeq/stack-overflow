import React from 'react'
import './RightSidebar.css'
import Widgets from './Widgets'
import WidgetTags from './WidgetTags'

const RightSidebar = () => {
  return (
    <aside className='right-sidebar'>
      <Widgets />
      <WidgetTags /> 
    </aside>
  )
}

export default RightSidebar