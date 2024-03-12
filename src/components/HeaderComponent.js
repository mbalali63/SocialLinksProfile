import React from "react"
import avatarImage from './../assets/images/avatar-jessica.jpeg'

export default function HeaderComponent() {
    return (
        <section id="header-section">
            <div id="avatar-container">
                <img src={avatarImage} alt="Jessica Randall"/>
            </div>
            <h1>Jessica Randall</h1>
            <h2>London, United Kingdom</h2>
            <p>"Front-end developer and avid reader."</p>
        </section>
    )
}