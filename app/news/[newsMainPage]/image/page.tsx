import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "../../../../dummy-news";

export default function MainPageImage({ params }: { params: { newsMainPage: string } }) {
    const newsItemImage = params.newsMainPage;
    const newsItem = DUMMY_NEWS.find((news) => news.slug === newsItemImage);
    if (!newsItem) {
        notFound()
    }
    return (
        <div>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
        </div>
    )
}