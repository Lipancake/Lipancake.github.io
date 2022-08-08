---
icon: edit
date: 2022-01-01
category:
  - CS61a
tag:
  - Disc
---

# CS61a Project 2 WWPD
# CS 61A Autocorrected Typing Software
Link to this section: <https://inst.eecs.berkeley.edu/~cs61a/fa20/proj/cats/>
## Q1: WWPD

::: code-tabs#Q1
@tab Question
```
---------------------------------------------------------------------
Problem 1 > Suite 1 > Case 1
(cases remaining: 101)

>>> from cats import choose
>>> ps = ['short', 'really long', 'tiny']
>>> s = lambda p: len(p) <= 5
>>> choose(ps, s, 0)
? 'short'
-- OK! --

>>> choose(ps, s, 1)
? 'tiny'
-- OK! --

>>> choose(ps, s, 2)
? ''
-- OK! --

```
:::

## Q2: WWPD

::: code-tabs#Q2
@tab Question
```
 ---------------------------------------------------------------------
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

```
:::

## Q3: WWPD

::: code-tabs#Q3
@tab Question
```
---------------------------------------------------------------------
Problem 3 > Suite 1 > Case 1
(cases remaining: 102)

>>> from cats import accuracy
>>> accuracy("12345", "12345") # Returns 100.0
? 100.0
-- OK! --

>>> accuracy("a b c", "a b c")
? 100.0
-- OK! --

>>> accuracy("a  b  c  d", "b  a  c  d")

? 50.0
-- OK! --

>>> accuracy("a b", "c d e")
? 0.0
-- OK! --

>>> accuracy("Cat", "cat") # the function is case-sensitive
? 0.0
-- OK! --

>>> accuracy("a b c d", " a d ")
? 25.0
-- OK! --

>>> accuracy("abc", " ")
? 0.0
-- OK! --

>>> accuracy(" a b \tc" , "a b c") # Tabs don't count as words
? 100.0
-- OK! --

>>> accuracy("abc", "")
? 0.0
-- OK! --

>>> accuracy("", "abc")
? 0.0
-- OK! --

>>> accuracy("cats.", "cats") # punctuation counts
? 0.0
-- OK! --

```
:::

## Q4: WWPD

::: code-tabs#Q4
@tab Question
```
---------------------------------------------------------------------
Problem 4 > Suite 1 > Case 1
(cases remaining: 103)

>>> from cats import wpm
>>> wpm("12345", 3) # Note: wpm returns a float (with a decimal point)

? 20.0
-- OK! --

>>> wpm("a b c", 20)

? 3.0
-- OK! --

>>> wpm("", 10)
? 0.0
-- OK! --

```
:::

## Q5: WWPD

::: code-tabs#Q5
@tab Question
```
---------------------------------------------------------------------
Problem 5 > Suite 1 > Case 1
(cases remaining: 103)

>>> from cats import autocorrect, lines_from_file
>>> abs_diff = lambda w1, w2, limit: abs(len(w2) - len(w1))
>>> autocorrect("cul", ["culture", "cult", "cultivate"], abs_diff, 10)
? "cult"
-- OK! --

>>> autocorrect("cul", ["culture", "cult", "cultivate"], abs_diff, 0)
? "cul"
-- OK! --

>>> autocorrect("wor", ["worry", "car", "part"], abs_diff, 10)

? "car"
-- OK! --

>>> first_diff = lambda w1, w2, limit: 1 if w1[0] != w2[0] else 0
>>> autocorrect("wrod", ["word", "rod"], first_diff, 1)

? "word"
-- OK! --

>>> autocorrect("inside", ["idea", "inside"], first_diff, 0.5)

? "inside"
-- OK! --

>>> autocorrect("inside", ["idea", "insider"], first_diff, 0.5)

? "idea"
-- OK! --

>>> autocorrect("outside", ["idea", "insider"], first_diff, 0.5)

? "outside"
-- OK! --

```
:::

## Q6: WWPD

::: code-tabs#Q6
@tab Question
```
---------------------------------------------------------------------
Problem 6 > Suite 1 > Case 1
(cases remaining: 104)

>>> from cats import shifty_shifts, autocorrect
>>> import tests.construct_check as test
>>> big_limit = 10
>>> shifty_shifts("car", "cad", big_limit)

? 1
-- OK! --

>>> shifty_shifts("this", "that", big_limit)
? 2
-- OK! --

>>> shifty_shifts("one", "two", big_limit)
? 3
-- OK! --

>>> shifty_shifts("from", "form", big_limit)
? 2
-- OK! --

>>> shifty_shifts("awe", "awesome", big_limit)

? 4
-- OK! --

>>> shifty_shifts("someawe", "awesome", big_limit)

? 6
-- OK! --

>>> shifty_shifts("awful", "awesome", big_limit)
? 5
-- OK! --

>>> shifty_shifts("awful", "awesome", 3) > 3

? True
-- OK! --

>>> shifty_shifts("awful", "awesome", 4) > 4

? True
-- OK! --

>>> shifty_shifts("awful", "awesome", 5) > 5
? False
-- OK! --

```
:::

## Q7: WWPD

::: code-tabs#Q7
@tab Question
```
Nothing

```
:::

## Q8: WWPD

::: code-tabs#Q8
@tab Question
```
---------------------------------------------------------------------
Problem 8 > Suite 1 > Case 1
(cases remaining: 101)

>>> from cats import report_progress
>>> print_progress = lambda d: print('ID:', d['id'], 'Progress:', d['progress'])
>>> typed = ['I', 'have', 'begun']
>>> prompt = ['I', 'have', 'begun', 'to', 'type']
>>> print_progress({'id': 1, 'progress': 0.6})

? ID: 1 Progress: 0.6
-- OK! --

>>> report_progress(typed, prompt, 1, print_progress) # print_progress is called on the report
(line 1)? ID: 1 Progress: 0.6
(line 2)? 0.6
-- OK! --

>>> report_progress(['I', 'begun'], prompt, 2, print_progress)

(line 1)? ID: 2 Progress: 0.2
(line 2)? 0.2
-- OK! --

>>> report_progress(['I', 'hve', 'begun', 'to', 'type'], prompt, 3, print_progress)

(line 1)? ID: 3 Progress: 0.2
(line 2)? 0.2
-- OK! --

```
:::

## Q9: WWPD

::: code-tabs#Q9
@tab Question
```
---------------------------------------------------------------------
Problem 9 > Suite 1 > Case 1
(cases remaining: 102)

>>> from cats import game, game_string, time_per_word, all_words, all_times, word_at, time
>>> p = [[1, 4, 6, 7], [0, 4, 6, 9]]
>>> words = ['This', 'is', 'fun']
>>> game = time_per_word(p, words)
>>> all_words(game)
? ['This', 'is', 'fun']
-- OK! --

>>> all_times(game)
? [[3,2,1],[4,2,3]]
-- OK! --

>>> p = [[0, 2, 3], [2, 4, 7]]
>>> game = time_per_word(p, ['hello', 'world'])
>>> word_at(game, 1)
? 'world'
-- OK! --

>>> all_times(game)
? [[2,1],[2,3]]
-- OK! --

>>> time(game, 0, 1)
? 1
-- OK! --

```
:::

## Q10: WWPD

::: code-tabs#Q10
@tab Question
```
---------------------------------------------------------------------
Problem 10 > Suite 1 > Case 1
(cases remaining: 102)

>>> from cats import game, fastest_words
>>> p0 = [2, 2, 3]
>>> p1 = [6, 1, 2]
>>> fastest_words(game(['What', 'great', 'luck'], [p0, p1]))

? [['What'],['great','luck']]
-- OK! --

>>> p0 = [2, 2, 3]
>>> p1 = [6, 1, 3]
>>> fastest_words(game(['What', 'great', 'luck'], [p0, p1]))  # with a tie, choose the first player
? [['What','luck'],['great']]
-- OK! --

>>> p2 = [4, 3, 1]
>>> fastest_words(game(['What', 'great', 'luck'], [p0, p1, p2]))
? [['What'],['great'],['luck']]
-- OK! --

```
:::

