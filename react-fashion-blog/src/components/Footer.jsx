import React from 'react'

const Footer = (props) => {
  return (
    <div className="footer">
      {props.footer}
      {props.copyright}
    </div>
  )
}

export default Footer