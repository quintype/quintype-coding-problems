# Javascript problems

## Fibonacci

Write a pure function to calculate the `nth` number in the fibonacci series.

```javascript
fib(1) // 1
fib(2) // 1
fib(3) // 2
fib(6) // 8
```

## Fibonacci with Side Effects

Write a function which will return the next fibonacci number each time it's called.

```javascript
const run = fib();
run() // 1
run() // 1
run() // 2
run() // 3
run() // 5
run() // 8
```

## Get the current domain

Write a function to get the current domain of the page you are on

```javascript
// I am currently in the inspect console on www.google.co.in
getDomain() // www.google.co.in
```

## Count Vowels

Write a function to count the number of vowels in the current string

```javascript
countVowels("hello my name is javascript") // 7
```

## Sell $3 pens and $5 books

You have an infinite supply of pens (worth $3), and books (worth $5). A customer comes in and wants to spend exactly `n` dollars. What (if anything) can you sell them to match the amount. Return the items in a string (separated by `.`), or `null` if it is impossible

```javascript
generateItems(11) // "pen.pen.book."
generateItems(8)  // "pen.book."
generateItems(7)  // null
```
