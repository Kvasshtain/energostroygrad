import React from 'react'
import contactsPageContent from '../data/contactsPageContent.json'

const Footer = () => {
    return (
        <footer className = "Footer">
            <p>{contactsPageContent.address}</p>
            <p>{contactsPageContent.emale}</p>
        </footer>
    )
}

export {Footer}