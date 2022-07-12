export const formatDateCell = (date) => {
    let dateObj = date;
    if (typeof date !== 'object') {
    dateObj = new Date(date);
    }
    if (date == null) {
    return
    }
    return `${('0' + dateObj.getDate()).slice(-2)}/${('0' + (dateObj.getMonth() + 1)).slice(-2)}/${dateObj.getFullYear()}`;
};
