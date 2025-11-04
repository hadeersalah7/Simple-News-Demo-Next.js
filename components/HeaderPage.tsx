import Link from 'next/link'
import React from 'react'

interface HeaderPageProps {
    newsMainPage: string;
}

const HeaderPage = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={`/news`}>News Page</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderPage