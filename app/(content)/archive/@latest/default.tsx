import NewsItem from "../../../../components/NewsItem"
import { getLatestNews } from "../../../../lib/news"

export default function DefaultLatestPage() {
    const latestNews = getLatestNews()
    return (
        <NewsItem news={latestNews} />
    )
}