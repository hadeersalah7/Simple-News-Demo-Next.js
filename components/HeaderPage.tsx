import Link from 'next/link'
import React from 'react'
import ActiveLink from './ActiveLink';

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
                        <ActiveLink href="/news" title="News" />
                    </li>
                    <li>
                        <ActiveLink href="/archive" title="Archive" />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderPage