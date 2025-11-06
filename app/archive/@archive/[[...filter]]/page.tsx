import Link from "next/link";
import NewsItem from "../../../../components/NewsItem";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "../../../../lib/news";
import { DummyNewsItem } from "../../../../dummy-news";
import { notFound } from "next/navigation";

export default function ArchiveFilterYear({ params }: { params: { filter: string } }) {
    const filter = params.filter;
    const selectedYear = filter?.[0]
    const selectedMonth = filter?.[1]
    let news: DummyNewsItem[]
    let links = getAvailableNewsYears();
    let newsContent = <p>No News Found For The Selected Period</p>

    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear)
        links = getAvailableNewsMonths(selectedYear);
    }

    if (selectedYear && selectedMonth) {
        news = getNewsForYearAndMonth(selectedYear, selectedMonth);
        links = [];
    }
    if (news && news.length > 0) {
        newsContent = <NewsItem news={news} />
    }

    // if ((selectedYear && !getAvailableNewsYears().includes(+selectedYear)) || (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))) { 
    //     throw new Error("Un valid filter")
    // }
    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {links.map((link) => {
                            const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;
                            return (
                                <li key={link}>
                                    <Link href={href}>{link}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </header>
            {newsContent}
        </>

    );
}