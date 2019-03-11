
/**
 * return a string with the navigation pagination
 * @param {number} current_page the current page number
 * @param {number} total_pages total amount of pages
 * @param {number} boundaries number of pages linked in begin and in end
 * @param {number} around - number of pages linked before and after current page
 */
function PrintStringPagination(current_page, total_pages, boundaries, around) {
    return 0;
}
/**
 * Prints on the console the navigation pagination
 * @param {number} current_page the current page number
 * @param {number} total_pages total amount of pages
 * @param {number} boundaries number of pages linked in begin and in end
 * @param {number} around - number of pages linked before and after current page
 */
function PrintConsolePagination(current_page, total_pages, boundaries, around) {
    console.log();
}

exports.PrintStringPagination = PrintStringPagination;
exports.PrintConsolePagination = PrintConsolePagination;  