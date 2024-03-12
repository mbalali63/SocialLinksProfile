import React from "react"



export default function SocialButtons({buttonTags}) {
    const buttonsList = buttonTags.map((tagName) => {
        return (
            <li><button className="social-button">{tagName}</button></li>            
        )
    })

    return (
        <ul id="social-button-set">
            {buttonsList}
        </ul>
    )
}


