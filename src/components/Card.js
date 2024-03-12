import React from "react"
import HeaderComponent from "./HeaderComponent"
import SocialButtons from "./SocialButtons"


export default function Card() {
    const buttonTags = ['GitHub','Frontend Mentor', 'LinkedIn','Twitter','Instagram']
    return (
        <main>
            <HeaderComponent />
            <SocialButtons buttonTags = {buttonTags}/>
        </main>
    )
}