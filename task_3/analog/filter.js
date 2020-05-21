// Реализовать аналог методов filter

/**
 * Аналог метода filter с искользованием reduce
 *
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
function filterByReduce(arr, fn) {
    if (!Array.isArray(arr) || typeof fn !== 'function') {
        return 'error';
    }

    return arr.reduce((acc, curr) => {
        if (fn(curr))
            acc.push(curr);
        return acc;
    }, []);
}