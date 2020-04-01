/**
 * utils
 */

 /* *
 *
 * @param data
 */
export const isNull = (data: any) => data === '' || data === null || data === undefined || JSON.stringify(data) === '{}' || JSON.stringify(data) === '[]';
