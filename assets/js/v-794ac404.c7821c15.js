"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[9951],{6671:(e,n,i)=>{i.r(n),i.d(n,{data:()=>s});const s=JSON.parse('{"key":"v-794ac404","path":"/posts/HW/HW01.html","title":"CS61a HW 1","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2022-01-01T00:00:00.000Z","category":["CS61a"],"tag":["Disc"],"summary":"--- icon: edit date: 2022-01-01 category:\\rCS61a; tag:\\rDisc; --- CS61a HW 1 Variables & Functions, Contro Link to this section: Q2: A Plus Abs B Fill in the blanks in the following ","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/posts/HW/HW01.html"}],["meta",{"property":"og:site_name","content":"一个普通的网站"}],["meta",{"property":"og:title","content":"CS61a HW 1"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-01T06:41:12.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:tag","content":"Disc"}],["meta",{"property":"article:published_time","content":"2022-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-08-01T06:41:12.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Q2: A Plus Abs B","slug":"q2-a-plus-abs-b","children":[]},{"level":2,"title":"Q3: Two of Three","slug":"q3-two-of-three","children":[]},{"level":2,"title":"Q4: Largest Factor","slug":"q4-largest-factor","children":[]},{"level":2,"title":"Q5: If Function vs Statement","slug":"q5-if-function-vs-statement","children":[]},{"level":2,"title":"Q6: Hailstone","slug":"q6-hailstone","children":[]}],"git":{"createdTime":1659336072000,"updatedTime":1659336072000,"contributors":[{"name":"LiPancake","email":"370981991@qq.com","commits":1}]},"readingTime":{"minutes":3.83,"words":1148},"filePathRelative":"posts/HW/HW01.md","localizedDate":"2022年1月1日"}')},2482:(e,n,i)=>{i.r(n),i.d(n,{default:()=>z});var s=i(6252);const l=(0,s._)("h1",{id:"cs61a-hw-1",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#cs61a-hw-1","aria-hidden":"true"},"#"),(0,s.Uk)(" CS61a HW 1")],-1),a=(0,s._)("h1",{id:"variables-functions-contro",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#variables-functions-contro","aria-hidden":"true"},"#"),(0,s.Uk)(" Variables & Functions, Contro")],-1),t=(0,s.Uk)("Link to this section: "),r={href:"https://inst.eecs.berkeley.edu/~cs61a/fa20/hw/hw01/",target:"_blank",rel:"noopener noreferrer"},u=(0,s.Uk)("https://inst.eecs.berkeley.edu/~cs61a/fa20/hw/hw01/"),c=(0,s._)("h2",{id:"q2-a-plus-abs-b",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#q2-a-plus-abs-b","aria-hidden":"true"},"#"),(0,s.Uk)(" Q2: A Plus Abs B")],-1),d=(0,s._)("p",null,"Fill in the blanks in the following function for adding a to the absolute value of b, without calling abs. You may not modify any of the provided code other than the two blanks.",-1),_=(0,s._)("div",{class:"custom-container info"},[(0,s._)("p",{class:"custom-container-title"},"Hint")],-1),m=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'from operator import add, sub\n\ndef a_plus_abs_b(a, b):\n    """Return a+abs(b), but without calling abs.\n\n    >>> a_plus_abs_b(2, 3)\n    5\n    >>> a_plus_abs_b(2, -3)\n    5\n    >>> # a check that you didn\'t change the return statement!\n    >>> import inspect, re\n    >>> re.findall(r\'^\\s*(return .*)\', inspect.getsource(a_plus_abs_b), re.M)\n    [\'return f(a, b)\']\n    """\n    if b < 0:\n        f = _____\n    else:\n        f = _____\n    return f(a, b)\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),b=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'from operator import add, sub\n\ndef a_plus_abs_b(a, b):\n    """Return a+abs(b), but without calling abs.\n\n    >>> a_plus_abs_b(2, 3)\n    5\n    >>> a_plus_abs_b(2, -3)\n    5\n    >>> # a check that you didn\'t change the return statement!\n    >>> import inspect, re\n    >>> re.findall(r\'^\\s*(return .*)\', inspect.getsource(a_plus_abs_b), re.M)\n    [\'return f(a, b)\']\n    """\n    if b < 0:\n        f = sub\n    else:\n        f = add\n    return f(a, b)\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),o=(0,s._)("h2",{id:"q3-two-of-three",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#q3-two-of-three","aria-hidden":"true"},"#"),(0,s.Uk)(" Q3: Two of Three")],-1),v=(0,s._)("p",null,"Write a function that takes three positive numbers as arguments and returns the sum of the squares of the two smallest numbers. Use only a single line for the body of the function.",-1),h=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'def two_of_three(x, y, z):\n    """Return a*a + b*b, where a and b are the two smallest members of the\n    positive numbers x, y, and z.\n\n    >>> two_of_three(1, 2, 3)\n    5\n    >>> two_of_three(5, 3, 1)\n    10\n    >>> two_of_three(10, 2, 8)\n    68\n    >>> two_of_three(5, 5, 5)\n    50\n    >>> # check that your code consists of nothing but an expression (this docstring)\n    >>> # a return statement\n    >>> import inspect, ast\n    >>> [type(x).__name__ for x in ast.parse(inspect.getsource(two_of_three)).body[0].body]\n    [\'Expr\', \'Return\']\n    """\n    return _____\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),f=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'def two_of_three(x, y, z):\n    """Return a*a + b*b, where a and b are the two smallest members of the\n    positive numbers x, y, and z.\n\n    >>> two_of_three(1, 2, 3)\n    5\n    >>> two_of_three(5, 3, 1)\n    10\n    >>> two_of_three(10, 2, 8)\n    68\n    >>> two_of_three(5, 5, 5)\n    50\n    >>> # check that your code consists of nothing but an expression (this docstring)\n    >>> # a return statement\n    >>> import inspect, ast\n    >>> [type(x).__name__ for x in ast.parse(inspect.getsource(two_of_three)).body[0].body]\n    [\'Expr\', \'Return\']\n    """\n    return x*x + y*y + z*z - pow(max(x, y, z), 2)\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),p=(0,s._)("h2",{id:"q4-largest-factor",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#q4-largest-factor","aria-hidden":"true"},"#"),(0,s.Uk)(" Q4: Largest Factor")],-1),g=(0,s._)("p",null,"Write a function that takes an integer n that is greater than 1 and returns the largest integer that is smaller than n and evenly divides n.",-1),w=(0,s._)("div",{class:"custom-container info"},[(0,s._)("p",{class:"custom-container-title"},"Hint"),(0,s._)("p",null,'Hint: To check if b evenly divides a, you can use the expression a % b == 0, which can be read as, "the remainder of dividing a by b is 0."')],-1),x=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'def largest_factor(n):\n    """Return the largest factor of n that is smaller than n.\n\n    >>> largest_factor(15) # factors are 1, 3, 5\n    5\n    >>> largest_factor(80) # factors are 1, 2, 4, 5, 8, 10, 16, 20, 40\n    40\n    >>> largest_factor(13) # factor is 1 since 13 is prime\n    1\n    """\n    "*** YOUR CODE HERE ***"\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),y=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'def largest_factor(n):\n    """Return the largest factor of n that is smaller than n.\n\n    >>> largest_factor(15) # factors are 1, 3, 5\n    5\n    >>> largest_factor(80) # factors are 1, 2, 4, 5, 8, 10, 16, 20, 40\n    40\n    >>> largest_factor(13) # factor is 1 since 13 is prime\n    1\n    """\n    "*** YOUR CODE HERE ***"\n    i = 0\n    list = []\n    while i <= n/2:\n        i += 1\n        if n % i == 0:\n            list.append(i)\n    result = max(list)\n    return result\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),k=(0,s._)("h2",{id:"q5-if-function-vs-statement",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#q5-if-function-vs-statement","aria-hidden":"true"},"#"),(0,s.Uk)(" Q5: If Function vs Statement")],-1),E=(0,s._)("p",null,"Let's try to write a function that does the same thing as an if statement.",-1),R=(0,s._)("div",{class:"custom-container info"},[(0,s._)("p",{class:"custom-container-title"},"Hint"),(0,s._)("p",null,"Hint: If you are having a hard time identifying how an if statement and if_function differ, consider the rules of evaluation for if statements and call expressions.")],-1),H=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'def if_function(condition, true_result, false_result):\n    """Return true_result if condition is a true value, and\n    false_result otherwise.\n\n    >>> if_function(True, 2, 3)\n    2\n    >>> if_function(False, 2, 3)\n    3\n    >>> if_function(3==2, 3+2, 3-2)\n    1\n    >>> if_function(3>2, 3+2, 3-2)\n    5\n    """\n    if condition:\n        return true_result\n    else:\n        return false_result\n\ndef with_if_statement():\n    """\n    >>> result = with_if_statement()\n    47\n    >>> print(result)\n    None\n    """\n    if cond():\n        return true_func()\n    else:\n        return false_func()\n\ndef with_if_function():\n    """\n    >>> result = with_if_function()\n    42\n    47\n    >>> print(result)\n    None\n    """\n    return if_function(cond(), true_func(), false_func())\n\ndef cond():\n    "*** YOUR CODE HERE ***"\n\ndef true_func():\n    "*** YOUR CODE HERE ***"\n\ndef false_func():\n    "*** YOUR CODE HERE ***"\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),q=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'def if_function(condition, true_result, false_result):\n    """Return true_result if condition is a true value, and\n    false_result otherwise.\n\n    >>> if_function(True, 2, 3)\n    2\n    >>> if_function(False, 2, 3)\n    3\n    >>> if_function(3==2, 3+2, 3-2)\n    1\n    >>> if_function(3>2, 3+2, 3-2)\n    5\n    """\n    if condition:\n        return true_result\n    else:\n        return false_result\n\n\ndef with_if_statement():\n    """\n    >>> result = with_if_statement()\n    47\n    >>> print(result)\n    None\n    """\n    if cond():\n        return true_func()\n    else:\n        return false_func()\n\ndef with_if_function():\n    """\n    >>> result = with_if_function()\n    42\n    47\n    >>> print(result)\n    None\n    """\n    return if_function(cond(), true_func(), false_func())\n\ndef cond():\n    "*** YOUR CODE HERE ***"\n    return False\n\ndef true_func():\n    "*** YOUR CODE HERE ***"\n    print(42)\n\ndef false_func():\n    "*** YOUR CODE HERE ***"\n    print(47)\n\n\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),C=(0,s._)("h2",{id:"q6-hailstone",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#q6-hailstone","aria-hidden":"true"},"#"),(0,s.Uk)(" Q6: Hailstone")],-1),A=(0,s._)("p",null,"Douglas Hofstadter's Pulitzer-prize-winning book, Gödel, Escher, Bach, poses the following mathematical puzzle.",-1),O=(0,s._)("p",null,"Pick a positive integer n as the start. If n is even, divide it by 2. If n is odd, multiply it by 3 and add 1. Continue this process until n is 1. The number n will travel up and down but eventually end at 1 (at least for all numbers that have ever been tried -- nobody has ever proved that the sequence will terminate). Analogously, a hailstone travels up and down in the atmosphere before eventually landing on earth.",-1),Q=(0,s._)("div",{class:"custom-container info"},[(0,s._)("p",{class:"custom-container-title"},"Hint"),(0,s._)("p",null,"Breaking News (or at least the closest thing to that in math). There was a recent development in the hailstone conjecture last year that shows that almost all numbers will eventually get to 1 if you repeat this process. This isn't a complete proof but a major breakthrough.")],-1),U=(0,s._)("p",null,"This sequence of values of n is often called a Hailstone sequence. Write a function that takes a single argument with formal parameter name n, prints out the hailstone sequence starting at n, and returns the number of steps in the sequence:",-1),T=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'def hailstone(n):\n    """Print the hailstone sequence starting at n and return its\n    length.\n\n    >>> a = hailstone(10)\n    10\n    5\n    16\n    8\n    4\n    2\n    1\n    >>> a\n    7\n    """\n    "*** YOUR CODE HERE ***"\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),W=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'def hailstone(n):\n    """Print the hailstone sequence starting at n and return its\n    length.\n\n    >>> a = hailstone(10)\n    10\n    5\n    16\n    8\n    4\n    2\n    1\n    >>> a\n    7\n    """\n    "*** YOUR CODE HERE ***"\n    print(n)\n    times = 1\n    while n != 1:\n        if(n % 2 == 0):\n            n = n/2\n        else:\n            n = n*3 + 1\n        print(int(n))\n        times += 1\n    return times\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),D={},z=(0,i(3744).Z)(D,[["render",function(e,n){const i=(0,s.up)("ExternalLinkIcon"),D=(0,s.up)("CodeTabs");return(0,s.wg)(),(0,s.iD)("div",null,[l,a,(0,s._)("p",null,[t,(0,s._)("a",r,[u,(0,s.Wm)(i)])]),c,d,_,(0,s.Wm)(D,{data:[{title:"Question"},{title:"Answer"}],"tab-id":"Q2"},{tab0:(0,s.w5)((({title:e,value:n,isActive:i})=>[m])),tab1:(0,s.w5)((({title:e,value:n,isActive:i})=>[b])),_:1}),o,v,(0,s.Wm)(D,{data:[{title:"Question"},{title:"Answer"}],"tab-id":"Q3"},{tab0:(0,s.w5)((({title:e,value:n,isActive:i})=>[h])),tab1:(0,s.w5)((({title:e,value:n,isActive:i})=>[f])),_:1}),p,g,w,(0,s.Wm)(D,{data:[{title:"Question"},{title:"Answer"}],"tab-id":"Q4"},{tab0:(0,s.w5)((({title:e,value:n,isActive:i})=>[x])),tab1:(0,s.w5)((({title:e,value:n,isActive:i})=>[y])),_:1}),k,E,R,(0,s.Wm)(D,{data:[{title:"Question"},{title:"Answer"}],"tab-id":"Q5"},{tab0:(0,s.w5)((({title:e,value:n,isActive:i})=>[H])),tab1:(0,s.w5)((({title:e,value:n,isActive:i})=>[q])),_:1}),C,A,O,Q,U,(0,s.Wm)(D,{data:[{title:"Question"},{title:"Answer"}],"tab-id":"Q6"},{tab0:(0,s.w5)((({title:e,value:n,isActive:i})=>[T])),tab1:(0,s.w5)((({title:e,value:n,isActive:i})=>[W])),_:1})])}]])}}]);