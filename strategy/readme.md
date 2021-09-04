# Strategy Pattern

## Definition

**Strategy** is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.

***

## description

**Strategy** *define a family of alogrithms* .
functions that do the same thing but in diffrent way.
*encaplulate each one*. encapulate mean in oop "in difffent class that implement the same interface"
*and make them interchangeable*, client the one who use thoes alogrithms can change between them in runtime.
*strategy let alogithms vary independently from client that useit*.
client that use theso alogrithms or fucntions. don't know or care have they work, it's khow that they implement particatl interface, client and algorhtims are decoupled from each other

***

## run script

```
npm run strategy
```

*** 

## UML

<h1 align="center"><img src="https://www.oreilly.com/library/view/head-first-design/0596007124/figs/web/022fig01.png.jpg"/></h1>

***

## OO Priclipes

* Ideitify the aspects of your applications that vary and seprate them from what stays the same.
* favor composition over inhirtance
* program to an interface, not implementation