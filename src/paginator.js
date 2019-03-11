/**
 * Calculate pagination
 * @param {number} current_page the current page number
 * @param {number} total_pages total amount of pages
 * @param {number} boundaries number of pages linked in begin and in end
 * @param {number} around - number of pages linked before and after current page
 */
function CalcPagination(current_page = 1, total_pages = 0, boundaries = 0, around = 0) {
    let result;
    result = [];

    if (isNaN(current_page) || isNaN(total_pages) || isNaN(boundaries) || isNaN(around)) {
        return [];
    }

    for (let i = 1; i <= total_pages; i++) {
        if (i <= boundaries || i > total_pages - boundaries) {
            result.push(i);
        } else if (i >= current_page - around && i <= current_page + around) {
            result.push(i);
        } else if (i === current_page) {
            result.push(i);
        } else {
            if (!(isNaN(result[result.length - 1])) || !result.length) {
                result.push('...');
            }
        }
    }
    return result;
}
/**
 * return a string with the navigation pagination
 * @param {number} current_page the current page number
 * @param {number} total_pages total amount of pages
 * @param {number} boundaries number of pages linked in begin and in end
 * @param {number} around - number of pages linked before and after current page
 */
function PrintStringPagination(current_page, total_pages, boundaries, around) {
    return CalcPagination(current_page, total_pages, boundaries, around).join(' ');
}
/**
 * Prints on the console the navigation pagination
 * @param {number} current_page the current page number
 * @param {number} total_pages total amount of pages
 * @param {number} boundaries number of pages linked in begin and in end
 * @param {number} around - number of pages linked before and after current page
 */
function PrintConsolePagination(current_page, total_pages, boundaries, around) {
    console.log(
        CalcPagination(current_page, total_pages, boundaries, around).join(' ')
    );
}

exports.PrintStringPagination = PrintStringPagination;
exports.PrintConsolePagination = PrintConsolePagination;  