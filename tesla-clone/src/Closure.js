function x() {
  myname = "sarfaraaz khan";
  function y() {
    console.log(myname);
  }
  return y;
}
const z = x();

console.log(z);
x();
