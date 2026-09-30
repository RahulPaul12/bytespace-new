import Link from "next/link"

const PaginationComponent = () => {
    return (
    <nav aria-label="Pagination" className="mt-12 sm:mt-18 flex items-center justify-center gap-3 sm:gap-6">
        <Link href="#" aria-label="Previous page" className="pagination-arrow-btn">
            <i className="icon-chevron-left text-2xl"></i>
        </Link>
        <ul className="flex items-center gap-3 sm:gap-6">
            <li><Link href="#" aria-current="page" className="pagination-btn text-[#CED0D3]">1</Link></li>
            <li><Link href="#" className="pagination-btn">2</Link></li>
            <li><Link href="#" className="pagination-btn">3</Link></li>
            <li><Link href="#" className="pagination-btn">4</Link></li>
            <li><Link href="#" className="pagination-btn">5</Link></li>
        </ul>
        <Link href="#" aria-label="Next page" className="pagination-arrow-btn">
            <i className="icon-chevron-right text-2xl"></i>
        </Link>
    </nav>
    )
}

export default PaginationComponent