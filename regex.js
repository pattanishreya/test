
var a=["(999)-999-9999","9999999999","999-999-9999","(999-999-9999"];
var re=/^\d{10}$|^\(\d{3}\)-\d{3}-\d{4}$|^\d{3}-\d{3}-\d{4}$/;
a.map(x=>console.log(x+" => "+re.test(x)));


let str = "shreyaa6aA,";
let regex =/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{4,16}/g;

console.log (regex.test(str));
