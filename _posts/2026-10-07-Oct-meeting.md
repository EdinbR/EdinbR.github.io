---
layout: post
title:  "October 2026: Linting and data viz silos"
date:   2026-10-07
categories: edinbr
tags:   announcement
image: 
author: mikerspencer
comments: true
---



* Title: Linting and data viz silos
* Speakers: Etienne Bacher and Neil Pettinger
* Date: Wednesday 21st October 2026, 6.00PM - 7.00PM
* Location: [2.11 Appleton Tower](https://www.uoecollection.com/conferences-events/venue-hubs/old-town-campus/appleton-tower/), [The University of Edinburgh](https://www.openstreetmap.org/way/514395905)
* Register: [luma.com/nulvgls1](https://luma.com/nulvgls1)


Welcome to our first session of the 2026/2027 season!

---
 
## Etienne Bacher: Jarl, a new R linter

No matter their background, all programmers end up writing code that is sometimes incorrect, inefficient, or hard to read.
Moreover, as AI models become more efficient, it becomes harder to manually review the massive amount of code being produced to ensure it meets certain standards.

A linter is a tool that does static analysis (meaning it doesn't execute the code it analyses) to find bad practices and potential improvements, ranging from using new R syntax to simplify code to bugs in “if” conditions.
Historically, the large majority of linting in R was done via the package lintr.
In this talk, I will present [Jarl](https://jarl.etiennebacher.com/), an R linter written in Rust that can analyse most R projects in less than a second.
I will show how to set up, configure, and use Jarl in various contexts, whether for day-to-day use as you code or in continuous integration to ensure old and new code respects certain rules.
I will also show how you can contribute to Jarl to extend the set of rules it supports.

[Etienne Bacher](https://www.etiennebacher.com/) is a Research Software Engineer at University College London, where he works on [Palaeoverse](https://palaeoverse.org/).
Prior to that, he completed a PhD in Economics in 2024 at the University of Luxembourg and LISER.
In parallel, he created various R packages, such as polars and tidypolars 
to handle large data, and contributed to many more.


---

## Neil Pettinger: For a Few Dollars More

*Can we use the language conventions of R to improve our thinking about whole system problems?*

In the NHS many patient flow problems manifest themselves as ‘whole system’ problems.
One way of bringing data to bear on these whole system problems is by creating visualizations that combine metrics from different parts of the system in order to make clear the relationships between these different parts of the system.

But many NHS data analysts lack the domain knowledge to grasp the need for cross-silo data visualization.
In order to fill this knowledge gap, I wonder if it might be possible to organise dataframes in R scripts in such a way that when we create visualizations using {ggplot2}, we explicitly take data from different silos and combine them in the same visualization.
In other words, is it possible to make use of some of the language conventions of R to change analysts’ way of thinking about the reality they’re trying to visualize?

[Neil](https://kurtosis.co.uk/) is a healthcare data analyst and trainer who lives in Edinburgh. He worked as an NHS information manager for 23 years before going freelance in 2008.


---



<blockquote class="embedly-card"><h4><a href="https://luma.com/nulvgls1">October 2026 </a></h4></blockquote><script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

<br/>

