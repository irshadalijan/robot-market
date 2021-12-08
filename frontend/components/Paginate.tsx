import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
type pageProps = {
  perPage: number;
  currPage: number;
  totalRows: number;
  changePage: (arg: number) => void;
};
const Paginate = (props: pageProps) => {
  const { perPage, currPage, totalRows, changePage } = props;
  const pageNumbers = [];
  const totalPages = Math.ceil(totalRows / perPage);
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="w-full bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      {totalPages > 0 && (
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div className="mx-3">
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              {currPage > 1 && (
                <a
                  onClick={() => changePage(currPage - 1)}
                  href="javascript:void(0)"
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Previous</span>
                  <FaChevronLeft className="h-5 w-5" />
                </a>
              )}
              {pageNumbers.map((num) => (
                <a
                  key={num}
                  onClick={() => changePage(num)}
                  href="javascript:void(0)"
                  aria-current="page"
                  className={`z-10 hover:bg-blue-100 border-blue-500 text-gray-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                    currPage === num && `bg-blue-100`
                  }`}
                >
                  {num}
                </a>
              ))}
              {currPage < totalPages && (
                <a
                  onClick={() => changePage(currPage + 1)}
                  href="javascript:void(0)"
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  <FaChevronRight className="h-5 w-5" aria-hidden="true" />
                </a>
              )}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Paginate;
