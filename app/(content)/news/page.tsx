import { useQuery } from "@tanstack/react-query";
import NewsItem from "../../../components/NewsItem";
import { getAllNews } from "../../../lib/news";
;

export default async function NewsPage() {
    const news = getAllNews()
    // const { data } = useQuery({
    //     queryKey: ["news"],
    //     queryFn: getAllNews
    // })
    return (
        <>
            <h1> Welcome To The News Page</h1>
            <NewsItem news={news} />
        </>
    );
}