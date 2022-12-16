import React from 'react'

function IntroComponent(props) {
  return (
    <div className="intro-component-container">
        <div className="intro-component-wrapper">
            <div className="left-container">
                <h1>{props.introComponentTitle}</h1>
                <p>{props.introComponentParagraph}</p>
                <button>Learn More</button>
            </div>
            <div className="right-container">

            </div>
        </div>
    </div>
  )
}

export default IntroComponent