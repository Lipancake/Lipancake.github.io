"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[6303],{9310:(e,n,i)=>{i.r(n),i.d(n,{data:()=>s});const s=JSON.parse('{"key":"v-fa697746","path":"/posts/Disc/Disc02.html","title":"CS61a DISC 2","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2022-01-01T00:00:00.000Z","category":["CS61a"],"tag":["Disc"],"order":2,"summary":"--- icon: edit date: 2022-01-01 category:\\rCS61a; tag:\\rDisc; order: 2 --- CS61a DISC 2 Higher-Order Functions, Self Reference Link to this section: Q1: Make Keeper Write a function ","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/posts/Disc/Disc02.html"}],["meta",{"property":"og:site_name","content":"一个普通的网站"}],["meta",{"property":"og:title","content":"CS61a DISC 2"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-01T06:41:12.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:tag","content":"Disc"}],["meta",{"property":"article:published_time","content":"2022-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-08-01T06:41:12.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Q1: Make Keeper","slug":"q1-make-keeper","children":[]},{"level":2,"title":"Q2: Curry2 Diagram","slug":"q2-curry2-diagram","children":[]},{"level":2,"title":"Q3: Curry2 Lambda","slug":"q3-curry2-lambda","children":[]},{"level":2,"title":"Q4: Make Keeper Redux","slug":"q4-make-keeper-redux","children":[]},{"level":2,"title":"Q5: Print N","slug":"q5-print-n","children":[]},{"level":2,"title":"Q6: HOF Diagram Practice","slug":"q6-hof-diagram-practice","children":[]},{"level":2,"title":"Q7: YY Diagram","slug":"q7-yy-diagram","children":[]},{"level":2,"title":"Q8: Match Maker","slug":"q8-match-maker","children":[]},{"level":2,"title":"Q9: Three Memory","slug":"q9-three-memory","children":[]},{"level":2,"title":"Q10: Natural Chain","slug":"q10-natural-chain","children":[]}],"git":{"createdTime":1659250705000,"updatedTime":1659336072000,"contributors":[{"name":"LiPancake","email":"370981991@qq.com","commits":2}]},"readingTime":{"minutes":6.55,"words":1965},"filePathRelative":"posts/Disc/Disc02.md","localizedDate":"2022年1月1日"}')},9258:(e,n,i)=>{i.r(n),i.d(n,{default:()=>ue});var s=i(6252);const l=i.p+"assets/img/D2Q2.31363f49.jpg",a=(0,s._)("h1",{id:"cs61a-disc-2",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#cs61a-disc-2","aria-hidden":"true"},"#"),(0,s.Uk)(" CS61a DISC 2")],-1),r=(0,s._)("h1",{id:"higher-order-functions-self-reference",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#higher-order-functions-self-reference","aria-hidden":"true"},"#"),(0,s.Uk)(" Higher-Order Functions, Self Reference")],-1),_=(0,s.Uk)("Link to this section: "),t={href:"https://inst.eecs.berkeley.edu/~cs61a/fa21/disc/disc02/",target:"_blank",rel:"noopener noreferrer"},d=(0,s.Uk)("https://inst.eecs.berkeley.edu/~cs61a/fa21/disc/disc02/"),u=(0,s._)("h2",{id:"q1-make-keeper",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#q1-make-keeper","aria-hidden":"true"},"#"),(0,s.Uk)(" Q1: Make Keeper")],-1),c=(0,s._)("p",null,"Write a function that takes in a number n and returns a function that can take in a single parameter cond. When we pass in some condition function cond into this returned function, it will print out numbers from 1 to n where calling cond on that number returns True.",-1),m=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'def keep_ints(cond, n):\n    """\n    Print out all integers 1..i..n where cond(i) is true\n    >>> def is_even(x):\n    ... # Even numbers have remainder 0 when divided by 2.\n    ...     return x % 2 == 0\n    >>> keep_ints(is_even, 5)\n    2\n    4\n    """\n    "*** YOUR CODE HERE ***"\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),b=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'def keep_ints(cond, n):\n    """\n    Print out all integers 1..i..n where cond(i) is true\n    >>> def is_even(x):\n    ... # Even numbers have remainder 0 when divided by 2.\n    ...     return x % 2 == 0\n    >>> keep_ints(is_even, 5)\n    2\n    4\n    """\n    "*** YOUR CODE HERE ***"\n    i = 1\n    while i < n:\n        if cond(i):\n            print(i)\n        i += 1\n\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),o=(0,s._)("h2",{id:"q2-curry2-diagram",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#q2-curry2-diagram","aria-hidden":"true"},"#"),(0,s.Uk)(" Q2: Curry2 Diagram")],-1),v=(0,s._)("p",null,"Draw the environment diagram that results from executing the code below.",-1),h=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,"def curry2(h):\n    def f(x):\n        def g(y):\n            return h(x, y)\n        return g\n    return f\n\nmake_adder = curry2(lambda x, y: x + y)\nadd_three = make_adder(3)\nadd_four = make_adder(4)\nfive = add_three(2)\n\n")]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),f=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,"Figure below\n\n")]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),p=(0,s._)("p",null,[(0,s._)("img",{src:l,alt:"Alt"})],-1),g=(0,s._)("h2",{id:"q3-curry2-lambda",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#q3-curry2-lambda","aria-hidden":"true"},"#"),(0,s.Uk)(" Q3: Curry2 Lambda")],-1),x=(0,s._)("p",null,"Write curry2 as a lambda function.",-1),k=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'"*** YOUR CODE HERE ***"\n\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),y=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'"*** YOUR CODE HERE ***"\nreturn lambda x: lambda y: h(x, y)\n\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),w=(0,s._)("h2",{id:"q4-make-keeper-redux",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#q4-make-keeper-redux","aria-hidden":"true"},"#"),(0,s.Uk)(" Q4: Make Keeper Redux")],-1),Q=(0,s._)("p",null,"In this question, we will build off of the make_keeper function from in Question 1.",-1),q=(0,s._)("p",null,"The function make_keeper_redux is similar to make_keeper, but now the function returned by make_keeper_redux should be self-referential—i.e., the returned function should return a function with the same behavior as make_keeper_redux.",-1),A=(0,s._)("p",null,"Feel free to paste and modify your code for make_keeper below.",-1),N=(0,s._)("div",{class:"custom-container info"},[(0,s._)("p",{class:"custom-container-title"},"Hint"),(0,s._)("p",null,"Hint: you only need to add ==one line== to your make_keeper solution. What is currently missing from make_keeper_redux?")],-1),T=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'def make_keeper_redux(n):\n    """Returns a function. This function takes one parameter <cond>\n    and prints out all integers 1..i..n where calling cond(i)\n    returns True. The returned function returns another function\n    with the exact same behavior.\n\n    >>> def multiple_of_4(x):\n    ...     return x % 4 == 0\n    >>> def ends_with_1(x):\n    ...     return x % 10 == 1\n    >>> k = make_keeper_redux(11)(multiple_of_4)\n    4\n    8\n    >>> k = k(ends_with_1)\n    1\n    11\n    >>> k\n    <function do_keep>\n    """\n    # Paste your code for make_keeper here!\n\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),D=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'def make_keeper_redux(n):\n    """Returns a function. This function takes one parameter <cond>\n    and prints out all integers 1..i..n where calling cond(i)\n    returns True. The returned function returns another function\n    with the exact same behavior.\n\n    >>> def multiple_of_4(x):\n    ...     return x % 4 == 0\n    >>> def ends_with_1(x):\n    ...     return x % 10 == 1\n    >>> k = make_keeper_redux(11)(multiple_of_4)\n    4\n    8\n    >>> k = k(ends_with_1)\n    1\n    11\n    >>> k\n    <function do_keep>\n    """\n    # Paste your code for make_keeper here!\n    def cond(f):\n        for i in range(1, n + 1):\n            if(f(i)):\n                print(i)\n        return cond\n    return cond\n\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),C=(0,s._)("h2",{id:"q5-print-n",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#q5-print-n","aria-hidden":"true"},"#"),(0,s.Uk)(" Q5: Print N")],-1),F=(0,s._)("p",null,"Draw the environment diagram that results from executing the code below.",-1),U=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'def print_n(n):\n    """\n    >>> f = print_n(2)\n    >>> f = f("hi")\n    hi\n    >>> f = f("hello")\n    hello\n    >>> f = f("bye")\n    done\n    >>> g = print_n(1)\n    >>> g("first")("second")("third")\n    first\n    done\n    done\n    <function inner_print>\n    """\n    def inner_print(x):\n        if ________________________\n            print("done")\n        else:\n            print(x)\n        return ____________________\n    return ________________________\n\n\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),E=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'def print_n(n):\n    """\n    >>> f = print_n(2)\n    >>> f = f("hi")\n    hi\n    >>> f = f("hello")\n    hello\n    >>> f = f("bye")\n    done\n    >>> g = print_n(1)\n    >>> g("first")("second")("third")\n    first\n    done\n    done\n    <function inner_print>\n    """\n    def inner_print(x):\n        if n <= 0:\n            print("done")\n        else:\n            print(x)\n        return print_n(n-1)\n    return inner_print\n\n\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),R=(0,s._)("h2",{id:"q6-hof-diagram-practice",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#q6-hof-diagram-practice","aria-hidden":"true"},"#"),(0,s.Uk)(" Q6: HOF Diagram Practice")],-1),S=(0,s._)("p",null,"Draw the environment diagram that results from executing the code below.",-1),W=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,"n = 7\n\ndef f(x):\n    n = 8\n    return x + 1\n\ndef g(x):\n    n = 9\n    def h():\n        return x + 1\n    return h\n\ndef f(f, x):\n    return f(x + n)\n\nf = f(g, n)\ng = (lambda y: y())(f)\n\n")]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),O=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,"自己跑一下pytutor吧\nhttps://pythontutor.com/composingprograms.html#mode=display\n\n")]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),Y=(0,s._)("h2",{id:"q7-yy-diagram",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#q7-yy-diagram","aria-hidden":"true"},"#"),(0,s.Uk)(" Q7: YY Diagram")],-1),H=(0,s._)("p",null,"Draw the environment diagram that results from executing the code below.",-1),I=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'y = "y"\nh = y\ndef y(y):\n    h = "h"\n    if y == h:\n        return y + "i"\n    y = lambda y: y(h)\n    return lambda h: y(h)\ny = y(y)(y)\n\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),M=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,"同上\n\n")]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),P=(0,s._)("h2",{id:"q8-match-maker",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#q8-match-maker","aria-hidden":"true"},"#"),(0,s.Uk)(" Q8: Match Maker")],-1),z=(0,s._)("p",null,"Implement match_k, which takes in an integer k and returns a function that takes in a variable x and returns True if all the digits in x that are k apart are the same.",-1),L=(0,s._)("p",null,"For example, match_k(2) returns a one argument function that takes in x and checks if digits that are 2 away in x are the same.",-1),K=(0,s._)("p",null,"match_k(2)(1010) has the value of x = 1010 and digits 1, 0, 1, 0 going from left to right. 1 == 1 and 0 == 0, so the match_k(2)(1010) results in True.",-1),Z=(0,s._)("p",null,"match_k(2)(2010) has the value of x = 2010 and digits 2, 0, 1, 0 going from left to right. 2 != 1 and 0 == 0, so the match_k(2)(2010) results in False.",-1),B=(0,s._)("p",null,"Important: You may not use strings or indexing for this problem. You do not have to use all the lines, one staff solution does not use the line directly above the while loop.",-1),j=(0,s._)("div",{class:"custom-container info"},[(0,s._)("p",{class:"custom-container-title"},"Hint"),(0,s._)("p",null,"Hint: Floor dividing by powers of 10 gets rid of the rightmost digits.")],-1),J=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'def match_k(k):\n    """ Return a function that checks if digits k apart match\n\n    >>> match_k(2)(1010)\n    True\n    >>> match_k(2)(2010)\n    False\n    >>> match_k(1)(1010)\n    False\n    >>> match_k(1)(1)\n    True\n    >>> match_k(1)(2111111111111111)\n    False\n    >>> match_k(3)(123123)\n    True\n    >>> match_k(2)(123123)\n    False\n    """\n    ____________________________\n        ____________________________\n        while ____________________________:\n            if ____________________________:\n                return ____________________________\n            ____________________________\n        ____________________________\n    ____________________________\n\n\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),G=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'def match_k(k):\n    """ Return a function that checks if digits k apart match\n\n    >>> match_k(2)(1010)\n    True\n    >>> match_k(2)(2010)\n    False\n    >>> match_k(1)(1010)\n    False\n    >>> match_k(1)(1)\n    True\n    >>> match_k(1)(2111111111111111)\n    False\n    >>> match_k(3)(123123)\n    True\n    >>> match_k(2)(123123)\n    False\n    """\n    def cal(x):\n        i = x % 10**k\n        while x > 0:\n            if i != x % 10**k:\n                return False\n            x = x // 10**k\n        return True\n    return cal\n\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),V=(0,s._)("h2",{id:"q9-three-memory",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#q9-three-memory","aria-hidden":"true"},"#"),(0,s.Uk)(" Q9: Three Memory")],-1),X=(0,s._)("p",null,'A k-memory function takes in a single input, prints whether that input was seen exactly k function calls ago, and returns a new k-memory function. For example, a 2-memory function will display "Found" if its input was seen exactly two function calls ago, and otherwise will display "Not found".',-1),$=(0,s._)("p",null,'Implement three_memory, which is a 3-memory function. You may assume that the value None is never given as an input to your function, and that in the first two function calls the function will display "Not found" for any valid inputs given.',-1),ee=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,"def three_memory(n):\n    \"\"\"\n    >>> f = three_memory('first')\n    >>> f = f('first')\n    Not found\n    >>> f = f('second')\n    Not found\n    >>> f = f('third')\n    Not found\n    >>> f = f('second') # 'second' was not input three calls ago\n    Not found\n    >>> f = f('second') # 'second' was input three calls ago\n    Found\n    >>> f = f('third') # 'third' was input three calls ago\n    Found\n    >>> f = f('third') # 'third' was not input three calls ago\n    Not found\n    \"\"\"\n    def f(x, y, z):\n        def g(i):\n            if ____________________________:\n                ____________________________\n            else:\n                ____________________________\n            return ____________________________\n        return ____________________________\n    return f(None, None, n)\n\n\n")]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),ne=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,"def three_memory(n):\n    \"\"\"\n    >>> f = three_memory('first')\n    >>> f = f('first')\n    Not found\n    >>> f = f('second')\n    Not found\n    >>> f = f('third')\n    Not found\n    >>> f = f('second') # 'second' was not input three calls ago\n    Not found\n    >>> f = f('second') # 'second' was input three calls ago\n    Found\n    >>> f = f('third') # 'third' was input three calls ago\n    Found\n    >>> f = f('third') # 'third' was not input three calls ago\n    Not found\n    \"\"\"\n    def f(x, y, z):\n        def g(i):\n            if i == x:\n                print('Found')\n            else:\n                print('Not found')\n            return f(y, z, i)\n        return g\n    return f(None, None, n)\n\n\n")]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),ie=(0,s._)("h2",{id:"q10-natural-chain",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#q10-natural-chain","aria-hidden":"true"},"#"),(0,s.Uk)(" Q10: Natural Chain")],-1),se=(0,s._)("p",null,"For this problem, a chain_function is a higher order function that repeatedly accepts natural numbers (positive integers). The first number that is passed into the function that chain_function returns initializes a natural chain, which we define as a consecutive sequence of increasing natural numbers (i.e., 1, 2, 3). A natural chain breaks when the next input differs from the expected value of the sequence. For example, the sequence (1, 2, 3, 5) is broken because it is missing a 4.",-1),le=(0,s._)("p",null,"Implement the chain_function so that it prints out the value of the expected number at each chain break as well as the number of chain breaks seen so far, including the current chain break. Each time the chain breaks, the chain restarts at the most recently input number.",-1),ae=(0,s._)("p",null,"For example, the sequence (1, 2, 3, 5, 6) would only print 4 and 1. We print 4 because there is a missing 4, and we print 1 because the 4 is the first number to break the chain. The 5 broke the chain and restarted the chain, so from here on out we expect to see numbers increasingly linearly from 5. See the doctests for more examples. You may assume that the higher-order function is never given numbers ≤ 0.",-1),re=(0,s._)("div",{class:"custom-container info"},[(0,s._)("p",{class:"custom-container-title"},"Important"),(0,s._)("p",null,"Important: For this problem, the starter code is a suggestion. You are welcome to add/delete/modify the starter code template, or even write your own solution that doesn’t use the starter code at all.")],-1),_e=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'def chain_function():\n    """\n    >>> tester = chain_function()\n    >>> x = tester(1)(2)(4)(5) # Expected 3 but got 4, so print 3. 1st chain break, so print 1 too.\n    3 1\n    >>> x = x(2) # 6 should\'ve followed 5 from above, so print 6. 2nd chain break, so print 2\n    6 2\n    >>> x = x(8) # The chain restarted at 2 from the previous line, but we got 8. 3rd chain break.\n    3 3\n    >>> x = x(3)(4)(5) # Chain restarted at 8 in the previous line, but we got 3 instead. 4th break\n    9 4\n    >>> x = x(9) # Similar logic to the above line\n    6 5\n    >>> x = x(10) # Nothing is printed because 10 follows 9.\n    >>> y = tester(4)(5)(8) # New chain, starting at 4, break at 6, first chain break\n    6 1\n    >>> y = y(2)(3)(10) # Chain expected 9 next, and 4 after 10. Break 2 and 3.\n    9 2\n    4 3\n    """\n    def g(x, y):\n        def h(n):\n            if ____________________________:\n                return ____________________________\n            else:\n                ____________________________\n        return ____________________________\n    return ____________________________\n\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),te=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'def chain_function():\n    """\n    >>> tester = chain_function()\n    >>> x = tester(1)(2)(4)(5) # Expected 3 but got 4, so print 3. 1st chain break, so print 1 too.\n    3 1\n    >>> x = x(2) # 6 should\'ve followed 5 from above, so print 6. 2nd chain break, so print 2\n    6 2\n    >>> x = x(8) # The chain restarted at 2 from the previous line, but we got 8. 3rd chain break.\n    3 3\n    >>> x = x(3)(4)(5) # Chain restarted at 8 in the previous line, but we got 3 instead. 4th break\n    9 4\n    >>> x = x(9) # Similar logic to the above line\n    6 5\n    >>> x = x(10) # Nothing is printed because 10 follows 9.\n    >>> y = tester(4)(5)(8) # New chain, starting at 4, break at 6, first chain break\n    6 1\n    >>> y = y(2)(3)(10) # Chain expected 9 next, and 4 after 10. Break 2 and 3.\n    9 2\n    4 3\n    """\n    def g(x, y):\n        def h(n):\n            if x == None:\n                return g(n, 0)\n            if n == x + 1:\n                return g(n, y)\n            else:\n                print(x+1, y+1)\n                return g(n, y+1)\n        return h\n    return g(None, 0)\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),de={},ue=(0,i(3744).Z)(de,[["render",function(e,n){const i=(0,s.up)("ExternalLinkIcon"),l=(0,s.up)("CodeTabs");return(0,s.wg)(),(0,s.iD)("div",null,[a,r,(0,s._)("p",null,[_,(0,s._)("a",t,[d,(0,s.Wm)(i)])]),u,c,(0,s.Wm)(l,{data:[{title:"Question"},{title:"Answer"}],"tab-id":"Q1"},{tab0:(0,s.w5)((({title:e,value:n,isActive:i})=>[m])),tab1:(0,s.w5)((({title:e,value:n,isActive:i})=>[b])),_:1}),o,v,(0,s.Wm)(l,{data:[{title:"Question"},{title:"Answer"}],"tab-id":"Q2"},{tab0:(0,s.w5)((({title:e,value:n,isActive:i})=>[h])),tab1:(0,s.w5)((({title:e,value:n,isActive:i})=>[f])),_:1}),p,g,x,(0,s.Wm)(l,{data:[{title:"Question"},{title:"Answer"}],"tab-id":"Q2"},{tab0:(0,s.w5)((({title:e,value:n,isActive:i})=>[k])),tab1:(0,s.w5)((({title:e,value:n,isActive:i})=>[y])),_:1}),w,Q,q,A,N,(0,s.Wm)(l,{data:[{title:"Question"},{title:"Answer"}],"tab-id":"Q4"},{tab0:(0,s.w5)((({title:e,value:n,isActive:i})=>[T])),tab1:(0,s.w5)((({title:e,value:n,isActive:i})=>[D])),_:1}),C,F,(0,s.Wm)(l,{data:[{title:"Question"},{title:"Answer"}],"tab-id":"Q5"},{tab0:(0,s.w5)((({title:e,value:n,isActive:i})=>[U])),tab1:(0,s.w5)((({title:e,value:n,isActive:i})=>[E])),_:1}),R,S,(0,s.Wm)(l,{data:[{title:"Question"},{title:"Answer"}],"tab-id":"Q6"},{tab0:(0,s.w5)((({title:e,value:n,isActive:i})=>[W])),tab1:(0,s.w5)((({title:e,value:n,isActive:i})=>[O])),_:1}),Y,H,(0,s.Wm)(l,{data:[{title:"Question"},{title:"Answer"}],"tab-id":"Q7"},{tab0:(0,s.w5)((({title:e,value:n,isActive:i})=>[I])),tab1:(0,s.w5)((({title:e,value:n,isActive:i})=>[M])),_:1}),P,z,L,K,Z,B,j,(0,s.Wm)(l,{data:[{title:"Question"},{title:"Answer"}],"tab-id":"Q8"},{tab0:(0,s.w5)((({title:e,value:n,isActive:i})=>[J])),tab1:(0,s.w5)((({title:e,value:n,isActive:i})=>[G])),_:1}),V,X,$,(0,s.Wm)(l,{data:[{title:"Question"},{title:"Answer"}],"tab-id":"Q9"},{tab0:(0,s.w5)((({title:e,value:n,isActive:i})=>[ee])),tab1:(0,s.w5)((({title:e,value:n,isActive:i})=>[ne])),_:1}),ie,se,le,ae,re,(0,s.Wm)(l,{data:[{title:"Question"},{title:"Answer"}],"tab-id":"Q10"},{tab0:(0,s.w5)((({title:e,value:n,isActive:i})=>[_e])),tab1:(0,s.w5)((({title:e,value:n,isActive:i})=>[te])),_:1})])}]])}}]);