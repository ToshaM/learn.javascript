/////////////////
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.
// Временная зона – местная.

console.log(new Date(2012, 1, 20, 3, 12));

/////////////////
// Напишите функцию getWeekDay(date), показывающую день недели
//  в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// Например:

// let date = new Date(2012, 0, 3); // 3 января 2012 года
// alert( getWeekDay(date) );        // нужно вывести "ВТ"

const getWeekDay = (date) => {
  switch (date.getDay()) {
    case 0:
      return "ВС";
    case 1:
      return "ПН";
    case 2:
      return "ВТ";
    case 3:
      return "СР";
    case 4:
      return "ЧТ";
    case 5:
      return "ПТ";
    case 6:
      return "СБ";
  }
};
console.log(getWeekDay(date)); // "ВТ"

/////////////////
// В Европейских странах неделя начинается с понедельника (день номер 1),
//  затем идёт вторник (номер 2) и так до воскресенья (номер 7).
//  Напишите функцию getLocalDay(date), которая возвращает «европейский»
//  день недели для даты date.

let date = new Date(2012, 0, 3); // 3 января 2012 года
// alert( getLocalDay(date) );       // вторник, нужно показать 2

const getLocalDay = (date) => {
  if (date.getDay() === 0) {
    return 7;
  }

  return date.getDay();
};

console.log(getLocalDay(date));

/////////////////
// Создайте функцию getDateAgo(date, days), возвращающую число,
// которое было days дней назад от даты date.

// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1)
//  вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

// Функция должна надёжно работать при значении days=365 и больших значениях:

let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

const getDateAgo = (date, days) => {
  let oldDate = new Date(date);

  oldDate.setDate(date.getDate() - days);

  return oldDate.getDate();
};

/////////////////
// Напишите функцию getLastDayOfMonth(year, month),
// возвращающую последнее число месяца.
// Иногда это 30, 31 или даже февральские 28/29.

// Параметры:

// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

const getLastDayOfMonth = (year, mounth) => {
  let date = new Date(year, mounth + 1);
  date.setDate(date.getDate() - 1);
  return date.getDate();
};

console.log(getLastDayOfMonth(2012, 1)); // 29

/////////////////
// Напишите функцию getSecondsToday(), возвращающую
// количество секунд с начала сегодняшнего дня.

// Например, если сейчас 10:00, и не было перехода
// на зимнее/летнее время, то:

// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не
// должно быть конкретного значения сегодняшней даты.

const getSecondsToday = () => {
  let date = new Date();
  return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
};

console.log(getSecondsToday());

/////////////////
// Создайте функцию getSecondsToTomorrow(), возвращающую
// количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:

// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в
// ней не должно быть конкретного значения сегодняшней даты.

const getSecondsToTomorrow = () => {
  let date = new Date();
  let nextDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + 1
  );
  return Math.round((nextDay - date) / 1000);
};
console.log(getSecondsToTomorrow());

/////////////////
// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm".
// А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
// Например:

// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// // вчерашняя дата вроде 31.12.2016, 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );

const formatDate = (date) => {
  let nowDate = new Date();
  let difSec = nowDate - date;
  if (difSec < 1000) {
    return "прямо сейчас";
  } else if (difSec < 60000) {
    return `${difSec / 1000} сек. назад`;
  } else if (difSec < 3600000) {
    return `${difSec / 60000} мин. назад`;
  } else {
    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  }
};

console.log(formatDate(new Date(new Date() - 1)));
console.log(formatDate(new Date(new Date() - 30 * 1000)));
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 86400 * 1000)));

/////////////////