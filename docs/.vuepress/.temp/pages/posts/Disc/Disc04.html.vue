<template><div><h1 id="cs61a-disc-4" tabindex="-1"><a class="header-anchor" href="#cs61a-disc-4" aria-hidden="true">#</a> CS61a DISC 4</h1>
<h1 id="tree-recursion-python-lists" tabindex="-1"><a class="header-anchor" href="#tree-recursion-python-lists" aria-hidden="true">#</a> Tree Recursion, Python Lists</h1>
<p>Link to this section: <a href="https://inst.eecs.berkeley.edu/~cs61a/fa21/disc/disc04/" target="_blank" rel="noopener noreferrer">https://inst.eecs.berkeley.edu/~cs61a/fa21/disc/disc04/<ExternalLinkIcon/></a></p>
<h2 id="q1-count-stair-ways" tabindex="-1"><a class="header-anchor" href="#q1-count-stair-ways" aria-hidden="true">#</a> Q1: Count Stair Ways</h2>
<p>Imagine that you want to go up a flight of stairs that has n steps, where n is a positive integer. You can either take 1 or 2 steps each time. In this question, you'll write a function count_stair_ways that solves this problem. Before you code your approach, consider these questions.</p>
<CodeTabs :data='[{"title":"Question"},{"title":"Answer"}]' tab-id="Q1">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def count_stair_ways(n):
    """Returns the number of ways to climb up a flight of
    n stairs, moving either 1 step or 2 steps at a time.
    >>> count_stair_ways(4)
    5
    """
    "*** YOUR CODE HERE ***"

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def count_stair_ways(n):
    """Returns the number of ways to climb up a flight of
    n stairs, moving either 1 step or 2 steps at a time.
    >>> count_stair_ways(4)
    5
    """
    "*** YOUR CODE HERE ***"
    if n == 0:
        return 1
    elif n &lt; 0:
        return 0
    else:
        return count_stair_ways(n-1) + count_stair_ways(n-2)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="q2-count-k" tabindex="-1"><a class="header-anchor" href="#q2-count-k" aria-hidden="true">#</a> Q2: Count K</h2>
<p>Consider a special version of the count_stair_ways problem, where instead of taking 1 or 2 steps, we are able to take up to and including k steps at a time. Write a function count_k that figures out the number of paths for this scenario. Assume n and k are positive.</p>
<CodeTabs :data='[{"title":"Question"},{"title":"Answer"}]' tab-id="Q2">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def count_k(n, k):
    """ Counts the number of paths up a flight of n stairs
    when taking up to and including k steps at a time.
    >>> count_k(3, 3) # 3, 2 + 1, 1 + 2, 1 + 1 + 1
    4
    >>> count_k(4, 4)
    8
    >>> count_k(10, 3)
    274
    >>> count_k(300, 1) # Only one step at a time
    1
    """
    "*** YOUR CODE HERE ***"

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def count_k(n, k):
    """ Counts the number of paths up a flight of n stairs
    when taking up to and including k steps at a time.
    >>> count_k(3, 3) # 3, 2 + 1, 1 + 2, 1 + 1 + 1
    4
    >>> count_k(4, 4)
    8
    >>> count_k(10, 3)
    274
    >>> count_k(300, 1) # Only one step at a time
    1
    """
    "*** YOUR CODE HERE ***"
    if n == 0:
        return 1
    elif n &lt; 0:
        return 0
    else:
        total = 0
        for i in range(1, k+1):
            total += count_k(n-i, k)
        return total
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="q3-wwpd-lists" tabindex="-1"><a class="header-anchor" href="#q3-wwpd-lists" aria-hidden="true">#</a> Q3: WWPD: Lists</h2>
<p>What would Python display?</p>
<CodeTabs :data='[{"title":"Question"}]' tab-id="Q3">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>>>> a = [1, 5, 4, [2, 3], 3]
>>> print(a[0], a[-1])
? 1 3

>>>len(a)
? 5

>>> 2 in a
? False

>>> a[3][0]
? 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="q4-even-weighted" tabindex="-1"><a class="header-anchor" href="#q4-even-weighted" aria-hidden="true">#</a> Q4: Even weighted</h2>
<p>Write a function that takes a list s and returns a new list that keeps only the even-indexed elements of s and multiplies them by their corresponding index.</p>
<CodeTabs :data='[{"title":"Question"},{"title":"Answer"}]' tab-id="Q4">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def even_weighted(s):
    """
    >>> x = [1, 2, 3, 4, 5, 6]
    >>> even_weighted(x)
    [0, 6, 20]
    """
    return [_________________________________________________]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def even_weighted(s):
    """
    >>> x = [1, 2, 3, 4, 5, 6]
    >>> even_weighted(x)
    [0, 6, 20]
    """
    return [s[i] * i for i in range(6) if i % 2 == 0]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="q5-max-product" tabindex="-1"><a class="header-anchor" href="#q5-max-product" aria-hidden="true">#</a> Q5: Max Product</h2>
<p>Write a function that takes in a list and returns the maximum product that can be formed using nonconsecutive elements of the list. The input list will contain only numbers greater than or equal to 1.</p>
<CodeTabs :data='[{"title":"Question"},{"title":"Answer"}]' tab-id="Q5">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def max_product(s):
    """Return the maximum product that can be formed using
    non-consecutive elements of s.
    >>> max_product([10,3,1,9,2]) # 10 * 9
    90
    >>> max_product([5,10,5,10,5]) # 5 * 5 * 5
    125
    >>> max_product([])
    1
    """

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def max_product(s):
    """Return the maximum product that can be formed using
    non-consecutive elements of s.
    >>> max_product([10,3,1,9,2]) # 10 * 9
    90
    >>> max_product([5,10,5,10,5]) # 5 * 5 * 5
    125
    >>> max_product([])
    1
    """
    if s == []:
        return 1
    else:
        return max(max_product(s[1:]), s[0] * max_product(s[2:]))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
</div></template>
