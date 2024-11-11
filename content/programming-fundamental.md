---
title: Programming-Fundamental
description: Programming fundamentals are the basic principles and terminologies that programmers use to write code that is efficient, modular, and easy to understand. These fundamentals are similar across many programming languages, such as C, C++, Java, and Python
slug: programming-fundamental
date: 31/02/2024
author: Anonymous
image: "https://images.pexels.com/photos/270488/pexels-photo-270488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
solution: Object-oriented programming (OOPS) A fundamental Programming concept that focuses an objects, which are data structures that contain functions and data.
---
## Object-oriented programming (OOPs)
A fundamental programming concept that focuses on objects, which are data structures that contain functions and data. 
## Algorithms
A series of steps that describe how to achieve a task in a step-by-step, ordered manner. 
 Debugging
A basic developer tool that helps programmers understand code, find problems, and test different flows through an application. 
 
## Variables
A fundamental unit in computer programs that stores an assigned value. 
 
## Arrays
A collection of data that is stored in a single variable. Arrays can store multiple values of the same data type, such as a list of numbers or a list of names. 
 
## Functions
A fundamental concept that allows programmers to write concise, reusable, maintainable, and modular code. 
# C++ Get Started
To start using C++, you need two things:

- A text editor, like Notepad, to write C++ code
- A compiler, like GCC, to translate the C++ code into a language that the computer will understand

There are many text editors and compilers to choose from. In this tutorial, we will use an IDE (see below).

## Module 1: Introduction to C++ and Setting Up the Environment
Topics:
- Install a C++ compiler (like GCC, Visual Studio, or CLion)
- Write your first C++ program: "Hello, World!"

- Code Example:
  ```javascript
    #include <iostream> // includes the input-output stream library

    int main() {
    std::cout << "Hello, World!" << std::endl; // prints "Hello, World!" to the console
    return 0;
    }
## Exercise:
- Write and run the "Hello, World!" program.
- Change the output message to "Welcome to C++!" and run it again.

## Module 2: Variables and Basic Data Types
Topics:
- Variables and data types (int, float, double, char, bool)
- Declaring and initializing variables
- Using cout and cin for output and input


- Code Example:

  ```javascript
    #include <iostream> // includes the input-output stream library

    int main() {
    int age = 25;               // integer
    float height = 5.9;          // floating point
    char grade = 'A';            // character
    bool isStudent = true;       // boolean (true or false)

    std::cout << "Age: " << age << std::endl;
    std::cout << "Height: " << height << std::endl;
    std::cout << "Grade: " << grade << std::endl;
    std::cout << "Is Student: " << isStudent << std::endl;

    return 0;
  }
Exercise:
- Declare variables of different data types and initialize them with values.
- Write a program that takes a user's age and height as input, then prints it back.
## Module 3: Basic Arithmetic and Operators
Topics:
- Arithmetic operators: +, -, *, /, %
- Using operators in expressions
- Understanding operator precedence



- Code Example:

  ```javascript
    #include <iostream> // includes the input-output stream library

    int main() {
    int num1, num2;
    std::cout << "Enter two numbers: ";
    std::cin >> num1 >> num2;

    std::cout << "Sum: " << num1 + num2 << std::endl;
    std::cout << "Difference: " << num1 - num2 << std::endl;
    std::cout << "Product: " << num1 * num2 << std::endl;
    std::cout << "Quotient: " << num1 / num2 << std::endl;
    std::cout << "Remainder: " << num1 % num2 << std::endl;

    return 0;
  }
## Exercise:
- Write a program that asks the user for two numbers and displays their sum, difference, product, quotient, and remainder.

## Module 4: Conditional Statements
Topics:
- if, else if, and else statements
- Relational operators (==, !=, >, <, >=, <=)
- Logical operators (&&, ||, !)

- Code Example:

  ```javascript
    #include <iostream> // includes the input-output stream library

  int main() {
    int age;
    std::cout << "Enter your age: ";
    std::cin >> age;

    if (age >= 18) {
        std::cout << "You are an adult." << std::endl;
    } else if (age > 0) {
        std::cout << "You are a minor." << std::endl;
    } else {
        std::cout << "Invalid age." << std::endl;
    }

    return 0;
   }
## Exercise:
- Write a program that takes a number as input and checks if it’s positive, negative, or zero.
- Modify the age program above to check if the user is a teenager (age between 13 and 19).
## Module 5: Loops
Topics:
- for loop
- while loop
- do-while loop

## for loop

- Code Example:

  ```javascript
    #include <iostream> // includes the input-output stream library

  int main() {
    int n;
    std::cout << "Enter a number to print its multiplication table: ";
    std::cin >> n;

    for (int i = 1; i <= 10; i++) {
        std::cout << n << " x " << i << " = " << n * i << std::endl;
    }

    return 0;
   }
## while loop
In a while loop, the condition is checked before each iteration. If the condition is true, the code inside the loop runs. If the condition is false initially, the loop does not execute at all.

- Code Example:

  ```javascript
    #include <iostream> // includes the input-output stream library


    int main() {
    int i = 1;

    while (i <= 5) {
        std::cout << "Number: " << i << std::endl;
        i++; // Increment i by 1 each time the loop runs
    }

    return 0;
   }
## Explanation:
- The loop starts with i initialized to 1.
- It prints the value of i and increments it by 1 on each iteration.
- The loop stops when i becomes greater than 5.


## do-while Loop
In a do-while loop, the code inside the loop executes at least once because the condition is checked after each iteration.

- Code Example:

  ```javascript
    #include <iostream> // includes the input-output stream library
    int main() {
    int i = 1;

    do {
        std::cout << "Number: " << i << std::endl;
        i++; // Increment i by 1 each time the loop runs
    } while (i <= 5);

    return 0;
   }
## Explanation:
- The loop starts with i initialized to 1.
- It prints the value of i and increments it by 1 on each iteration.
- The loop stops when i becomes greater than 5.
- The difference here is that the loop will execute at least once, even if i starts with a value greater than 5 (as the condition is checked after the code block).

## Module 6: Arrays
Topics:
- Declaring and initializing arrays
- Accessing and modifying array elements
- Basic operations on arrays

- Code Example:

  ```javascript
    #include <iostream> // includes the input-output stream library
    int main() {
    int numbers[5] = {10, 20, 30, 40, 50};

    // Accessing array elements
    for (int i = 0; i < 5; i++) {
        std::cout << "Element at index " << i << ": " << numbers[i] << std::endl;
    }

    return 0;
  }
## Exercise:
- Declare an array of 5 integers and initialize it.
- Write a program to find the sum of all elements in an array.
## Module 7: Functions
Topics:
- Defining functions
- Function parameters and return values
- Scope of variables

- Code Example:

  ```javascript
    #include <iostream> // includes the input-output stream library
    int add(int a, int b) {
    return a + b;
   }

  int main() {
    int x = 5, y = 10;
    std::cout << "Sum: " << add(x, y) << std::endl;
    return 0;
   }
## Exercise:
- Write a function multiply that takes two integers as parameters and returns their product.
- Create a program that uses the multiply function to multiply two user-entered numbers.
## Module 8: Basic Object-Oriented Programming (OOP) Concepts
Topics:
- Introduction to classes and objects
- Defining class attributes and methods
- Creating and using objects


- Code Example:

  ```javascript
  #include <iostream>

  class Car {
  public:
    std::string brand;
    int year;

    void honk() {
        std::cout << "Beep! Beep!" << std::endl;
    }
  };

  int main() {
    Car myCar;
    myCar.brand = "Toyota";
    myCar.year = 2020;

    std::cout << "Car brand: " << myCar.brand << std::endl;
    std::cout << "Car year: " << myCar.year << std::endl;
    myCar.honk();

    return 0;
  }
## Exercise:
- Create a Person class with attributes name and age, and a method introduce that prints a greeting.
- Instantiate an object of Person and call the introduce method.