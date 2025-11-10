import { JSX, Suspense } from "react";
import Link from "next/link";
import NewsItem from "../../../../../components/NewsItem";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "../../../../../lib/news";
import { DummyNewsItem } from "../../../../../dummy-news";

const FilterNews = async ({ year, month }: { year: string, month: string }): Promise<JSX.Element> => {
    let news: DummyNewsItem[]
    if (year && !month) {
        news = await getNewsForYear(year)
    } else if (year && month) {
        news = await getNewsForYearAndMonth(year, month);
    }
    let newsContent = <p>No News Found For The Selected Period</p>
    if (news && news.length > 0) {
        newsContent = <NewsItem news={news} />
    }
    return newsContent;
}


const FilterLinks = async ({ year, month }: { year: string, month: string }): Promise<JSX.Element> => {
    const availableYears = await getAvailableNewsYears()
    let links = availableYears;


    if (year && !month) {
        links = getAvailableNewsMonths(year);
    }

    if (year && month) {
        links = [];
    }

    if ((year && !availableYears.includes(year)) || (month && !getAvailableNewsMonths(year).includes(month))) {
        throw new Error("invalid filter")
    }

    return (
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map((link) => {
                        const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;
                        return (
                            <li key={link}>
                                <Link href={href}>{link}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default async function ArchiveFilterYear({ params }: { params: { filter: string } }) {
    const filter = params.filter;
    const selectedYear = filter?.[0]
    const selectedMonth = filter?.[1]


    return (
        <>

            <Suspense fallback={<h4>Loading Filter... Please Wait!</h4>}>
                <FilterLinks year={selectedYear} month={selectedMonth}/>
                <FilterNews year={selectedYear} month={selectedMonth} />
            </Suspense>
        </>

    );
}