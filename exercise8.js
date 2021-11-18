function month_name(date) {
  let months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let x = new Date(date);
  let y = x.getMonth();
  console.log(months[y]);
}

month_name("1/13/2009");
