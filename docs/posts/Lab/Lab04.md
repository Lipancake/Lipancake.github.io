---
icon: edit
date: 2022-01-01
category:
  - CS61a
tag:
  - Disc
---

# CS61a Lab 4
# Recursion, Tree Recursion, Python Lists
Link to this section: <https://inst.eecs.berkeley.edu/~cs61a/fa20/lab/lab04/>
## Q1: List Indexing
For each of the following lists, what is the list indexing expression that evaluates to 7? For example, if x = [7], then the answer would be x[0]. You can use the interpreter or Python Tutor to experiment with your answers. If the code would cause an error, type Error.

::: info info
Use Ok to test your knowledge with the following "List Indexing" questions:

python3 ok -q list-indexing -u
:::

::: code-tabs#Q1
@tab Question
```
---------------------------------------------------------------------
List Indexing > Suite 1 > Case 1
(cases remaining: 2)

What would Python display? If you get stuck, try it out in the Python
interpreter!

>>> x = [1, 3, [5, 7], 9] # Write the expression that indexes into x to output the 7
? x[2][1]
-- OK! --

>>> x = [[3, [5, 7], 9]] # Write the expression that indexes into x to output the 7
? x[0][1][1]
-- OK! --

---------------------------------------------------------------------
List Indexing > Suite 2 > Case 1
(cases remaining: 1)

What would Python display? If you get stuck, try it out in the Python
interpreter!

>>> lst = [3, 2, 7, [84, 83, 82]]
>>> lst[4]

? error
-- OK! --

>>> lst[3][0]
? 84
-- OK! --

```
:::

## Q2: Skip Add
Write a function skip_add that takes a single argument n and computes the sum of every other integer between 0 and n. Assume n is non-negative.

::: code-tabs#Q2
@tab Question
```
this_file = __file__

def skip_add(n):
    """ Takes a number n and returns n + n-2 + n-4 + n-6 + ... + 0.

    >>> skip_add(5)  # 5 + 3 + 1 + 0
    9
    >>> skip_add(10) # 10 + 8 + 6 + 4 + 2 + 0
    30
    >>> # Do not use while/for loops!
    >>> from construct_check import check
    >>> # ban iteration
    >>> check(this_file, 'skip_add',
    ...       ['While', 'For'])
    True
    """
    "*** YOUR CODE HERE ***"

```

@tab Answers
```
def skip_add(n):
    """ Takes a number n and returns n + n-2 + n-4 + n-6 + ... + 0.

    >>> skip_add(5)  # 5 + 3 + 1 + 0
    9
    >>> skip_add(10) # 10 + 8 + 6 + 4 + 2 + 0
    30
    >>> # Do not use while/for loops!
    >>> from construct_check import check
    >>> # ban iteration
    >>> check(this_file, 'skip_add',
    ...       ['While', 'For'])
    True
    """
    "*** YOUR CODE HERE ***"
    if n <= 0:
        return 0
    else:
        return n + skip_add(n-2)

```
:::

## Q3: Summation
Now, write a recursive implementation of summation, which takes a positive integer n and a function term. It applies term to every number from 1 to n including n and returns the sum of the results.

::: code-tabs#Q3
@tab Question
```
def summation(n, term):

    """Return the sum of the first n terms in the sequence defined by term.
    Implement using recursion!

    >>> summation(5, lambda x: x * x * x) # 1^3 + 2^3 + 3^3 + 4^3 + 5^3
    225
    >>> summation(9, lambda x: x + 1) # 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
    54
    >>> summation(5, lambda x: 2**x) # 2^1 + 2^2 + 2^3 + 2^4 + 2^5
    62
    >>> # Do not use while/for loops!
    >>> from construct_check import check
    >>> # ban iteration
    >>> check(this_file, 'summation',
    ...       ['While', 'For'])
    True
    """
    assert n >= 1
    "*** YOUR CODE HERE ***"

```

@tab Answers
```
def summation(n, term):

    """Return the sum of the first n terms in the sequence defined by term.
    Implement using recursion!

    >>> summation(5, lambda x: x * x * x) # 1^3 + 2^3 + 3^3 + 4^3 + 5^3
    225
    >>> summation(9, lambda x: x + 1) # 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
    54
    >>> summation(5, lambda x: 2**x) # 2^1 + 2^2 + 2^3 + 2^4 + 2^5
    62
    >>> # Do not use while/for loops!
    >>> from construct_check import check
    >>> # ban iteration
    >>> check(this_file, 'summation',
    ...       ['While', 'For'])
    True
    """
    assert n >= 1
    "*** YOUR CODE HERE ***"
    if n == 1:
        return term(1)
    else:
        return term(n)+summation(n-1, term)

```

:::

## Q4: Insect Combinatorics
Consider an insect in an M by N grid. The insect starts at the bottom left corner, (0, 0), and wants to end up at the top right corner, (M-1, N-1). The insect is only capable of moving right or up. Write a function paths that takes a grid length and width and returns the number of different paths the insect can take from the start to the goal. (There is a closed-form solution to this problem, but try to answer it procedurally using recursion.)

::: info info
For example, the 2 by 2 grid has a total of two ways for the insect to move from the start to the goal. For the 3 by 3 grid, the insect has 6 diferent paths (only 3 are shown above).
:::

::: code-tabs#Q4
@tab Question
```
def paths(m, n):
    """Return the number of paths from one corner of an
    M by N grid to the opposite corner.

    >>> paths(2, 2)
    2
    >>> paths(5, 7)
    210
    >>> paths(117, 1)
    1
    >>> paths(1, 157)
    1
    """
    "*** YOUR CODE HERE ***"

```

@tab Answers
```
def paths(m, n):
    """Return the number of paths from one corner of an
    M by N grid to the opposite corner.

    >>> paths(2, 2)
    2
    >>> paths(5, 7)
    210
    >>> paths(117, 1)
    1
    >>> paths(1, 157)
    1
    """
    "*** YOUR CODE HERE ***"
    if m == 1 and n == 1:
        return 1
    elif m < 1 or n < 1:
        return 0
    # elif m == 0 and n != 0:
    #     return paths(m, n - 1)
    # elif m != 0 and n == 0:
    #     return paths(m - 1, n)
    else:
        return paths(m-1, n)+paths(m, n-1)

```

:::

## Q5: Maximum Subsequence
A subsequence of a number is a series of (not necessarily contiguous) digits of the number. For example, 12345 has subsequences that include 123, 234, 124, 245, etc. Your task is to get the maximum subsequence below a certain length.

::: info Hint
There are two key insights for this problem:

You need to split into the cases where the ones digit is used and the one where it is not. In the case where it is, we want to reduce t since we used one of the digits, and in the case where it isn't we do not.
In the case where we are using the ones digit, you need to put the digit back onto the end, and the way to attach a digit d to the end of a number n is 10 * n + d.
:::
::: code-tabs#Q5
@tab Question
```
def max_subseq(n, t):
    """
    Return the maximum subsequence of length at most t that can be found in the given number n.
    For example, for n = 20125 and t = 3, we have that the subsequences are
        2
        0
        1
        2
        5
        20
        21
        22
        25
        01
        02
        05
        12
        15
        25
        201
        202
        205
        212
        215
        225
        012
        015
        025
        125
    and of these, the maxumum number is 225, so our answer is 225.

    >>> max_subseq(20125, 3)
    225
    >>> max_subseq(20125, 5)
    20125
    >>> max_subseq(20125, 6) # note that 20125 == 020125
    20125
    >>> max_subseq(12345, 3)
    345
    >>> max_subseq(12345, 0) # 0 is of length 0
    0
    >>> max_subseq(12345, 1)
    5
    """
    "*** YOUR CODE HERE ***"
    
```

@tab Answers
```
def max_subseq(n, t):
    """
    Return the maximum subsequence of length at most t that can be found in the given number n.
    For example, for n = 20125 and t = 3, we have that the subsequences are
        2
        0
        1
        2
        5
        20
        21
        22
        25
        01
        02
        05
        12
        15
        25
        201
        202
        205
        212
        215
        225
        012
        015
        025
        125
    and of these, the maxumum number is 225, so our answer is 225.

    >>> max_subseq(20125, 3)
    225
    >>> max_subseq(20125, 5)
    20125
    >>> max_subseq(20125, 6) # note that 20125 == 020125
    20125
    >>> max_subseq(12345, 3)
    345
    >>> max_subseq(12345, 0) # 0 is of length 0
    0
    >>> max_subseq(12345, 1)
    5
    """
    "*** YOUR CODE HERE ***"
    if t == 0 or n == 0:
        return 0
    else:
        use_last = max_subseq(n // 10, t-1) * 10 + n % 10
        not_use_last = max_subseq(n // 10, t)
        return max(use_last, not_use_last)

```

:::

## Q6: Add Characters

Given two words, w1 and w2, we say w1 is a subsequence of w2 if all the letters in w1 appear in w2 in the same order (but not necessarily all together). That is, you can add letters to any position in w1 to get w2. For example, "sing" is a substring of "absorbing" and "cat" is a substring of "contrast".

Implement add_chars, which takes in w1 and w2, where w1 is a substring of w2. This means that w1 is shorter than w2. It should return a string containing the characters you need to add to w1 to get w2. Your solution must use recursion.

In the example above, you need to add the characters "aborb" to "sing" to get "absorbing", and you need to add "ontrs" to "cat" to get "contrast".

The letters in the string you return should be in the order you have to add them from left to right. If there are multiple characters in the w2 that could correspond to characters in w1, use the leftmost one. For example, add_words("coy", "cacophony") should return "acphon", not "caphon" because the first "c" in "coy" corresponds to the first "c" in "cacophony".

::: code-tabs#Q6
@tab Question
```
def add_chars(w1, w2):
    """
    Return a string containing the characters you need to add to w1 to get w2.

    You may assume that w1 is a subsequence of w2.

    >>> add_chars("owl", "howl")
    'h'
    >>> add_chars("want", "wanton")
    'on'
    >>> add_chars("rat", "radiate")
    'diae'
    >>> add_chars("a", "prepare")
    'prepre'
    >>> add_chars("resin", "recursion")
    'curo'
    >>> add_chars("fin", "effusion")
    'efuso'
    >>> add_chars("coy", "cacophony")
    'acphon'
    >>> from construct_check import check
    >>> # ban iteration and sets
    >>> check(LAB_SOURCE_FILE, 'add_chars',
    ...       ['For', 'While', 'Set', 'SetComp']) # Must use recursion
    True
    """
    "*** YOUR CODE HERE ***"

```

@tab Answers
```
def add_chars(w1, w2):
    """
    Return a string containing the characters you need to add to w1 to get w2.

    You may assume that w1 is a subsequence of w2.

    >>> add_chars("owl", "howl")
    'h'
    >>> add_chars("want", "wanton")
    'on'
    >>> add_chars("rat", "radiate")
    'diae'
    >>> add_chars("a", "prepare")
    'prepre'
    >>> add_chars("resin", "recursion")
    'curo'
    >>> add_chars("fin", "effusion")
    'efuso'
    >>> add_chars("coy", "cacophony")
    'acphon'
    >>> from construct_check import check
    >>> # ban iteration and sets
    >>> check(LAB_SOURCE_FILE, 'add_chars',
    ...       ['For', 'While', 'Set', 'SetComp']) # Must use recursion
    True
    """
    "*** YOUR CODE HERE ***"
    if w1 == "":
        return w2
    elif w1[0] in w2:
        w2 = w2.replace(w1[0], '', 1)
        return add_chars(w1[1:], w2)
    else:
        return add_chars(w1[1:], w2)


```
:::

