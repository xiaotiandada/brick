/**
 * utils
 */

 /* *
 *
 * @param data
 */
export const isNull = (data: any) => data === '' || data === null || data === undefined || JSON.stringify(data) === '{}' || JSON.stringify(data) === '[]';

/**
 *
 * @param fn
 */
export const componse = (...fn) => {
    if (fn.length === 0) {
        return arg => arg
    }

    if (fn.length === 1) {
        return fn[0]
    }

    return fn.reduce((a, b) => (...args) => a(b(...args)))
}
