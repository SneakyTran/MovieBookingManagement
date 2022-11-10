const TOTAL_DATE_CALENDER = 8;
const MIN_PER_HOUR = 60;
const DURATION_MIN = 30;
const CURRENT_DATE = "Jan 1, 2019 00:00:00";

export const calender = () => {
    let calenderList = [];
    let currentDate = new Date(CURRENT_DATE);
    for (let i = 0; i < TOTAL_DATE_CALENDER - 1; i++) {
        calenderList.push({
            fullDate: formatDate(currentDate),
            date: currentDate.getDate(),
            day: getDay(currentDate.getDay()),
        });
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return calenderList;
};

const getDay = (day) => {
    switch (day) {
        case 0:
            return "Sunday";

        case 1:
            return "Monday";

        case 2:
            return "Tuesday";

        case 3:
            return "Wednesday";

        case 4:
            return "Thursday";

        case 5:
            return "Friday";

        case 6:
            return "Saturday";

        default:
            break;
    }
};

/**
 * Format-date: yyyy-mm-dd
 * @param {date} date
 */
const formatDate = (date) => {
    let d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
};

/**
 * get Time from ISODateTIme
 */
export const getTimeISO = (strDate) => {
    const indexStartTime = strDate.indexOf("T");
    return strDate.substring(indexStartTime + 1, indexStartTime + 6);
};

export const getTimeDuration = (strDate) => {
    let indexDot = strDate.indexOf(":");
    let hour = Number(strDate.substring(0, indexDot));
    let min = Number(strDate.substring(indexDot + 1, strDate.length));
    min += DURATION_MIN;
    if (min > MIN_PER_HOUR) {
        min -= MIN_PER_HOUR;
        hour += 2;
    } else {
        hour += 1;
    }
    return hour + ":" + min;
};
