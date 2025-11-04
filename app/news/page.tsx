import Link from "next/link";
import NewsSinglePage from "./[newsMainPage]/page";

export default function NewsPage() {
    return (
        <>
        <h1> Welcome To The News Page</h1>
        
            <ul>
                <li><Link href={`/news/${"tech"}`}><NewsSinglePage params={{newsMainPage: "tech"}}/></Link></li>
            </ul>
        </>
    );
}