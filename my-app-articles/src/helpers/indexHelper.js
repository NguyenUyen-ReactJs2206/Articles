export const formatDate = (date) => {
    if(!date) return ""
    const dt = new Date(date);
    const padL = (nr, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);
    return `${padL(dt.getMonth() + 1)}/${padL(dt.getDate())}/${dt.getFullYear()}`;};

