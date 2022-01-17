import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
function Navbar() {
    return (
        // Navbar
        <nav>
            {/* Logo */}
            <div className='logo'>
                <Image src="/logo.png" width={120} height={77} alt=''/>
                <h1>Ninja List</h1>
            </div>

            {/* Links */}
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/ninjas">Ninja Listing</Link>

        </nav>
    )
}

export default Navbar
