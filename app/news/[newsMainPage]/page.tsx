import Link from "next/link";


export default function NewsSinglePage(props: { params: { newsMainPage: string } }) {
    return (
        <>
            <h1>News Detail Page</h1>
            <h6>News Id: {props.params.newsMainPage}</h6>
        </>
    );
}