---
icon: edit
date: 2022-01-01
category:
  - CS61a
tag:
  - Disc
order: 5
---

# CS61a DISC 5
# Trees, Data Abstraction, Sequences
Link to this section: <https://inst.eecs.berkeley.edu/~cs61a/fa21/disc/disc05/>
## Q1: Tree Abstraction Barrier
Consider a tree t constructed by calling tree(1, [tree(2), tree(4)]). For each of the following expressions, answer these two questions:

* What does the expression evaluate to?
* Does the expression violate any abstraction barriers? If so, write an equivalent expression that does not violate abstraction barriers.

::: code-tabs#Q1
@tab Question
```
1.label(t)


2.t[0] 


3.label(branches(t)[0]) 


4.is_leaf(t[1:][1]) # True


5.[label(b) for b in branches(t)]


6.branches(tree(5, [t, tree(3)]))[0][0] 


```

@tab Answer
```
1.label(t)
1

2.t[0] # 1
label(t)

3.label(branches(t)[0]) # 2
2

4.is_leaf(t[1:][1]) # True
is_leaf(branches(t)[1])

5.[label(b) for b in branches(t)]
[2, 4]

6.branches(tree(5, [t, tree(3)]))[0][0] # 1
label(branches(tree(5, [t, tree(3)]))[0])
```
:::

## Q2: Height
Write a function that returns the height of a tree. Recall that the height of a tree is the length of the longest path from the root to a leaf.

::: code-tabs#Q2
@tab Question
```
def height(t):
    """Return the height of a tree.

    >>> t = tree(3, [tree(5, [tree(1)]), tree(2)])
    >>> height(t)
    2
    >>> t = tree(3, [tree(1), tree(2, [tree(5, [tree(6)]), tree(1)])])
    >>> height(t)
    3
    """
    "*** YOUR CODE HERE ***"

```

@tab Answer
```
def height(t):
    """Return the height of a tree.

    >>> t = tree(3, [tree(5, [tree(1)]), tree(2)])
    >>> height(t)
    2
    >>> t = tree(3, [tree(1), tree(2, [tree(5, [tree(6)]), tree(1)])])
    >>> height(t)
    3
    """
    "*** YOUR CODE HERE ***"
    if branches(t) == []:
        return 1
    else:
        for branch in branches(t):
            all_heigit = [height(branch) + 1]
        return max(all_heigit)
```
:::

## Q3: Maximum Path Sum
Write a function that takes in a tree and returns the maximum sum of the values along any path in the tree. Recall that a path is from the tree's root to any leaf.

::: code-tabs#Q3
@tab Question
```
def max_path_sum(t):
    """Return the maximum path sum of the tree.

    >>> t = tree(1, [tree(5, [tree(1), tree(3)]), tree(10)])
    >>> max_path_sum(t)
    11
    """
    "*** YOUR CODE HERE ***"

```

@tab Answer
```
# Q3
def max_path_sum(t):
    """Return the maximum path sum of the tree.

    >>> t = tree(1, [tree(5, [tree(1), tree(3)]), tree(10)])
    >>> max_path_sum(t)
    11
    """
    "*** YOUR CODE HERE ***"
    if is_leaf(t):
        return label(t)
    return max([label(t) + max_path_sum(_) for _ in branches(t)])
```
:::

## Q4: Find Path
Write a function that takes in a tree and a value x and returns a list containing the nodes along the path required to get from the root of the tree to a node containing x.

If x is not present in the tree, return None. Assume that the entries of the tree are unique.

For the following tree, find_path(t, 5) should return [2, 7, 6, 5]

::: code-tabs#Q4
@tab Question
```
def find_path(t, x):
    """
    >>> t = tree(2, [tree(7, [tree(3), tree(6, [tree(5), tree(11)])] ), tree(15)])
    >>> find_path(t, 5)
    [2, 7, 6, 5]
    >>> find_path(t, 10)  # returns None
    """
    if _____________________________:
        return _____________________________
    _____________________________:
        path = ______________________
        if _____________________________:
            return _____________________________

```

@tab Answer
```
def find_path(t, x):
    """
    >>> t = tree(2, [tree(7, [tree(3), tree(6, [tree(5), tree(11)])] ), tree(15)])
    >>> find_path(t, 5)
    [2, 7, 6, 5]
    >>> find_path(t, 10)  # returns None
    """
    if label(t) == x:
        return [label(t)]
    paths = [find_path(b, x) for b in branches(t)]
    for path in paths:
        if path:
            return [label(t)] + path
```

@tab Answer2
```
def find_path(t, x):
    """
    >>> t = tree(2, [tree(7, [tree(3), tree(6, [tree(5), tree(11)])] ), tree(15)])
    >>> find_path(t, 5)
    [2, 7, 6, 5]
    >>> find_path(t, 10)  # returns None
    """
    if label(t) == x:
        return [label(t)]
    for b in branches(t):
        path = find_path(b, x)
        if path:
            return [label(t)] + path
```
:::

## Q5: Map, Filter, Reduce
Many languages provide map, filter, reduce functions for sequences. Python also provides these functions (and we'll formally introduce them later on in the course), but to help you better understand how they work, you'll be implementing these functions in the following problems.

::: info Hint

:::

::: code-tabs#Q1
@tab Question
```
def my_map(fn, seq):
    """Applies fn onto each element in seq and returns a list.
    >>> my_map(lambda x: x*x, [1, 2, 3])
    [1, 4, 9]
    """
    "*** YOUR CODE HERE ***"

def my_filter(pred, seq):
    """Keeps elements in seq only if they satisfy pred.
    >>> my_filter(lambda x: x % 2 == 0, [1, 2, 3, 4])  # new list has only even-valued elements
    [2, 4]
    """
    "*** YOUR CODE HERE ***"

def my_reduce(combiner, seq):
    """Combines elements in seq using combiner.
    seq will have at least one element.
    >>> my_reduce(lambda x, y: x + y, [1, 2, 3, 4])  # 1 + 2 + 3 + 4
    10
    >>> my_reduce(lambda x, y: x * y, [1, 2, 3, 4])  # 1 * 2 * 3 * 4
    24
    >>> my_reduce(lambda x, y: x * y, [4])
    4
    >>> my_reduce(lambda x, y: x + 2 * y, [1, 2, 3]) # (1 + 2 * 2) + 2 * 3
    11
    """
    "*** YOUR CODE HERE ***"

```

@tab Answer
```
def my_map(fn, seq):
    """Applies fn onto each element in seq and returns a list.
    >>> my_map(lambda x: x*x, [1, 2, 3])
    [1, 4, 9]
    """
    "*** YOUR CODE HERE ***"
    return [fn(i) for i in seq]

def my_filter(pred, seq):
    """Keeps elements in seq only if they satisfy pred.
    >>> my_filter(lambda x: x % 2 == 0, [1, 2, 3, 4])  # new list has only even-valued elements
    [2, 4]
    """
    "*** YOUR CODE HERE ***"
    return [i for i in seq if pred(i)]

def my_reduce(combiner, seq):
    """Combines elements in seq using combiner.
    seq will have at least one element.
    >>> my_reduce(lambda x, y: x + y, [1, 2, 3, 4])  # 1 + 2 + 3 + 4
    10
    >>> my_reduce(lambda x, y: x * y, [1, 2, 3, 4])  # 1 * 2 * 3 * 4
    24
    >>> my_reduce(lambda x, y: x * y, [4])
    4
    >>> my_reduce(lambda x, y: x + 2 * y, [1, 2, 3]) # (1 + 2 * 2) + 2 * 3
    11
    """
    "*** YOUR CODE HERE ***"
    if len(seq) == 1:
        return seq[0]
    result = seq[0]
    for i in range(1, len(seq)):
        result = combiner(result, seq[i])
    return result


```
:::

## Q6: Count palindromes
Write a function that counts the number of palindromes (any word that reads the same forwards as it does when read backwards) in a list of words using only lambda, string operations, conditional expressions, and the functions we defined above (my_filter, my_map, my_reduce). Specifically, do not use recursion or any kind of loop.

::: code-tabs#Q6
@tab Question
```
def count_palindromes(L):
    """The number of palindromic words in the sequence of strings
    L (ignoring case).

    >>> count_palindromes(("Acme", "Madam", "Pivot", "Pip"))
    2
    """
    return ______

```

@tab Answer
```
def count_palindromes(L):
    """The number of palindromic words in the sequence of strings
    L (ignoring case).

    >>> count_palindromes(("Acme", "Madam", "Pivot", "Pip"))
    2
    """
    return len(my_filter(lambda x: x.lower()[::-1] == x.lower(), L))
```
:::

## Q7: Perfectly Balanced
Part A: Implement sum_tree, which returns the sum of all the labels in tree t.

Part B: Implement balanced, which returns whether every branch of t has the same total sum and that the branches themselves are also balanced.

Challenge: Solve both of these parts with just 1 line of code each.

::: code-tabs#Q7
@tab Question
```
def sum_tree(t):
    """
    Add all elements in a tree.
    >>> t = tree(4, [tree(2, [tree(3)]), tree(6)])
    >>> sum_tree(t)
    15
    """
    "*** YOUR CODE HERE ***"

def balanced(t):
    """
    Checks if each branch has same sum of all elements and
    if each branch is balanced.
    >>> t = tree(1, [tree(3), tree(1, [tree(2)]), tree(1, [tree(1), tree(1)])])
    >>> balanced(t)
    True
    >>> t = tree(1, [t, tree(1)])
    >>> balanced(t)
    False
    >>> t = tree(1, [tree(4), tree(1, [tree(2), tree(1)]), tree(1, [tree(3)])])
    >>> balanced(t)
    False
    """
    "*** YOUR CODE HERE ***"

```

@tab Answer
```



```
:::

## Q1: Make Keeper
Write a function that takes in a number n and returns a function that can take in a single parameter cond. When we pass in some condition function cond into this returned function, it will print out numbers from 1 to n where calling cond on that number returns True.

::: info Hint

:::

::: code-tabs#Q1
@tab Question
```

```

@tab Answer
```



```
:::


