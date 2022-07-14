import React from 'react'

const Mainview = (props) => {
    document.title = "Food Delivery -" + props.title;
  return <div className="main__container">{props.children}</div>
}

export default Mainview