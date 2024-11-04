---
title: C Language
description: C is a general-purpose programming language. It was created in the 1970s by Dennis Ritchie and remains very widely used and influential. By design, C's features cleanly reflect the capabilities of the targeted CPUs
slug: c-programming-tutorial 
date: 31/02/2024
author: Ahmad Ammad
image: "https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
solution: C is renowned for its efficiency and speed. It allows for low-level.manipulation of computer resources, making it ideal for system programming and developing application where performance is critical:Despite being a low level language, C is highly portable.
---

## Introduction 
It is a very popular language, despite being old. The main reason for its popularity is because it is a fundamental language in the field of computer science.
C is strongly associated with UNIX, as it was developed to write the UNIX operating system.
## Why Learn C ?
-  It is one of the most popular programming languages in the world
-  If you know C, you will have no problem learning other popular programming languages such as Java, Python, C++, C#, etc, as the syntax is similar
-  C is very fast, compared to other programming languages, like Java and Python
-  C is very versatile; it can be used in both applications and technologies
## Difference between C and C++ 
- [C++](https://www.w3schools.com/cpp/default.asp)  was developed as an extension of C, and both languages have almost the same syntax
- The main difference between C and C++ is that C++ support classes and objects, while C does not

## Get Started
This tutorial will teach you the basics of C.
When you are finished with this tutorial, you will be able to write C programs and create real-life examples.
It is not necessary to have any prior programming experience. 
To start using C, You need two things:
- A text editor, like Notepad, to write C code.
- A compiler, like GCC, to translate the C code into a language that the computer will understand.


## 1. C Syntax
#include <stdio.h> is a header file library that lets us work with input and output functions, such as printf() (used in line 4). Header files add functionality to C programs.
- **Example Explained**: A blank line. C ignores white space. But we use it to make the code more readable. Another thing that always appear in a C program is main(). This is called a function. Any code inside its curly brackets {} will be executed. printf() is a function used to output/print text to the screen. In our example, it will output "Hello World!".
  ```javascript
  #include <stdio.h>
  int main() {
    printf("Hello Jarvis!");
    return 0;
  }
## 2. Data Types and Variables
In C, data types specify the type of data that a variable can hold.

## Basic Data Types:
- **int** : For integers, e.g., 
  ```javascript
  int age = 25;
- **float** :  For single-precision floating-point numbers, e.g.,
  ```javascript
  float salary = 55000.50;
- **double** :  For double-precision floating-point numbers, e.g.,
  ```javascript
  double pi = 3.14159;
- **char** : For single characters, e.g.,
  ```javascript
  char grade = 'A';
- ## Declaring Variables:
  ```javascript
  int age =25; 
  float salary = 55000.5 ;
  char grade = 'A'; 
 ## 3. Operators:
C includes several operators for performing arithmetic, logical, and relational operations.
## Arithmetic Operators:
- **+** : Addition
- **-** : Subtraction
- *: Multiplication
- **/** : Division
- **%** : Modulus (remainder)
  ```javascript
  #include <stdio.h>

  int main(){
    int a = 10 , b = 3; 
    printf("Addition: %d\n", a + b)
    printf("Subtraction: %d\n", a - b);
    printf("Multiplication: %d\n", a * b);
    printf("Division: %d\n", a / b);
    printf("Modulus: %d\n", a % b);
    return 0;
  }
## Relational Operators:
- **==** : Equal to
- **!=** : Not equal to
- **>**: Greater than
- **<** :  Less than
- **>=** : Greater than or equal to
- **<=** : Less than or equal to
  ```javascript
  #include <stdio.h>

  int main(){
    int a = 10 , b = 3; 
    printf("Equal to: %d\n", a == b);
    printf("Not equal to: %d\n", a != b);
    printf("Greater than: %d\n", a > b);
    printf("Less than: %d\n", a < b);
    printf("Greater or equal to: %d\n", a >= b);
    printf("Less or equal to: %d\n", a <= b);
    return 0;
  }
##  Logical Operators
- **&&** : Logical AND – True if **both** conditions are true
- **||** : Logical OR – True if **at least one** condition is true
- **!**: Logical NOT – Inverts the truth value of a condition (True becomes False, and False becomes True)
  ```javascript
  #include <stdio.h>

  int main(){
    int a = 10 , b = 3; 
    printf("Logical AND: %d\n", (a > b) && (b < 10));
    printf("Logical OR: %d\n", (a < b) || (b > 5));
    printf("Logical NOT: %d\n", ! (a == b));
    return 0;
  }
##  Assignment Operators
Assignment operators assign values to variables.
- **=**  :  Assign	
- **+=** : Add and assign	
- **- =** :  Subtract and assign	
- ***=** :  Multiply and assign	
- **/=** :  Divide and assign	
- **%=** :  Modulus and assign	
  ```javascript
  #include <stdio.h>

  int main(){
    int a = 10 ;
    a += 2;  // a = a + 2
    printf("Add and assign: %d\n", a);
    a -= 3;  // a = a - 3
    printf("Subtract and assign: %d\n", a);
    a *= 2;  // a = a * 2
    printf("Multiply and assign: %d\n", a);
    a /= 4;  // a = a / 4
    printf("Divide and assign: %d\n", a);
    a %= 3;  // a = a % 3
    printf("Modulus and assign: %d\n", a);
    return 0;
  }
##  Increment and Decrement Operators
These operators increase or decrease the value of a variable by 1.
- **++** : Increment
- **--** : Decrement 
  ```javascript
  #include <stdio.h>

  int main(){
    int a = 5 ;
    printf("Initial value: %d\n", a);
    printf("Post-increment: %d\n", a++);
    printf("After post-increment: %d\n", a);
    printf("Pre-increment: %d\n", ++a);
    printf("After pre-increment: %d\n", a);
    return 0;
  }
## 4. Control Flow Statements
Control flow statements allow you to control the sequence in which statements are executed.
- ## if…else Statement:
  ```javascript
  int age = 20 ; 
  if(age >= 18){
    printf("You are an adult.");
  }else {
    printf("You are not an adult")
  }
- ## Switch Statement:
  ```javascript
  int day = 4;
   switch (day) {
    case 1:
        printf("Monday");
        break;
    case 2:
        printf("Tuesday");
        break;
    default:
       printf("Other day");
    }
## 5. Loops
- **for loop:**  Used for looping a fixed number of times.
- **while loop:** Continues looping as long as a specified condition is true.
- **do…while loop:** Executes at least once before checking the condition.
- ## for loop:
  ```javascript
  for (int i = 0; i < 5; i++) {
    printf("%d\n", i);
  }
- ##  while loop: 
  ```javascript
  #include <stdio.h>

  int main() {
    int i = 1;

    // While loop to print numbers from 1 to 5
    while (i <= 5) {
      printf("%d\n", i);
      i++;  // Increment i
    }

    return 0;
  }
- ## do…while loop:
  ```javascript
  #include <stdio.h>

  int main() {
    int i = 1;

    // Do-while loop to print numbers from 1 to 5
    do {
      printf("%d\n", i);
      i++;  // Increment i
    } while (i <= 5);

    return 0;
  }
## 6. Funtions
Functions allow you to break down complex programs into smaller, manageable parts.
- ## Defining and Calling Functions:
  ```javascript
  int add(int a, int b) {
    return a + b;
  }

  int main() {
    int result = add(3, 4);
    printf("Result: %d", result);
    return 0;
  }
## 7. Arrays
An array is a collection of variables of the same type.
- ## Declaring and Initializing Arrays:
  ```javascript
  int numbers[5] = {1, 2, 3, 4, 5};
- ## Accessing Array Elements:
  ```javascript
  printf("%d", numbers[0]);  // Outputs 1
## 8. Pointers
Pointers are variables that store the memory address of another variable.
- ## Pointer Syntax:
  ```javascript
  int x = 10;
  int *ptr = &x;
  printf("%d", *ptr);  // Dereferences ptr to output the value of x
## 9. Structs
A struct (short for structure) is a user-defined data type that allows you to combine different types of data.
## Defining a Struct:
  ```javascript
  struct Person {
    char name[50];
    int age;
  };

  struct Person person1 = {"Alice", 30};