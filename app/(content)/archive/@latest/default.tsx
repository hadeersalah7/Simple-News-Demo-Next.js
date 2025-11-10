import NewsItem from "../../../../components/NewsItem"
import { getLatestNews } from "../../../../lib/news"

export default async function DefaultLatestPage() {
    const latestNews = await getLatestNews()
    return (
        <NewsItem news={latestNews} />
    )
}