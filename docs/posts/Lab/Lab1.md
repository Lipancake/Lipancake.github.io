---
icon: edit
date: 2022-01-01
category:
  - CategoryA
tag:
  - tag A
  - tag B
---

# CS61a Lab 1 Variables & Functions, Control
Link to this section: https://inst.eecs.berkeley.edu/~cs61a/fa20/lab/lab01/
## Q1-3: WWPD
自己跑一遍代码

## Q4: Falling Factorial
Let's write a function falling, which is a "falling" factorial that takes two arguments, n and k, and returns the product of k consecutive numbers, starting from n and working downwards.
::: code-tabs#Q1
@tab Question
```
def falling(n, k):
    """Compute the falling factorial of n to depth k.

    >>> falling(6, 3)  # 6 * 5 * 4
    120
    >>> falling(4, 3)  # 4 * 3 * 2
    24
    >>> falling(4, 1)  # 4
    4
    >>> falling(4, 0)
    1
    """
    "*** YOUR CODE HERE ***"
```

@tab Answer
```
def falling(n, k):
    """Compute the falling factorial of n to depth k.

    >>> falling(6, 3)  # 6 * 5 * 4
    120
    >>> falling(4, 3)  # 4 * 3 * 2
    24
    >>> falling(4, 1)  # 4
    4
    >>> falling(4, 0)
    1
    """
    "*** YOUR CODE HERE ***"
    total = 1
    while k > 0:
        total = total * (n-k+1)
        k -= 1
    return total
```
:::

## Q5: Sum Digits
Write a function that takes in a nonnegative integer and sums its digits. (Using floor division and modulo might be helpful here!)
::: code-tabs#Q1
@tab Question
```
def sum_digits(y):
    """Sum all the digits of y.

    >>> sum_digits(10) # 1 + 0 = 1
    1
    >>> sum_digits(4224) # 4 + 2 + 2 + 4 = 12
    12
    >>> sum_digits(1234567890)
    45
    >>> a = sum_digits(123) # make sure that you are using return rather than print
    >>> a
    6
    """
    "*** YOUR CODE HERE ***"
```

@tab Answer
```
def sum_digits(y):
    """Sum all the digits of y.

    >>> sum_digits(10) # 1 + 0 = 1
    1
    >>> sum_digits(4224) # 4 + 2 + 2 + 4 = 12
    12
    >>> sum_digits(1234567890)
    45
    >>> a = sum_digits(123) # make sure that you are using return rather than print
    >>> a
    6
    """
    "*** YOUR CODE HERE ***"
    total = 0
    while y > 0:
        y, b = y // 10, y % 10
        total = total + b
    return total
```
:::

## Q7: Double Eights
Write a function that takes in a number and determines if the digits contain two adjacent 8s.
::: code-tabs#Q1
@tab Question
```
def double_eights(n):
    """Return true if n has two eights in a row.
    >>> double_eights(8)
    False
    >>> double_eights(88)
    True
    >>> double_eights(2882)
    True
    >>> double_eights(880088)
    True
    >>> double_eights(12345)
    False
    >>> double_eights(80808080)
    False
    """
    "*** YOUR CODE HERE ***"
```

@tab Answer
```
def double_eights(n):
    """Return true if n has two eights in a row.
    >>> double_eights(8)
    False
    >>> double_eights(88)
    True
    >>> double_eights(2882)
    True
    >>> double_eights(880088)
    True
    >>> double_eights(12345)
    False
    >>> double_eights(80808080)
    False
    """
    "*** YOUR CODE HERE ***"
    while n >=88 :
        if (n % 100 == 88):
            return True
        else:
            return double_eights(n // 10)
    return False
```

@tab Answer2
```
def double_eights(n):
    """Return true if n has two eights in a row.
    >>> double_eights(8)
    False
    >>> double_eights(88)
    True
    >>> double_eights(2882)
    True
    >>> double_eights(880088)
    True
    >>> double_eights(12345)
    False
    >>> double_eights(80808080)
    False
    """
    "*** YOUR CODE HERE ***"
    number = str(n)
    length = len(number)
    count = 0
    for i in range(0, length):
        if (count == 1 and number[i] == '8'):
            return True
        if number[i] == '8':
            count = 1
        else:
            count = 0
    return False
```
:::
