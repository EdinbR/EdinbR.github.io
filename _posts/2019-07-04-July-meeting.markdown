---
layout: post
title:  "July meeting: Bayesian inference with stan & removing code duplication with dupree"
date:   2019-07-04
categories: edinbr
tags:   announcement
image:
author: acaterin
comments: true
---



Hi everyone,
<br/>


Our next meeting will take place on the 17th of July, from 5.30pm, in Appleton Tower room 2.14 (see the map below for further details). As usual, the meeting will be open for all to attend, and newcomers / beginners are very welcome!


Our first speaker is **Ian White**, from the Institute of Evolutionary Biology, University of Edinburgh. He will be discussing:

## The stan MCMC package for R

(slides [here](https://github.com/EdinbR/edinbr-talks/blob/master/2019-07-17/IanWhite_Rstantalk.pdf))

> Stan is open-source software for statistical modelling and high-performance statistical computation. It provides, among other things, full Bayesian statistical inference with MCMC sampling, approximate Bayesian variational inference, and penalized maximum likelihood estimation with optimization. For an overview, see Carpenter et al's 2017 paper on [Stan: A probabilistic programming language](https://www.jstatsoft.org/article/view/v076i01). I will give some simple examples using the R interface to Stan (package `RStan`).



Our second speaker will be [**Russell Hyde**](https://www.gla.ac.uk/researchinstitutes/cancersciences/staff/russellhyde/), Research Associate at the Institute of Cancer Sciences within Glasgow University. Russell will be sharing his work on a new R package:

## Fixing duplicated code with dupree

(slides [here](http://rpubs.com/russH/dupree-intro) or [here](https://github.com/EdinbR/edinbr-talks/tree/master/2019-07-17))


> When writing analysis scripts I frequently slip into two modes of working: the 'rush-rush-rush-isn't-everything-exciting' exploratory phase where I write code too fast, 
    and the 'wow-this-script-is-way-too-complicated' (and haven't I written **that** somewhere else? and why's that variable called **that**? and where did those tabs come from?) maintenance phase, where I have to edit down the rushed code before I can do anything new. To find a happy midpoint between these two extremes I started using `styler` and `lintr` (to catch formatting inconsistencies early) and I started developing [a tool called](https://github.com/russHyde/dupree) `dupree` to help detect when code duplication starts entering my projects. By finding duplicated code, I can more quickly decide what bits of code to generalise.
<br>
> `dupree()` can be run on sets of "*.R" and "*.Rmd" files, or across all files in an R package. But, to my knowledge, only two people have ever used it (myself included)... So in this talk I'm going to give some examples of how `dupree` works and how it might help your R workflow. I'm also going to give an introduction to `lintr`, because `dupree` uses some code from `lintr`  (and I really like `lintr`). 
<br> **I would be delighted if a few of you could try running `dupree` on one of your projects / packages before the talk.** Feel free to ping me via the `dupree` [github-issues page](https://github.com/russHyde/dupree/issues) or on [twitter](https://twitter.com/haematobot) with any feedback, in particular if any (or all) of the documentation is difficult to follow.
 



<blockquote class="embedly-card"><h4><a href="https://www.meetup.com/EdinbR/events/262874336/">Bayesian inference with stan & avoiding code duplication with dupree</a></h4><p>Our meeting is open for all to attend, and newcomers / beginners are very welcome! Our first speaker is Ian White, from the Institute of Evolutionary Biology, University of Edinburgh. He will be discussing the stan MCMC package for R.</p></blockquote>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>




<br/>




Here is a map of where we'll be hosting the meeting (which will be followed by a trip to the nearby Soul Nation pub):

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.2880000891505!2d-3.1891977839617285!3d55.94438008466733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c783851c5b41%3A0x3d222164a50901a6!2sAppleton+Tower%2C+11+Crichton+St%2C+Edinburgh+EH8+9LE!5e0!3m2!1sen!2suk!4v1560293102541!5m2!1sen!2suk" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>

<br/>
See you there!

Caterina Constantinescu
