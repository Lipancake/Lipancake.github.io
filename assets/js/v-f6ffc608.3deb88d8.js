"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[3817],{9450:(e,n,i)=>{i.r(n),i.d(n,{data:()=>s});const s=JSON.parse('{"key":"v-f6ffc608","path":"/posts/Disc/Disc03.html","title":"CS61a DISC 3","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2022-01-01T00:00:00.000Z","category":["CS61a"],"tag":["Disc"],"order":3,"summary":"--- icon: edit date: 2022-01-01 category:\\rCS61a; tag:\\rDisc; order: 3 --- CS61a DISC 3 Recursion Link to this section: Q1: Warm Up: Recursive Multiplication These exercises are mean","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/posts/Disc/Disc03.html"}],["meta",{"property":"og:site_name","content":"一个普通的网站"}],["meta",{"property":"og:title","content":"CS61a DISC 3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-08T06:07:04.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:tag","content":"Disc"}],["meta",{"property":"article:published_time","content":"2022-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-08-08T06:07:04.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Q1: Warm Up: Recursive Multiplication","slug":"q1-warm-up-recursive-multiplication","children":[]},{"level":2,"title":"Q2: Recursion Environment Diagram","slug":"q2-recursion-environment-diagram","children":[]},{"level":2,"title":"Q3: Find the Bug","slug":"q3-find-the-bug","children":[]},{"level":2,"title":"Q4: Is Prime","slug":"q4-is-prime","children":[]},{"level":2,"title":"Q5: Recursive Hailstone","slug":"q5-recursive-hailstone","children":[]},{"level":2,"title":"Q6: Merge Numbers","slug":"q6-merge-numbers","children":[]}],"git":{"createdTime":1659336072000,"updatedTime":1659938824000,"contributors":[{"name":"LiPancake","email":"370981991@qq.com","commits":2}]},"readingTime":{"minutes":2.65,"words":795},"filePathRelative":"posts/Disc/Disc03.md","localizedDate":"2022年1月1日"}')},6045:(e,n,i)=>{i.r(n),i.d(n,{default:()=>P});var s=i(6252);const l=i.p+"assets/img/D3Q2.a537405b.png",r=(0,s._)("h1",{id:"cs61a-disc-3",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#cs61a-disc-3","aria-hidden":"true"},"#"),(0,s.Uk)(" CS61a DISC 3")],-1),t=(0,s._)("h1",{id:"recursion",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#recursion","aria-hidden":"true"},"#"),(0,s.Uk)(" Recursion")],-1),a=(0,s.Uk)("Link to this section: "),u={href:"https://inst.eecs.berkeley.edu/~cs61a/fa21/disc/disc03/",target:"_blank",rel:"noopener noreferrer"},d=(0,s.Uk)("https://inst.eecs.berkeley.edu/~cs61a/fa21/disc/disc03/"),c=(0,s._)("h2",{id:"q1-warm-up-recursive-multiplication",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#q1-warm-up-recursive-multiplication","aria-hidden":"true"},"#"),(0,s.Uk)(" Q1: Warm Up: Recursive Multiplication")],-1),m=(0,s._)("p",null,"These exercises are meant to help refresh your memory of the topics covered in lecture.",-1),_=(0,s._)("p",null,"Write a function that takes two numbers m and n and returns their product. Assume m and n are positive integers. Use recursion, not mul or *.",-1),v=(0,s._)("div",{class:"custom-container info"},[(0,s._)("p",{class:"custom-container-title"},"Hint"),(0,s._)("p",null,"Hint: 5 * 3 = 5 + (5 * 2) = 5 + 5 + (5 * 1).")],-1),o=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'def multiply(m, n):\n    """ Takes two positive integers and returns their product using recursion.\n    >>> multiply(5, 3)\n    15\n    """\n    "*** YOUR CODE HERE ***"\n\n\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),b=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'def multiply(m, n):\n    """\n    >>> multiply(5, 3)\n    15\n    """\n    if n <= 0:\n        return 0\n    return m + multiply(m, n-1)\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),h=(0,s._)("h2",{id:"q2-recursion-environment-diagram",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#q2-recursion-environment-diagram","aria-hidden":"true"},"#"),(0,s.Uk)(" Q2: Recursion Environment Diagram")],-1),p=(0,s._)("p",null,"Draw an environment diagram for the following code:",-1),g=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,"def rec(x, y):\n    if y > 0:\n        return x * rec(x, y - 1)\n    return 1\n\nrec(3, 2)\n\n")]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),f=(0,s._)("p",null,[(0,s._)("img",{src:l,alt:"Alt"})],-1),x=(0,s._)("h2",{id:"q3-find-the-bug",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#q3-find-the-bug","aria-hidden":"true"},"#"),(0,s.Uk)(" Q3: Find the Bug")],-1),w=(0,s._)("p",null,"Find the bug with this recursive function.",-1),k=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'def skip_mul(n):\n    """Return the product of n * (n - 2) * (n - 4) * ...\n\n    >>> skip_mul(5) # 5 * 3 * 1\n    15\n    >>> skip_mul(8) # 8 * 6 * 4 * 2\n    384\n    """\n    if n == 2:\n        return 2\n    else:\n        return n * skip_mul(n - 2)\n\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),y=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'# Q3\ndef skip_mul(n):\n    """Return the product of n * (n - 2) * (n - 4) * ...\n\n    >>> skip_mul(5) # 5 * 3 * 1\n    15\n    >>> skip_mul(8) # 8 * 6 * 4 * 2\n    384\n    """\n    if n <= 2:\n        return n\n    else:\n        return n * skip_mul(n - 2)\n\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),Q=(0,s._)("h2",{id:"q4-is-prime",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#q4-is-prime","aria-hidden":"true"},"#"),(0,s.Uk)(" Q4: Is Prime")],-1),q=(0,s._)("p",null,"Write a function is_prime that takes a single argument n and returns True if n is a prime number and False otherwise. Assume n > 1. We implemented this in Discussion 1 iteratively, now time to do it recursively!",-1),D=(0,s._)("div",{class:"custom-container info"},[(0,s._)("p",{class:"custom-container-title"},"Hint"),(0,s._)("p",null,"Hint: You will need a helper function! Remember helper functions are useful if you need to keep track of more variables than the given parameters, or if you need to change the value of the input.")],-1),R=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'def is_prime(n):\n    """Returns True if n is a prime number and False otherwise.\n\n    >>> is_prime(2)\n    True\n    >>> is_prime(16)\n    False\n    >>> is_prime(521)\n    True\n    """\n    "*** YOUR CODE HERE ***"\n\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),A=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'def is_prime(n):\n    """\n    >>> is_prime(2)\n    True\n    >>> is_prime(16)\n    False\n    >>> is_prime(521)\n    True\n    """\n    k = 2\n    def prime_helper(n, k):\n        if n == 2:\n            return True\n        elif n == 1 or n % k == 0:\n            return False\n        elif n // k <= k:\n            return True\n        else:\n            return prime_helper(n, k+1)\n    return prime_helper(n, k)\n\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),U=(0,s._)("h2",{id:"q5-recursive-hailstone",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#q5-recursive-hailstone","aria-hidden":"true"},"#"),(0,s.Uk)(" Q5: Recursive Hailstone")],-1),C=(0,s._)("p",null,"Recall the hailstone function from Homework 1. First, pick a positive integer n as the start. If n is even, divide it by 2. If n is odd, multiply it by 3 and add 1. Repeat this process until n is 1. Write a recursive version of hailstone that prints out the values of the sequence and returns the number of steps.",-1),T=(0,s._)("div",{class:"custom-container info"},[(0,s._)("p",{class:"custom-container-title"},"Hint"),(0,s._)("p",null,"Hint: When taking the recursive leap of faith, consider both the return value and side effect of this function.")],-1),W=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'def hailstone(n):\n    """Print out the hailstone sequence starting at n, and return the number of elements in the sequence.\n    >>> a = hailstone(10)\n    10\n    5\n    16\n    8\n    4\n    2\n    1\n    >>> a\n    7\n    """\n    "*** YOUR CODE HERE ***"\n\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),E=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'def hailstone(n):\n    """Print out the hailstone sequence starting at n, and return the\n    number of elements in the sequence.\n    >>> a = hailstone(10)\n    10\n    5\n    16\n    8\n    4\n    2\n    1\n    >>> a\n    7\n    """\n    def f(n, times):\n        print(n)\n        if n == 1:\n            return times\n        if n % 2 == 0:\n            n = n//2\n        else:\n            n = n * 3 + 1\n        return f(n, times+1)\n    return f(n, 1)\n\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),H=(0,s._)("h2",{id:"q6-merge-numbers",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#q6-merge-numbers","aria-hidden":"true"},"#"),(0,s.Uk)(" Q6: Merge Numbers")],-1),S=(0,s._)("p",null,"Write a procedure merge(n1, n2) which takes numbers with digits in decreasing order and returns a single number with all of the digits of the two, in decreasing order. Any number merged with 0 will be that number (treat 0 as having no digits). Use recursion.",-1),I=(0,s._)("div",{class:"custom-container info"},[(0,s._)("p",{class:"custom-container-title"},"Hint"),(0,s._)("p",null,"Hint: If you can figure out which number has the smallest digit out of both, then we know that the resulting number will have that smallest digit, followed by the merge of the two numbers with the smallest digit removed.")],-1),F=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'def merge(n1, n2):\n    """ Merges two numbers by digit in decreasing order\n    >>> merge(31, 42)\n    4321\n    >>> merge(21, 0)\n    21\n    >>> merge (21, 31) \n    3211\n    """\n    "*** YOUR CODE HERE ***"\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),O=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'def merge(n1, n2):\n    """ Merges two numbers\n    >>> merge(31, 42)\n    4321\n    >>> merge(21, 0)\n    21\n    >>> merge (21, 31)\n    3211\n    """\n    if n1 == 0:\n        return n2\n    elif n2 == 0:\n        return n1\n    elif n1 % 10 < n2 % 10:\n        return merge(n1 // 10, n2) * 10 + n1 % 10\n    else:\n        return merge(n1, n2 // 10) * 10 + n2 % 10\n')]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),M={},P=(0,i(3744).Z)(M,[["render",function(e,n){const i=(0,s.up)("ExternalLinkIcon"),l=(0,s.up)("CodeTabs");return(0,s.wg)(),(0,s.iD)("div",null,[r,t,(0,s._)("p",null,[a,(0,s._)("a",u,[d,(0,s.Wm)(i)])]),c,m,_,v,(0,s.Wm)(l,{data:[{title:"Question"},{title:"Answer"}],"tab-id":"Q1"},{tab0:(0,s.w5)((({title:e,value:n,isActive:i})=>[o])),tab1:(0,s.w5)((({title:e,value:n,isActive:i})=>[b])),_:1}),h,p,(0,s.Wm)(l,{data:[{title:"Question"}],"tab-id":"Q2"},{tab0:(0,s.w5)((({title:e,value:n,isActive:i})=>[g])),_:1}),f,x,w,(0,s.Wm)(l,{data:[{title:"Question"},{title:"Answer"}],"tab-id":"Q3"},{tab0:(0,s.w5)((({title:e,value:n,isActive:i})=>[k])),tab1:(0,s.w5)((({title:e,value:n,isActive:i})=>[y])),_:1}),Q,q,D,(0,s.Wm)(l,{data:[{title:"Question"},{title:"Answer"}],"tab-id":"Q4"},{tab0:(0,s.w5)((({title:e,value:n,isActive:i})=>[R])),tab1:(0,s.w5)((({title:e,value:n,isActive:i})=>[A])),_:1}),U,C,T,(0,s.Wm)(l,{data:[{title:"Question"},{title:"Answer"}],"tab-id":"Q5"},{tab0:(0,s.w5)((({title:e,value:n,isActive:i})=>[W])),tab1:(0,s.w5)((({title:e,value:n,isActive:i})=>[E])),_:1}),H,S,I,(0,s.Wm)(l,{data:[{title:"Question"},{title:"Answer"}],"tab-id":"Q6"},{tab0:(0,s.w5)((({title:e,value:n,isActive:i})=>[F])),tab1:(0,s.w5)((({title:e,value:n,isActive:i})=>[O])),_:1})])}]])}}]);