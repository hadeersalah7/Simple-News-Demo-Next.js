"use client"
import { notFound, useRouter } from "next/navigation";
import { DUMMY_NEWS } from "../../../../../../dummy-news";
import { useEffect } from "react";

export default function InterceptedImage({ params }: { params: { newsMainPage: string } }) {
    const newsItemImage = params.newsMainPage;
    const router = useRouter()
    const newsItem = DUMMY_NEWS.find((news) => news.slug === newsItemImage);
    if (!newsItem) {
        notFound()
    }

    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = ""
        }

    }, [])
    return (
        <>
            <div className="modal-backdrop" onClick={router.back} />
            <dialog className="modal" open>
                <div>
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} style={{ width: "100%" }} />
                </div>
            </dialog>
        </>

    )
}