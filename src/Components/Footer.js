import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'

export default function Footer() {
    const location = useLocation()
    const [text, setText] = useState("Bram Prins")

    useEffect(() => {
        if (location.pathname.includes("beats") || location.pathname.includes("fills"))
            setText("© Bram Prins")
        else
            setText("Bram Prins")
    }, [location])

    return <footer>{text}</footer>
}