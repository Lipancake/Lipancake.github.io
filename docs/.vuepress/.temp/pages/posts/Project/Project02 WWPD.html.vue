<template><div><h1 id="cs61a-project-2" tabindex="-1"><a class="header-anchor" href="#cs61a-project-2" aria-hidden="true">#</a> CS61a Project 2</h1>
<h1 id="cs-61a-autocorrected-typing-software" tabindex="-1"><a class="header-anchor" href="#cs-61a-autocorrected-typing-software" aria-hidden="true">#</a> CS 61A Autocorrected Typing Software</h1>
<p>Link to this section: <a href="https://inst.eecs.berkeley.edu/~cs61a/fa20/proj/cats/" target="_blank" rel="noopener noreferrer">https://inst.eecs.berkeley.edu/~cs61a/fa20/proj/cats/<ExternalLinkIcon/></a></p>
<h2 id="q1-wwpd" tabindex="-1"><a class="header-anchor" href="#q1-wwpd" aria-hidden="true">#</a> Q1: WWPD</h2>
<CodeTabs :data='[{"title":"Question"}]' tab-id="Q1">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>---------------------------------------------------------------------
Problem 1 > Suite 1 > Case 1
(cases remaining: 101)

>>> from cats import choose
>>> ps = ['short', 'really long', 'tiny']
>>> s = lambda p: len(p) &lt;= 5
>>> choose(ps, s, 0)
? 'short'
-- OK! --

>>> choose(ps, s, 1)
? 'tiny'
-- OK! --

>>> choose(ps, s, 2)
? ''
-- OK! --

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="q2-wwpd" tabindex="-1"><a class="header-anchor" href="#q2-wwpd" aria-hidden="true">#</a> Q2: WWPD</h2>
<CodeTabs :data='[{"title":"Question"}]' tab-id="Q2">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> ---------------------------------------------------------------------
Problem 2 > Suite 1 > Case 1
(cases remaining: 101)

>>> from cats import about
>>> dogs = about(['dogs', 'hounds'])
>>> dogs('A paragraph about cats.')
? False
-- OK! --

>>> dogs('A paragraph about dogs.')
? True
-- OK! --

>>> dogs('Release the Hounds!')
? True
-- OK! --

>>> dogs('"DOGS" stands for Department Of Geophysical Science.')
? True
-- OK! --

>>> dogs('Do gs and ho unds don\'t count')

? False
-- OK! --

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="q3-wwpd" tabindex="-1"><a class="header-anchor" href="#q3-wwpd" aria-hidden="true">#</a> Q3: WWPD</h2>
<CodeTabs :data='[{"title":"Question"}]' tab-id="Q3">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="q4-wwpd" tabindex="-1"><a class="header-anchor" href="#q4-wwpd" aria-hidden="true">#</a> Q4: WWPD</h2>
<CodeTabs :data='[{"title":"Question"}]' tab-id="Q4">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="q5-wwpd" tabindex="-1"><a class="header-anchor" href="#q5-wwpd" aria-hidden="true">#</a> Q5: WWPD</h2>
<CodeTabs :data='[{"title":"Question"}]' tab-id="Q5">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="q6-wwpd" tabindex="-1"><a class="header-anchor" href="#q6-wwpd" aria-hidden="true">#</a> Q6: WWPD</h2>
<CodeTabs :data='[{"title":"Question"}]' tab-id="Q6">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="q7-wwpd" tabindex="-1"><a class="header-anchor" href="#q7-wwpd" aria-hidden="true">#</a> Q7: WWPD</h2>
<CodeTabs :data='[{"title":"Question"}]' tab-id="Q7">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="q8-wwpd" tabindex="-1"><a class="header-anchor" href="#q8-wwpd" aria-hidden="true">#</a> Q8: WWPD</h2>
<CodeTabs :data='[{"title":"Question"}]' tab-id="Q8">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="q9-wwpd" tabindex="-1"><a class="header-anchor" href="#q9-wwpd" aria-hidden="true">#</a> Q9: WWPD</h2>
<CodeTabs :data='[{"title":"Question"}]' tab-id="Q9">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="q10-wwpd" tabindex="-1"><a class="header-anchor" href="#q10-wwpd" aria-hidden="true">#</a> Q10: WWPD</h2>
<CodeTabs :data='[{"title":"Question"}]' tab-id="Q10">

<template #tab0="{ title, value, isActive }">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
</div></template>
