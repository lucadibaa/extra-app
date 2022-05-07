const truncate = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + '...' : string
}

const capitalize = string => {
    return string?.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

export const truncateAndCapitalize = (string, n) => {
    return capitalize(truncate(string, n))
}

export const formatAmericanDate = (date) => {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

export const toEuropean = date => {
    return date.replace(/-/g, ' / ').split(' ').reverse().join('')
}

export const toAmerican = date => {
    return date.replace(/\//g, ' - ').split(' ').reverse().join('')
}

const padTo2Digits = num => {
    return num.toString().padStart(2, '0')
}

export const formatEuropeanDate = date => {
    return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
    ].join('/')
}

export const getDigits = string => {
    const regex = /\d+/g
    return string.match(regex)
}

export { truncate, capitalize }
