import NewsItem from "../../../components/NewsItem";
import { DUMMY_NEWS } from "../../../dummy-news";

export default function NewsPage() {
    return (
        <>
            <h1> Welcome To The News Page</h1>
            <NewsItem news={DUMMY_NEWS} />
        </>
    );
}