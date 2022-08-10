"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[6411],{1685:(e,n,i)=>{i.r(n),i.d(n,{data:()=>l});const l=JSON.parse('{"key":"v-fdd32884","path":"/posts/Disc/Disc01.html","title":"CS61a DISC 1","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2022-01-01T00:00:00.000Z","category":["CS61a"],"tag":["Disc"],"order":1,"summary":"--- icon: edit date: 2022-01-01 category:\\rCS61a; tag:\\rDisc; order: 1 --- CS61a DISC 1 Control, Environment Diagrams 我的个人博客 (挂在github上，第一次打开很慢，但是排版好看) Link to this section: Run pyth","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/posts/Disc/Disc01.html"}],["meta",{"property":"og:site_name","content":"一个普通的网站"}],["meta",{"property":"og:title","content":"CS61a DISC 1"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-01T06:41:12.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:tag","content":"Disc"}],["meta",{"property":"article:published_time","content":"2022-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-08-01T06:41:12.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Q1: Jacket Weather?","slug":"q1-jacket-weather","children":[]},{"level":2,"title":"Q2: Case Conundrum","slug":"q2-case-conundrum","children":[]},{"level":2,"title":"Q3: If Function vs Statement","slug":"q3-if-function-vs-statement","children":[]},{"level":2,"title":"Q4: Square So Slow","slug":"q4-square-so-slow","children":[]},{"level":2,"title":"Q5: Is Prime?","slug":"q5-is-prime","children":[]},{"level":2,"title":"Q6: Fizzbuzz","slug":"q6-fizzbuzz","children":[]},{"level":2,"title":"Q7: Assignment Diagram","slug":"q7-assignment-diagram","children":[]},{"level":2,"title":"Q8: def Diagram","slug":"q8-def-diagram","children":[]},{"level":2,"title":"Q9: Call Diagram","slug":"q9-call-diagram","children":[]},{"level":2,"title":"Q10: Nested Calls Diagrams","slug":"q10-nested-calls-diagrams","children":[]}],"git":{"createdTime":1659336072000,"updatedTime":1659336072000,"contributors":[{"name":"LiPancake","email":"370981991@qq.com","commits":1}]},"readingTime":{"minutes":4.19,"words":1257},"filePathRelative":"posts/Disc/Disc01.md","localizedDate":"2022年1月1日"}')},6269:(e,n,i)=>{i.r(n),i.d(n,{default:()=>he});var l=i(6252);const s=i.p+"assets/img/D1Q7.1b64b365.png",a=i.p+"assets/img/D1Q8.70373f02.png",r=i.p+"assets/img/D1Q9.fa6ed2ce.png",t=i.p+"assets/img/D1Q10.7fc1271b.png",u=(0,l._)("h1",{id:"cs61a-disc-1",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#cs61a-disc-1","aria-hidden":"true"},"#"),(0,l.Uk)(" CS61a DISC 1")],-1),d=(0,l._)("h1",{id:"control-environment-diagrams",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#control-environment-diagrams","aria-hidden":"true"},"#"),(0,l.Uk)(" Control, Environment Diagrams")],-1),c=(0,l.Uk)("我的个人博客 "),_={href:"https://lipancake.tk/",target:"_blank",rel:"noopener noreferrer"},m=(0,l.Uk)("https://lipancake.tk/"),b=(0,l.Uk)(" (挂在github上，第一次打开很慢，但是排版好看)"),v=(0,l.Uk)("Link to this section: "),o={href:"https://inst.eecs.berkeley.edu/~cs61a/fa21/disc/disc01/",target:"_blank",rel:"noopener noreferrer"},f=(0,l.Uk)("https://inst.eecs.berkeley.edu/~cs61a/fa21/disc/disc01/"),h=(0,l.Uk)("Run pythontutor link: "),g={href:"https://pythontutor.com/composingprograms.html#mode=edit",target:"_blank",rel:"noopener noreferrer"},p=(0,l.Uk)("https://pythontutor.com/composingprograms.html#mode=edit"),x=(0,l._)("h2",{id:"q1-jacket-weather",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#q1-jacket-weather","aria-hidden":"true"},"#"),(0,l.Uk)(" Q1: Jacket Weather?")],-1),w=(0,l._)("p",null,"Alfonso will only wear a jacket outside if it is below 60 degrees or it is raining.",-1),z=(0,l._)("p",null,"Write a function that takes in the current temperature and a boolean value telling if it is raining. This function should return True if Alfonso will wear a jacket and False otherwise.",-1),k=(0,l._)("p",null,"First, try solving this problem using an if statement.",-1),y=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,'def wears_jacket_with_if(temp, raining):\n    """\n    >>> wears_jacket_with_if(90, False)\n    False\n    >>> wears_jacket_with_if(40, False)\n    True\n    >>> wears_jacket_with_if(100, True)\n    True\n    """\n    "*** YOUR CODE HERE ***"\n\n')]),(0,l._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"})])],-1),q=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,'#Q1\ndef wears_jacket_with_if(temp, raining):\n    """\n    >>> wears_jacket_with_if(90, False)\n    False\n    >>> wears_jacket_with_if(40, False)\n    True\n    >>> wears_jacket_with_if(100, True)\n    True\n    """\n    "*** YOUR CODE HERE ***"\n    if temp < 60 or raining:\n        return True\n    else:\n        return False\n\n\n')]),(0,l._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"})])],-1),Q=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,"return True if temp < 60 or raining else False\n")]),(0,l._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,l._)("div",{class:"line-number"})])],-1),D=(0,l._)("h2",{id:"q2-case-conundrum",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#q2-case-conundrum","aria-hidden":"true"},"#"),(0,l.Uk)(" Q2: Case Conundrum")],-1),A=(0,l._)("p",null,"In this question, we will explore the difference between if and elif.",-1),E=(0,l._)("p",null,"What is the result of evaluating the following code?",-1),C=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,"def special_case():\n    x = 10\n    if x > 0:\n        x += 2\n    elif x < 13:\n        x += 3\n    elif x % 2 == 1:\n        x += 4\n    return x\n\nspecial_case()\n\ndef just_in_case():\n    x = 10\n    if x > 0:\n        x += 2\n    if x < 13:\n        x += 3\n    if x % 2 == 1:\n        x += 4\n    return x\n\njust_in_case()\n\ndef case_in_point():\n    x = 10\n    if x > 0:\n        return x + 2\n    if x < 13:\n        return x + 3\n    if x % 2 == 1:\n        return x + 4\n    return x\n\ncase_in_point()\n\n")]),(0,l._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"})])],-1),U=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,"# Q2\ndef special_case():\n    x = 10\n    if x > 0:\n        x += 2\n    elif x < 13:\n        x += 3\n    elif x % 2 == 1:\n        x += 4\n    return x\n\nprint(special_case()) # 12\n\ndef just_in_case():\n    x = 10\n    if x > 0:\n        x += 2\n    if x < 13:\n        x += 3\n    if x % 2 == 1:\n        x += 4\n    return x\n\nprint(just_in_case()) # 19\n\ndef case_in_point():\n    x = 10\n    if x > 0:\n        return x + 2\n    if x < 13:\n        return x + 3\n    if x % 2 == 1:\n        return x + 4\n    return x\n\nprint(case_in_point()) # 12\n\n")]),(0,l._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"})])],-1),R=(0,l._)("h2",{id:"q3-if-function-vs-statement",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#q3-if-function-vs-statement","aria-hidden":"true"},"#"),(0,l.Uk)(" Q3: If Function vs Statement")],-1),T=(0,l._)("p",null,"Now that we've learned about how if statements work, let's see if we can write a function that behaves the same as an if statement.",-1),O=(0,l._)("div",{class:"custom-container info"},[(0,l._)("p",{class:"custom-container-title"},"Hint"),(0,l._)("p",null,"Hint: If you are having a hard time identifying how with_if_statement and with_if_function would differ in behavior, consider the rules of evaluation for if statements and call expressions.")],-1),F=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,'def if_function(condition, true_result, false_result):\n    """Return true_result if condition is a true value, and\n    false_result otherwise.\n\n    >>> if_function(True, 2, 3)\n    2\n    >>> if_function(False, 2, 3)\n    3\n    >>> if_function(3==2, \'equal\', \'not equal\')\n    \'not equal\'\n    >>> if_function(3>2, \'bigger\', \'smaller\')\n    \'bigger\'\n    """\n    if condition:\n        return true_result\n    else:\n        return false_result\n\ndef with_if_statement():\n    """\n    >>> result = with_if_statement()\n    61A\n    >>> print(result)\n    None\n    """\n    if cond():\n        return true_func()\n    else:\n        return false_func()\n\ndef with_if_function():\n    """\n    >>> result = with_if_function()\n    Welcome to\n    61A\n    >>> print(result)\n    None\n    """\n    return if_function(cond(), true_func(), false_func())\n\ndef cond():\n    "*** YOUR CODE HERE ***"\n\ndef true_func():\n    "*** YOUR CODE HERE ***"\n\ndef false_func():\n    "*** YOUR CODE HERE ***"\n\n')]),(0,l._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"})])],-1),W=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,'# Q3\ndef if_function(condition, true_result, false_result):\n    """Return true_result if condition is a true value, and\n    false_result otherwise.\n\n    >>> if_function(True, 2, 3)\n    2\n    >>> if_function(False, 2, 3)\n    3\n    >>> if_function(3==2, \'equal\', \'not equal\')\n    \'not equal\'\n    >>> if_function(3>2, \'bigger\', \'smaller\')\n    \'bigger\'\n    """\n    if condition:\n        return true_result\n    else:\n        return false_result\n\ndef with_if_statement():\n    """\n    >>> result = with_if_statement()\n    61A\n    >>> print(result)\n    None\n    """\n    if cond():\n        return true_func()\n    else:\n        return false_func()\n\ndef with_if_function():\n    """\n    >>> result = with_if_function()\n    Welcome to\n    61A\n    >>> print(result)\n    None\n    """\n    return if_function(cond(), true_func(), false_func())\n\ndef cond():\n    "*** YOUR CODE HERE ***"\n    return 0\n\ndef true_func():\n    "*** YOUR CODE HERE ***"\n    print(\'Welcome to\')\n\ndef false_func():\n    "*** YOUR CODE HERE ***"\n    print(\'61A\')\n\n')]),(0,l._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"})])],-1),S=(0,l._)("h2",{id:"q4-square-so-slow",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#q4-square-so-slow","aria-hidden":"true"},"#"),(0,l.Uk)(" Q4: Square So Slow")],-1),j=(0,l._)("p",null,"What is the result of evaluating the following code?",-1),H=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,'def square(x):\n    print("here!")\n    return x * x\n\ndef so_slow(num):\n    x = num\n    while x > 0:\n        x=x+1\n    return x / 0\n\nsquare(so_slow(5))\n')]),(0,l._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"})])],-1),I=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,'# Q4\ndef square(x):\n    print("here!")\n    return x * x\n\ndef so_slow(num):\n    x = num\n    while x > 0:\n        x=x+1\n    return x / 0\n\nsquare(so_slow(5)) # 死循环\n\n')]),(0,l._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"})])],-1),Y=(0,l._)("h2",{id:"q5-is-prime",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#q5-is-prime","aria-hidden":"true"},"#"),(0,l.Uk)(" Q5: Is Prime?")],-1),N=(0,l._)("p",null,"Write a function that returns True if a positive integer n is a prime number and False otherwise.",-1),L=(0,l._)("p",null,"A prime number n is a number that is not divisible by any numbers other than 1 and n itself. For example, 13 is prime, since it is only divisible by 1 and 13, but 14 is not, since it is divisible by 1, 2, 7, and 14.",-1),Z=(0,l._)("div",{class:"custom-container info"},[(0,l._)("p",{class:"custom-container-title"},"Hint"),(0,l._)("p",null,"Hint: Use the % operator: x % y returns the remainder of x when divided by y.")],-1),P=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,'def is_prime(n):\n    """\n    >>> is_prime(10)\n    False\n    >>> is_prime(7)\n    True\n    """\n    "*** YOUR CODE HERE ***"\n\n')]),(0,l._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"})])],-1),J=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,'def is_prime(n):\n    """\n    >>> is_prime(10)\n    False\n    >>> is_prime(7)\n    True\n    """\n    "*** YOUR CODE HERE ***"\n    for i in range(2, n):\n        if n % i == 0:\n            return False\n    return True\n\n')]),(0,l._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"})])],-1),B=(0,l._)("h2",{id:"q6-fizzbuzz",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#q6-fizzbuzz","aria-hidden":"true"},"#"),(0,l.Uk)(" Q6: Fizzbuzz")],-1),G=(0,l._)("p",null,"Implement the fizzbuzz sequence, which prints out a single statement for each number from 1 to n. For a number i,",-1),K=(0,l._)("p",null,'If i is divisible by 3 only, then we print "fizz". If i is divisible by 5 only, then we print "buzz". If i is divisible by both 3 and 5, then we print "fizzbuzz". Otherwise, we print the number i by itself. Implement fizzbuzz(n) here:',-1),M=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,'def fizzbuzz(n):\n    """\n    >>> result = fizzbuzz(16)\n    1\n    2\n    fizz\n    4\n    buzz\n    fizz\n    7\n    8\n    fizz\n    buzz\n    11\n    fizz\n    13\n    14\n    fizzbuzz\n    16\n    >>> result == None\n    True\n    """\n    "*** YOUR CODE HERE ***"\n\n')]),(0,l._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"})])],-1),V=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,'def fizzbuzz(n):\n    """\n    >>> result = fizzbuzz(16)\n    1\n    2\n    fizz\n    4\n    buzz\n    fizz\n    7\n    8\n    fizz\n    buzz\n    11\n    fizz\n    13\n    14\n    fizzbuzz\n    16\n    >>> result == None\n    True\n    """\n    "*** YOUR CODE HERE ***"\n    for i in range(1, n+1):\n        if i % 3 == 0 and i % 5 == 0:\n            print("fizzbuzz")\n        elif i % 3 == 0:\n            print("fizz")\n        elif i % 5 == 0:\n            print("buzz")\n        else:\n            print(i)\n')]),(0,l._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"})])],-1),X=(0,l._)("h2",{id:"q7-assignment-diagram",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#q7-assignment-diagram","aria-hidden":"true"},"#"),(0,l.Uk)(" Q7: Assignment Diagram")],-1),$=(0,l._)("p",null,"Alfonso will only wear a jacket outside if it is below 60 degrees or it is raining.",-1),ee=(0,l._)("p",null,"Write a function that takes in the current temperature and a boolean value telling if it is raining. This function should return True if Alfonso will wear a jacket and False otherwise.",-1),ne=(0,l._)("p",null,"First, try solving this problem using an if statement.",-1),ie=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,"x = 11 % 4\ny = x\nx **= 2\n")]),(0,l._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"})])],-1),le=(0,l._)("p",null,[(0,l._)("img",{src:s,alt:"Alt"})],-1),se=(0,l._)("h2",{id:"q8-def-diagram",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#q8-def-diagram","aria-hidden":"true"},"#"),(0,l.Uk)(" Q8: def Diagram")],-1),ae=(0,l._)("p",null,"Use these rules for defining functions and the rules for assignment statements to draw a diagram for the code below.",-1),re=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,"def double(x):\n    return x * 2\n\ndef triple(x):\n    return x * 3\n\nhat = double\ndouble = triple\n")]),(0,l._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"})])],-1),te=(0,l._)("p",null,[(0,l._)("img",{src:a,alt:"Alt"})],-1),ue=(0,l._)("h2",{id:"q9-call-diagram",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#q9-call-diagram","aria-hidden":"true"},"#"),(0,l.Uk)(" Q9: Call Diagram")],-1),de=(0,l._)("p",null,"Let’s put it all together! Draw an environment diagram for the following code. You may not have to use all of the blanks provided to you.",-1),ce=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,"def double(x):\n    return x * 2\n\nhmmm = double\nwow = double(3)\nhmmm(wow)\n")]),(0,l._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"})])],-1),_e=(0,l._)("p",null,[(0,l._)("img",{src:r,alt:"Alt"})],-1),me=(0,l._)("h2",{id:"q10-nested-calls-diagrams",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#q10-nested-calls-diagrams","aria-hidden":"true"},"#"),(0,l.Uk)(" Q10: Nested Calls Diagrams")],-1),be=(0,l._)("p",null,"Draw the environment diagram that results from executing the code below. You may not need to use all of the frames and blanks provided to you.",-1),ve=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,"def f(x):\n    return x\n\ndef g(x, y):\n    if x(y):\n        return not y\n    return y\n\nx = 3\nx = g(f, x)\nf = g(f, 0)\n\n")]),(0,l._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"}),(0,l._)("div",{class:"line-number"})])],-1),oe=(0,l._)("p",null,[(0,l._)("img",{src:t,alt:"Alt"})],-1),fe={},he=(0,i(3744).Z)(fe,[["render",function(e,n){const i=(0,l.up)("ExternalLinkIcon"),s=(0,l.up)("CodeTabs");return(0,l.wg)(),(0,l.iD)("div",null,[u,d,(0,l._)("p",null,[c,(0,l._)("a",_,[m,(0,l.Wm)(i)]),b]),(0,l._)("p",null,[v,(0,l._)("a",o,[f,(0,l.Wm)(i)])]),(0,l._)("p",null,[h,(0,l._)("a",g,[p,(0,l.Wm)(i)])]),x,w,z,k,(0,l.Wm)(s,{data:[{title:"Question"},{title:"Answer"},{title:"Answer 2"}],"tab-id":"Q1"},{tab0:(0,l.w5)((({title:e,value:n,isActive:i})=>[y])),tab1:(0,l.w5)((({title:e,value:n,isActive:i})=>[q])),tab2:(0,l.w5)((({title:e,value:n,isActive:i})=>[Q])),_:1}),D,A,E,(0,l.Wm)(s,{data:[{title:"Question"},{title:"Answer"}],"tab-id":"Q2"},{tab0:(0,l.w5)((({title:e,value:n,isActive:i})=>[C])),tab1:(0,l.w5)((({title:e,value:n,isActive:i})=>[U])),_:1}),R,T,O,(0,l.Wm)(s,{data:[{title:"Question"},{title:"Answer"}],"tab-id":"Q3"},{tab0:(0,l.w5)((({title:e,value:n,isActive:i})=>[F])),tab1:(0,l.w5)((({title:e,value:n,isActive:i})=>[W])),_:1}),S,j,(0,l.Wm)(s,{data:[{title:"Question"},{title:"Answer"}],"tab-id":"Q4"},{tab0:(0,l.w5)((({title:e,value:n,isActive:i})=>[H])),tab1:(0,l.w5)((({title:e,value:n,isActive:i})=>[I])),_:1}),Y,N,L,Z,(0,l.Wm)(s,{data:[{title:"Question"},{title:"Answer"}],"tab-id":"Q5"},{tab0:(0,l.w5)((({title:e,value:n,isActive:i})=>[P])),tab1:(0,l.w5)((({title:e,value:n,isActive:i})=>[J])),_:1}),B,G,K,(0,l.Wm)(s,{data:[{title:"Question"},{title:"Answer"}],"tab-id":"Q6"},{tab0:(0,l.w5)((({title:e,value:n,isActive:i})=>[M])),tab1:(0,l.w5)((({title:e,value:n,isActive:i})=>[V])),_:1}),X,$,ee,ne,(0,l.Wm)(s,{data:[{title:"Question"}],"tab-id":"Q7"},{tab0:(0,l.w5)((({title:e,value:n,isActive:i})=>[ie])),_:1}),le,se,ae,(0,l.Wm)(s,{data:[{title:"Question"}],"tab-id":"Q8"},{tab0:(0,l.w5)((({title:e,value:n,isActive:i})=>[re])),_:1}),te,ue,de,(0,l.Wm)(s,{data:[{title:"Question"}],"tab-id":"Q1"},{tab0:(0,l.w5)((({title:e,value:n,isActive:i})=>[ce])),_:1}),_e,me,be,(0,l.Wm)(s,{data:[{title:"Question"}],"tab-id":"Q10"},{tab0:(0,l.w5)((({title:e,value:n,isActive:i})=>[ve])),_:1}),oe])}]])}}]);