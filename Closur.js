// A function is declared and assign any variable with some value and create a nested function
// try to access above variable in nested function and we invoke function before its 
// initialization it is called closurs 




function x () {
    var a = 7;

    function y (){
        console.log(a)    //closur function with reference x 
    }
    y()
}
x();

// a closure is the combination of a function bundled together with its lexical environment 