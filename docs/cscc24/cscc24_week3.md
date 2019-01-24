---
id: c24_w19w3
title: "Pattern Matching and Recursive Data Types"
---

## Introduction to Pattern Matching

Most of the processing in Haskell is done by pattern 
matching. It's a powerful syntax that allows you to break
up objects into useful pieces that you can use in your code.

## Pattern Matching on Lists

You can use the `:` syntax to break up a list into various 
parts as shown below:

```haskell
-- pattern match on list w/ no elements (base case)
func [] = print "Done!"

-- pattern matching on list w/ at least 1 element (recursive step)
func (x:xs) = do
  print x
  func xs

-- this one assumes at least 2 elements, and now I can
-- use x1 and x2 in the body
func [x] = print x  -- different base case for when list has 1 element
func (x1:x2:xs) = do
  print x1
  print x2
  func xs

-- now I can use the lst variable, which maps to the whole list
func lst@(x:xs) = do
  print lst
  func xs
```
Here, func takes in a *single* list and breaks it up into 
the `head` of the list (`x`) and the `tail` (`xs`). These 
are variables that you can then use in your code.

The `(x:xs)` syntax only matches against lists that have *at 
least* 1 item, since it needs to map `x` to the first 
element in the list (`xs` in this case becomes `[]`)

In the case that you need to match *no* elements, you can 
use the empty list (`[]`) as the pattern itself, as shown in 
the example.

You can also keep a map to the entire list by using the `@`
syntax as shown in the code, so you don't have to reconstruct
the list again using `(x:xs)`

You can find more information on pattern matching in this article on [Haskell syntax](http://learnyouahaskell.com/syntax-in-functions)

## Recursive Data Types

Recursive Data Types are simply data types that can store a 
nested version of themselves continuously. Like recursion of 
any form, there must be a base case and a recursive step.

For example, if I wanted to make a basic nested dictionary 
structure, my base case would be simple key->single-value 
pair. However, the recursive case would be the key mapping 
to another dictionary type, which itself could be another 
nesting or just a simple value.

Here's how such a data type would look like:
```haskell
-- simple 1-1 mapping dictionary, this just stores one
-- key-value pair
data NestedDictionary k v = Pair k v | Nested k (NestedDictionary k v)
  deriving (Show)

-- usage
let simple_dict = Nested 1 (Pair 2 3)
```
We define `Pair` to be the base case and `Nested` to be the 
recursive one. It stores yet another `NestedDictionary` type 
which could be more Pairs or Nested types.

You can find more information on this under the types and 
typeclasses section of [this article](http://learnyouahaskell.com/making-our-own-types-and-typeclasses) 
