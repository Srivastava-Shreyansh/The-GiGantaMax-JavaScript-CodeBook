//Q11
// == vs ===
/*
    This is type-coercion.
    '=='(Loose Equality) first do typeConversion, and then Comparison.
    5 == "5" --> 5 == 5 --> true
    whereas
    '==='(Strict Equality) directly do comparison.
    '===' compares both value and data type.
    5 === "5" --> false
 */

//Q12
// null vs undefined
/*
    null --> intentionally doesn't assign a value to the variable. 
    or in future we'll be adding something.
    null → developer ne intentionally empty set kiya.

    undefined --> variable is declared but no value is assigned to it,
    it's some kind of default value every variable gets.
    undefined → JS ne default diya.
 */

// Q13
// let vs var
/*
    let ---> block level scope variable, can't be redeclared,
    but can be reinitialized, modern js esp 6 variable, Not hoisted and gives reference error.

    var ---> function level scope variable, can be redeclared,
    can be reinitialized, old esp 5 js variable, Hoisted and initialized with undefined.
 */

//Q14
//Can we modify a const array? Explain.
/*
    We can modify a const array's elements but can't reassign a complete array.
    additionally, if we want to prevent this elements modification, 
    we can use object.freeze() method, also same goes for const objects.
 */

//Q15
//console.log() vs return
/*
    console.log --> simply display the value on the screen.
    return --> passes value out of the function block.
*/

//Q16
//What happens if we don't write return inside a function?
/*
    the function will internally assume that you've entered undefined. and will return undefined.
*/

//Q17
//for vs while vs do-while
/*
    for ---> we know the starting, the terminating condition, and how much to increment/decrement.
    for(let v; v < 6; v++)
    while ---> we know the terminating condition, the increment/decrement.
    while ka use tab karte hain jab iterations pata nahi hote.
    do-while ---> it is similiar to while but it iterates atleast once a time.
 */

//Q18
//break vs continue
/*
    break ---> terminates the code once the condition is fulfilled.
    continue ---> skips that iteration at which the condition is true.    
*/

//Q19
//array vs object
/*
    array ---> ordered collection, storage of elements in [] big brackets
    objects ---> storage of elements in {} curly braces with key:value pairs.
*/

//Q20
//How do you access
// array element
// object property
/*
    console.log(array_name[index])

    console.log(object_name[property]) or console.log(object_name.property)
*/