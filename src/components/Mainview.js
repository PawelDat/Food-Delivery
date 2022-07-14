import React from 'react'

const Mainview = (props) => {
    document.title = "Food ordering app -" + props.title;
  return <div className="main-container">{props.children}</div>
}

export default Mainview