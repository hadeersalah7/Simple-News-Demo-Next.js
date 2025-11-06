import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "../../../../../dummy-news";

export default function InterceptedImage({ params }: { params: { newsMainPage: string } }) {
    const newsItemImage = params.newsMainPage;
    const newsItem = DUMMY_NEWS.find((news) => news.slug === newsItemImage);
    if (!newsItem) {
        notFound()
    }
    return (
        <>
            <div className="modal-backdrop" />
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                </div>
            </dialog>
        </>

    )
}