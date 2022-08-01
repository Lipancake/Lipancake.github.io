<template><div><h1 id="cs61a-disc-1" tabindex="-1"><a class="header-anchor" href="#cs61a-disc-1" aria-hidden="true">#</a> CS61a DISC 1</h1>
<h1 id="control-environment-diagrams" tabindex="-1"><a class="header-anchor" href="#control-environment-diagrams" aria-hidden="true">#</a> Control, Environment Diagrams</h1>
<p>我的个人博客 <a href="https://lipancake.tk/" target="_blank" rel="noopener noreferrer">https://lipancake.tk/<ExternalLinkIcon/></a>
(挂在github上，第一次打开很慢，但是排版好看)</p>
<p>Link to this section: <a href="https://inst.eecs.berkeley.edu/~cs61a/fa21/disc/disc01/" target="_blank" rel="noopener noreferrer">https://inst.eecs.berkeley.edu/~cs61a/fa21/disc/disc01/<ExternalLinkIcon/></a></p>
<p>Run pythontutor link: <a href="https://pythontutor.com/composingprograms.html#mode=edit" target="_blank" rel="noopener noreferrer">https://pythontutor.com/composingprograms.html#mode=edit<ExternalLinkIcon/></a></p>
<h2 id="q1-jacket-weather" tabindex="-1"><a class="header-anchor" href="#q1-jacket-weather" aria-hidden="true">#</a> Q1: Jacket Weather?</h2>
<p>Alfonso will only wear a jacket outside if it is below 60 degrees or it is raining.</p>
<p>Write a function that takes in the current temperature and a boolean value telling if it is raining. This function should return True if Alfonso will wear a jacket and False otherwise.</p>
<p>First, try solving this problem using an if statement.</p>
<CodeTabs :data='[{"title":"Question"},{"title":"Answer"},{"title":"Answer 2"}]' tab-id="Q1">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def wears_jacket_with_if(temp, raining):
    """
    >>> wears_jacket_with_if(90, False)
    False
    >>> wears_jacket_with_if(40, False)
    True
    >>> wears_jacket_with_if(100, True)
    True
    """
    "*** YOUR CODE HERE ***"

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#Q1
def wears_jacket_with_if(temp, raining):
    """
    >>> wears_jacket_with_if(90, False)
    False
    >>> wears_jacket_with_if(40, False)
    True
    >>> wears_jacket_with_if(100, True)
    True
    """
    "*** YOUR CODE HERE ***"
    if temp &lt; 60 or raining:
        return True
    else:
        return False


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>return True if temp &lt; 60 or raining else False
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="q2-case-conundrum" tabindex="-1"><a class="header-anchor" href="#q2-case-conundrum" aria-hidden="true">#</a> Q2: Case Conundrum</h2>
<p>In this question, we will explore the difference between if and elif.</p>
<p>What is the result of evaluating the following code?</p>
<CodeTabs :data='[{"title":"Question"},{"title":"Answer"}]' tab-id="Q2">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def special_case():
    x = 10
    if x > 0:
        x += 2
    elif x &lt; 13:
        x += 3
    elif x % 2 == 1:
        x += 4
    return x

special_case()

def just_in_case():
    x = 10
    if x > 0:
        x += 2
    if x &lt; 13:
        x += 3
    if x % 2 == 1:
        x += 4
    return x

just_in_case()

def case_in_point():
    x = 10
    if x > 0:
        return x + 2
    if x &lt; 13:
        return x + 3
    if x % 2 == 1:
        return x + 4
    return x

case_in_point()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># Q2
def special_case():
    x = 10
    if x > 0:
        x += 2
    elif x &lt; 13:
        x += 3
    elif x % 2 == 1:
        x += 4
    return x

print(special_case()) # 12

def just_in_case():
    x = 10
    if x > 0:
        x += 2
    if x &lt; 13:
        x += 3
    if x % 2 == 1:
        x += 4
    return x

print(just_in_case()) # 19

def case_in_point():
    x = 10
    if x > 0:
        return x + 2
    if x &lt; 13:
        return x + 3
    if x % 2 == 1:
        return x + 4
    return x

print(case_in_point()) # 12

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="q3-if-function-vs-statement" tabindex="-1"><a class="header-anchor" href="#q3-if-function-vs-statement" aria-hidden="true">#</a> Q3: If Function vs Statement</h2>
<p>Now that we've learned about how if statements work, let's see if we can write a function that behaves the same as an if statement.</p>
<div class="custom-container info"><p class="custom-container-title">Hint</p>
<p>Hint: If you are having a hard time identifying how with_if_statement and with_if_function would differ in behavior, consider the rules of evaluation for if statements and call expressions.</p>
</div>
<CodeTabs :data='[{"title":"Question"},{"title":"Answer"}]' tab-id="Q3">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def if_function(condition, true_result, false_result):
    """Return true_result if condition is a true value, and
    false_result otherwise.

    >>> if_function(True, 2, 3)
    2
    >>> if_function(False, 2, 3)
    3
    >>> if_function(3==2, 'equal', 'not equal')
    'not equal'
    >>> if_function(3>2, 'bigger', 'smaller')
    'bigger'
    """
    if condition:
        return true_result
    else:
        return false_result

def with_if_statement():
    """
    >>> result = with_if_statement()
    61A
    >>> print(result)
    None
    """
    if cond():
        return true_func()
    else:
        return false_func()

def with_if_function():
    """
    >>> result = with_if_function()
    Welcome to
    61A
    >>> print(result)
    None
    """
    return if_function(cond(), true_func(), false_func())

def cond():
    "*** YOUR CODE HERE ***"

def true_func():
    "*** YOUR CODE HERE ***"

def false_func():
    "*** YOUR CODE HERE ***"

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># Q3
def if_function(condition, true_result, false_result):
    """Return true_result if condition is a true value, and
    false_result otherwise.

    >>> if_function(True, 2, 3)
    2
    >>> if_function(False, 2, 3)
    3
    >>> if_function(3==2, 'equal', 'not equal')
    'not equal'
    >>> if_function(3>2, 'bigger', 'smaller')
    'bigger'
    """
    if condition:
        return true_result
    else:
        return false_result

def with_if_statement():
    """
    >>> result = with_if_statement()
    61A
    >>> print(result)
    None
    """
    if cond():
        return true_func()
    else:
        return false_func()

def with_if_function():
    """
    >>> result = with_if_function()
    Welcome to
    61A
    >>> print(result)
    None
    """
    return if_function(cond(), true_func(), false_func())

def cond():
    "*** YOUR CODE HERE ***"
    return 0

def true_func():
    "*** YOUR CODE HERE ***"
    print('Welcome to')

def false_func():
    "*** YOUR CODE HERE ***"
    print('61A')

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="q4-square-so-slow" tabindex="-1"><a class="header-anchor" href="#q4-square-so-slow" aria-hidden="true">#</a> Q4: Square So Slow</h2>
<p>What is the result of evaluating the following code?</p>
<CodeTabs :data='[{"title":"Question"},{"title":"Answer"}]' tab-id="Q4">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def square(x):
    print("here!")
    return x * x

def so_slow(num):
    x = num
    while x > 0:
        x=x+1
    return x / 0

square(so_slow(5))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># Q4
def square(x):
    print("here!")
    return x * x

def so_slow(num):
    x = num
    while x > 0:
        x=x+1
    return x / 0

square(so_slow(5)) # 死循环

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="q5-is-prime" tabindex="-1"><a class="header-anchor" href="#q5-is-prime" aria-hidden="true">#</a> Q5: Is Prime?</h2>
<p>Write a function that returns True if a positive integer n is a prime number and False otherwise.</p>
<p>A prime number n is a number that is not divisible by any numbers other than 1 and n itself. For example, 13 is prime, since it is only divisible by 1 and 13, but 14 is not, since it is divisible by 1, 2, 7, and 14.</p>
<div class="custom-container info"><p class="custom-container-title">Hint</p>
<p>Hint: Use the % operator: x % y returns the remainder of x when divided by y.</p>
</div>
<CodeTabs :data='[{"title":"Question"},{"title":"Answer"}]' tab-id="Q5">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def is_prime(n):
    """
    >>> is_prime(10)
    False
    >>> is_prime(7)
    True
    """
    "*** YOUR CODE HERE ***"

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def is_prime(n):
    """
    >>> is_prime(10)
    False
    >>> is_prime(7)
    True
    """
    "*** YOUR CODE HERE ***"
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="q6-fizzbuzz" tabindex="-1"><a class="header-anchor" href="#q6-fizzbuzz" aria-hidden="true">#</a> Q6: Fizzbuzz</h2>
<p>Implement the fizzbuzz sequence, which prints out a single statement for each number from 1 to n. For a number i,</p>
<p>If i is divisible by 3 only, then we print &quot;fizz&quot;.
If i is divisible by 5 only, then we print &quot;buzz&quot;.
If i is divisible by both 3 and 5, then we print &quot;fizzbuzz&quot;.
Otherwise, we print the number i by itself.
Implement fizzbuzz(n) here:</p>
<CodeTabs :data='[{"title":"Question"},{"title":"Answer"}]' tab-id="Q6">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def fizzbuzz(n):
    """
    >>> result = fizzbuzz(16)
    1
    2
    fizz
    4
    buzz
    fizz
    7
    8
    fizz
    buzz
    11
    fizz
    13
    14
    fizzbuzz
    16
    >>> result == None
    True
    """
    "*** YOUR CODE HERE ***"

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def fizzbuzz(n):
    """
    >>> result = fizzbuzz(16)
    1
    2
    fizz
    4
    buzz
    fizz
    7
    8
    fizz
    buzz
    11
    fizz
    13
    14
    fizzbuzz
    16
    >>> result == None
    True
    """
    "*** YOUR CODE HERE ***"
    for i in range(1, n+1):
        if i % 3 == 0 and i % 5 == 0:
            print("fizzbuzz")
        elif i % 3 == 0:
            print("fizz")
        elif i % 5 == 0:
            print("buzz")
        else:
            print(i)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="q7-assignment-diagram" tabindex="-1"><a class="header-anchor" href="#q7-assignment-diagram" aria-hidden="true">#</a> Q7: Assignment Diagram</h2>
<p>Alfonso will only wear a jacket outside if it is below 60 degrees or it is raining.</p>
<p>Write a function that takes in the current temperature and a boolean value telling if it is raining. This function should return True if Alfonso will wear a jacket and False otherwise.</p>
<p>First, try solving this problem using an if statement.</p>
<CodeTabs :data='[{"title":"Question"}]' tab-id="Q7">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>x = 11 % 4
y = x
x **= 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p><img src="@source/posts/source/D1Q7.png" alt="Alt"></p>
<h2 id="q8-def-diagram" tabindex="-1"><a class="header-anchor" href="#q8-def-diagram" aria-hidden="true">#</a> Q8: def Diagram</h2>
<p>Use these rules for defining functions and the rules for assignment statements to draw a diagram for the code below.</p>
<CodeTabs :data='[{"title":"Question"}]' tab-id="Q8">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def double(x):
    return x * 2

def triple(x):
    return x * 3

hat = double
double = triple
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p><img src="@source/posts/source/D1Q8.png" alt="Alt"></p>
<h2 id="q9-call-diagram" tabindex="-1"><a class="header-anchor" href="#q9-call-diagram" aria-hidden="true">#</a> Q9: Call Diagram</h2>
<p>Let’s put it all together! Draw an environment diagram for the following code. You may not have to use all of the blanks provided to you.</p>
<CodeTabs :data='[{"title":"Question"}]' tab-id="Q1">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def double(x):
    return x * 2

hmmm = double
wow = double(3)
hmmm(wow)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p><img src="@source/posts/source/D1Q9.png" alt="Alt"></p>
<h2 id="q10-nested-calls-diagrams" tabindex="-1"><a class="header-anchor" href="#q10-nested-calls-diagrams" aria-hidden="true">#</a> Q10: Nested Calls Diagrams</h2>
<p>Draw the environment diagram that results from executing the code below. You may not need to use all of the frames and blanks provided to you.</p>
<CodeTabs :data='[{"title":"Question"}]' tab-id="Q10">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def f(x):
    return x

def g(x, y):
    if x(y):
        return not y
    return y

x = 3
x = g(f, x)
f = g(f, 0)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p><img src="@source/posts/source/D1Q10.png" alt="Alt"></p>
</div></template>
