// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.


const calculator = {
  read: function () {
    this.A = prompt("Please number A?", 1);
    this.B = prompt("Please number B?", 2);
  },
  sum: function () {
    return +this.A + +this.B;
  },
  mul: function () {
    return this.A * this.B;
  },
};
