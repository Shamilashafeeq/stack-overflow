import React, { Children } from 'react'

 const Avatar = ({ children ,backgroundColor,px,py,color,fontSize,borderRadius,cursor}) => {
    const style ={
        backgroundColor,
        padding:`${py} ${px}`,
        color: color || 'black',
        borderRadius,
        fontSize,
        textAlign:"center",
        cursor :cursor || null,
        textDecoration:"none"

    }
  return (
    <div style={style}>
        { children }

    </div>
  )
}
export default Avatar;