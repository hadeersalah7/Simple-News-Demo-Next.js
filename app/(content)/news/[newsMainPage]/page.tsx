import Link from "next/link";
import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "../../../../dummy-news";


export default function NewsSinglePage({ params }: { params: { newsMainPage: string } }) {
    const newsSlug = params.newsMainPage;
    const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);
    console.log("newsItem", newsItem)
    if (!newsItem) {
        notFound()
    }
    return (
        <article className="news-article">
            <header>
                <Link href={`/news/${newsItem.slug}/image`}><img src={`/images/news/${newsItem.image}`} alt={newsItem.title} /></Link>
                <h1>{newsItem.title}</h1>
                <time dateTime={newsItem.date}>{newsItem.date}</time>
            </header>
            <p>{newsItem.content}</p>
        </article>
    );
}