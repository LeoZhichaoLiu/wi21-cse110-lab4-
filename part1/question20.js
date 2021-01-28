function display () {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
  setTimeout (display, 1000);
}

display();
