const monthList = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
];

const dayList = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
];

const displayDate = new Date();

// 1
const printDay =
    dayList[displayDate.getDay()].charAt(0).toUpperCase() +
    dayList[displayDate.getDay()].substr(1);
console.log(printDay);

// 2
const printMonth =
    monthList[displayDate.getMonth()].charAt(0).toUpperCase() +
    monthList[displayDate.getMonth()].substr(1);
console.log(printMonth);

// 3
const createDate = displayDate.getDate();
console.log(createDate);

// 4
const printYear = displayDate.getFullYear();
console.log(printYear);

const printDate = `${printDay},${printMonth} ${createDate},${printYear}`;
console.log(printDate);

// When user clicks the button it works
// Event Listener
function pressHere(e) {
    alert(printDate);
    // console.log(printDate);
}