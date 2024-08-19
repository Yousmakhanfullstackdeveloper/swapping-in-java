let a = 17;
let b = 7;
document.write("<h1>before swappig the variable a contain "+a+"</h1>")
document.write("<h1>before swappig the variable b contain "+b+"</h1>")
a=a+b;
b=a-b;
a=a-b;
document.write("<h1>after swappig the variable a contain "+a+"</h1>")
document.write("<h1>after swappig the variable b contain "+b+"</h1>")