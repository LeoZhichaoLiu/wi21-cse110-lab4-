## Debugging

1. The bug is that the function "calculateSum" take num1 and num2 as string type ('1', '2'). So their sum will become '12' rather than 1+2=3.

2. My solution is that to use parseInt(num1) and parseInt(num2) to convert them from string to int. Then sum will become 1+2=3, which is type integer rather string. And we can simply print that value on screen. 
   
   The screenShots are in the folder part3
