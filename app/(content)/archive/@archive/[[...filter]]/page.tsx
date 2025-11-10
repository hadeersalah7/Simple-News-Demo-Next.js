import Link from "next/link";
import NewsItem from "../../../../../components/NewsItem";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "../../../../../lib/news";
import { DummyNewsItem } from "../../../../../dummy-news";

export default async function ArchiveFilterYear({ params }: { params: { filter: string } }) {
    const filter = params.filter;
    const selectedYear = filter?.[0]
    const selectedMonth = filter?.[1]
    let news: DummyNewsItem[]
    let links = await getAvailableNewsYears();
    let newsContent = <p>No News Found For The Selected Period</p>

    if (selectedYear && !selectedMonth) {
        news = await getNewsForYear(selectedYear)
        links = getAvailableNewsMonths(selectedYear);
    }

    if (selectedYear && selectedMonth) {
        news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
        links = [];
    }
    if (news && news.length > 0) {
        newsContent = <NewsItem news={news} />
    }

    const availableYears = await getAvailableNewsYears()
    if ((selectedYear && !availableYears.includes(selectedYear)) || (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(selectedMonth))) { 
        throw new Error("invalid filter")
    }
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