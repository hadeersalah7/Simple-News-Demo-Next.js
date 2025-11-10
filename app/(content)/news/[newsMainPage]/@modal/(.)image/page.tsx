import { notFound } from "next/navigation"; 
import ModalBackdrop from "../../../../../../components/ModalBackdrop";
import { getNewsItem } from "../../../../../../lib/news";

export default async function InterceptedImage({
    params,
}: {
    params: { newsMainPage: string };
}) {
    const newsItemImage = params.newsMainPage;
    const newsItem = await getNewsItem(newsItemImage);
    if (!newsItem) {
        notFound();
    }
    return (
        <>
            <ModalBackdrop />
            <dialog className="modal" open>
                <div>
                    <img
                        src={`/images/news/${newsItem.image}`}
                        alt={newsItem.title}
                        style={{ width: "100%" }}
                    />
                </div>
            </dialog>
        </>
    );
}
