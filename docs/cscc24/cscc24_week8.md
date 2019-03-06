---
id: c24_w19w8
title: "Monads"
---

## Introduction

Monads are a useful construct for allowing one to chain operations together. 

## Examples

Some examples of Monads can be seen below:

Reading data from the console
```haskell
-- do-notation
do
  putStrLn "Enter your name"
  name <- getLine
  putStrLn ("Hello " ++ name)

-- bind notation, messier but better for understanding
putStrLn "Enter your name"
>>= (\_ -> getLine)
>>= (\name -> putStrLn ("Hello " ++ name))
```

## Implementation

The operation that defines a Monad is the `>>=` operator (also called the *bind* operator) which has the following type definition:

```haskell
(>>=) :: Monad m => m a -> (a -> m b) -> m b
```

Which means `>>=` takes in an item of type `Monad` as the first parameter and a function as the second parameter.

The *result* of Monad `m` gets mapped to parameter `a` in the lambda function, which can then be used to produce a new Monad (or pass it to more `>>=` calls)

Let's define the following recursive data type:
```haskell
data Turtles a = Last a | Turtle (Turtles a)
```

To make this an instance of a Monad we need to define the bind (`>>=`) and `return` functions.

```haskell
instance Monad Turtles where
  -- base case
  return a = Last a

  -- when we get a Last type, pass its internal (a primitive) into k
  Last a >>= k = k a

  -- for a Turtle type, pass its internal value (a Last or Turtle) into k
  Turtle a >>= k = Turtle (a >>= k)
```
