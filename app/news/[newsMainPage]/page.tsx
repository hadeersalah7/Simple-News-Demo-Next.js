import Link from "next/link";
import { DUMMY_NEWS } from "../../../dummy-news";


export default function NewsSinglePage(props: { params: { newsMainPage: string } }) {
    const newsSlug = props.params.newsMainPage;
    const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);

    if (!newsItem) {
        return <h1 style={{ color: "red" }}>News Item Not Found!</h1>;
    }
    return (
        <article className="news-article">
            <header>
                <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                <h1>{newsItem.title}</h1>
                <time dateTime={newsItem.date}>{newsItem.date}</time>
            </header>
            <p>{newsItem.content}</p>
        </article>
    );
}