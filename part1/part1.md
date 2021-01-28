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
    
    B:  1
    
    C:  3
    
    D:  '3null'
    
    E:  4
    
    F:  0
    
    G:  '3undefined'
    
    H: NaN

15. A: true

    B: false
    
    C: true   Reason: == will only compare equality of values regardless of types. 2 and '2' have same value 2.
    
    D: false  Reason: === will check both value and type. Since 2 and '2' have different type, it will return false. 
    
    E: false
    
    F: true

16. For ==, it will only compare variables by their values, ignoring the types. For example, if we compare int 2 and string '2', using == will return true. However, for ===, it will also check the equality of types. In the above exmple, it will return false using === for 2 and '2', since their types are different. 

## Conditionals

17.

## Loops

18.

## Functions

19. 

20. 

21.


