import { notFound } from "next/navigation";
import { getNewsItem } from "../../../../../lib/news";

export default async function MainPageImage({ params }: { params: { newsMainPage: string } }) {
    const newsItemImage = params.newsMainPage;
    const newsItem = await getNewsItem(newsItemImage)
    if (!newsItem) {
        notFound()
    }
    return (
        <div>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
    )
}