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