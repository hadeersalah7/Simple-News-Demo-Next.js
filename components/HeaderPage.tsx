import Link from 'next/link'
import React from 'react'

interface HeaderPageProps {
    newsMainPage: string;
}

const HeaderPage = () => {
    return (
        <header id="main-header">
            <div id="logo">
                <Link href="/">NextNews</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href="/news">News</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderPage