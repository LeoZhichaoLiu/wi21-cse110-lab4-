## Variables && Scoping

1. In line 11, the function will print out the length of prices array. The reason is that var ignores the block scope, and console.log (i) will print the value of i after the for loop finishes. When for loop finishes, i will increase to prices.length, so the function will print that value.

2. In line 12, the function will print out the discounted price for the last element in array prices (by multiply that price with discount). The reason is that var ignores the block scope, which means console.log(discountedPrice) will directly capture the value in for loop. And when for loop is finishing, discountedPrice will just be the discounted price of last price in input array.

3. In line 13, the function will print out the final adjusted price for the last element in array prices. Since "var finalPrice" is defined under the same scope with console.log(finalPrice), it will directly just print that value when the for loop is finishing.

4. The result should be [50, 100, 150]. The discount 0.5 will apply to each element in input array prices. And then finalPrice will be the rounded value for each discounted price, which actually doesn't change the result. So, we just multiply 0.5 to each element of input array and get the above answer.

5. In line 11, the function will cause "no defined error". Since we define "let i" in for loop scope, console.log (i) cannot capture value i and thus results in the defined error. Noticed that "let" matters the block scope, which is different with "var".

6. In line 12, the function will cause "no defined error". Since we define "let discountedPrice" under for loop scope, console.log (discountedPrice) cannot capture value i and thus results in the defined error. Noticed that "let" matters the block scope, which is different with "var".

7. In line 13, the function will print out the final adjusted price for the last element in array prices. The reason is that "let finalPrice" is defined under the same scope with onsole.log(finalPrice), it will directly just print that value when the for loop is finishing. 

8. The result should be [50, 100, 150]. The discount 0.5 will apply to each element in input array prices. And then finalPrice will be the rounded value for each discounted price, which actually doesn't change the result. So, we just multiply 0.5 to each element of input array and get the above answer.


9. In line 11, the function will cause "no defined error". Since we define "let i" in for loop scope, console.log (i) cannot capture value i and thus results in the defined error. 

10. In line 12, the function will "no defined error". Since we define "const discountedPrice" under for loop scope, console.log (discountedPrice) cannot capture value i and thus results in the defined error. 

11. The function actually will result in error since we cannot adjust the constant value finalPrice in line "finalPrice = Math.rount()...". If we assume ignoring that "assignment to constant value" error, the "console.log (finalPrice)" will print 0. Since we cannot change the value of finalPrice which is constant, it will directly print 0 to output.

12. The function actually will result in error since we cannot adjust the constant value finalPrice line "finalPrice = Math.rount()...". If we assume ignoring that "assignment to constant value" error, the discounted array will just push finalPrice = 0 in each loop, and result in array [0, 0, 0] ignoring the input array and discount. (But this function will in fact produce error, due to assignment on constant value finalPrice).

## Data Type

13. A: Student.name  or   Student['name']

    B: Student['Grad Year']
    
    C: Student.greeting.call();
    
    D: Student['Favoriate Teacher'].name
    
    E: Student.courseLoad[0]

## Basic Operators & Type Conversion 

14. A: '32'

       Reason: 2 is converted to '2', and '3' + '2' = '32'
    
    B:  1
    
       Reason: Since there is no substraction between string, '3' is converted to 3, and 3 - 2 = 1.
    
    C:  3
    
       Reason: null is converted to 0, and 3 + 0 = 3.
    
    D:  '3null'
    
       Reason: null is converted to 'null', and '3' + 'null' = '3null'.
    
    E:  4
    
       Reason: true is converted to 1, and 1 + 3 = 4. 
    
    F:  0
       
       Reason: null is converted to 0, and false is converted to 0, and 0 + 0 = 0.
    
    G:  '3undefined'
    
       Reason: undefined is converted to 'undefined', and "3" + 'undefined' = '3undefined'.
    
    H: NaN
    
       Reason: there is no substraction between either string or undefined, so NaN (undefiend) is printed. 

15. A: true

       Reason: For comparsion between different types, JS will convert '2' to number 2, and return true since 2 > 1.

    B: false
    
       Reason: For comparsion between string, JS will compare each char one by one. Since '2' is larger than '1', which is the first char of '12', it will return false. 
    
    C: true   
       
       Reason: == will only compare equality of values regardless of types. 2 and '2' have same value 2.
    
    D: false  
    
       Reason: === will check both value and type. Since 2 and '2' have different type, it will return false. 
    
    E: false
       
       Reason: true will be converted to 1. And 1 is not equal to 2 in integer. 
    
    F: true
    
       Reason: Boolean (2) will return true, since 2 is not 0. Since true and true are same type with same value, it will return true. 

16. For ==, it will only compare variables by their values, ignoring the types. For example, if we compare int 2 and string '2', using == will return true. However, for ===, it will also check the equality of types. In the above exmple, it will return false using === for 2 and '2', since their types are different. 

## Conditionals

17. 'How are you?' is printed. The reason is that true will converted to 1 for comparsion, and 2 != 1 return false. For the next condition, 2 is not 0, so the condition is true, and the system will print the words "How are you?". 

## Loops

18. See File question18.js

## Functions

19. It will return [6, 8, 10]. When calling modifyArray function, it will iterate each element of input array [1, 2, 3], and modify each element, which is then pushed into newArray to return. For each element, it will call function doSomething (element, function(x)), in which function(x) is defined by returning x * 2. In doSomething function, it return function (element + 2), which will finally be (element + 2) * 2. Thus, for each element of input array, the doSomething will change it to (1+2) * 2, (2+2) * 2, and (3+2) * 2 and push into new Array. So, the final return array should be [6, 8, 10].

20. 

21.


