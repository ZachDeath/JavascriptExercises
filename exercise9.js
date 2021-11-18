function is_weekend(date) {
  let x = new Date(date);
  let y = x.getDay();
  if (y == 0 || y == 6) {
    console.log("Weekend");
  } else {
    console.log("Not the weekend");
  }
}

is_weekend("Nov 22, 2021");
