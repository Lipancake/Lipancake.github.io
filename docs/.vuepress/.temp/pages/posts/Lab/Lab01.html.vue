<template><div><h1 id="cs61a-lab-1" tabindex="-1"><a class="header-anchor" href="#cs61a-lab-1" aria-hidden="true">#</a> CS61a Lab 1</h1>
<h1 id="variables-functions-control" tabindex="-1"><a class="header-anchor" href="#variables-functions-control" aria-hidden="true">#</a> Variables &amp; Functions, Control</h1>
<p>Link to this section: <a href="https://inst.eecs.berkeley.edu/~cs61a/fa20/lab/lab01/" target="_blank" rel="noopener noreferrer">https://inst.eecs.berkeley.edu/~cs61a/fa20/lab/lab01/<ExternalLinkIcon/></a></p>
<h2 id="q1-3-wwpd" tabindex="-1"><a class="header-anchor" href="#q1-3-wwpd" aria-hidden="true">#</a> Q1-3: WWPD</h2>
<p>自己跑一遍代码</p>
<h2 id="q4-falling-factorial" tabindex="-1"><a class="header-anchor" href="#q4-falling-factorial" aria-hidden="true">#</a> Q4: Falling Factorial</h2>
<p>Let's write a function falling, which is a &quot;falling&quot; factorial that takes two arguments, n and k, and returns the product of k consecutive numbers, starting from n and working downwards.</p>
<CodeTabs :data='[{"title":"Question"},{"title":"Answer"}]' tab-id="Q1">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def falling(n, k):
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def falling(n, k):
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="q5-sum-digits" tabindex="-1"><a class="header-anchor" href="#q5-sum-digits" aria-hidden="true">#</a> Q5: Sum Digits</h2>
<p>Write a function that takes in a nonnegative integer and sums its digits. (Using floor division and modulo might be helpful here!)</p>
<CodeTabs :data='[{"title":"Question"},{"title":"Answer"}]' tab-id="Q1">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def sum_digits(y):
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def sum_digits(y):
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="q7-double-eights" tabindex="-1"><a class="header-anchor" href="#q7-double-eights" aria-hidden="true">#</a> Q7: Double Eights</h2>
<p>Write a function that takes in a number and determines if the digits contain two adjacent 8s.</p>
<CodeTabs :data='[{"title":"Question"},{"title":"Answer"},{"title":"Answer2"}]' tab-id="Q1">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def double_eights(n):
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def double_eights(n):
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def double_eights(n):
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
</div></template>
