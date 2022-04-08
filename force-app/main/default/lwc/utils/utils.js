const displayDate = (dateString) => {
    if (dateString === '' || dateString === undefined || dateString === null) return '';
    let monthList = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    let [year, month, date] = dateString.split('-'); // year, month, date

    return `${monthList[Number(month) - 1]} ${date}, ${year}`;
};

export default { displayDate };