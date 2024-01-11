---
layout: post
title:  "January 2024: Rolling statistics and moving windows"
date:   2024-01-11
categories: edinbr
tags:   announcement
image:
author: mikerspencer
comments: true
---



Hi everyone,
<br/>

Happy New Year, it's 2024! This month we're meeting in [50 George Square, G.06](https://www.ed.ac.uk/timetabling-examinations/timetabling/room-bookings/bookable-rooms3/room/0227_00_G.06) at 5.30pm on Friday 26th Jan. We've two talks on rolling statistics, or moving windows.

Register here: <https://www.meetup.com/edinbr/events/298492818>

<br/>


* **[Jan Gorecki](https://fosstodon.org/@jangorecki)** came to R around 2013 when databases happened to be not enough for data analytics. Once he discovered data.table he never went back to databases for data processing. Amazed by data.table's UX (simply a base R data.frame on steroids), he started contributing high level functions that he used in databases and data warehouses. Over years he jumped into C and from 2018 contributed first high performance routines. Used R in production in UK mortgages company and in H2O.ai as infrastructure orchestration. Developed many R packages over years. Taught by the time to be very conservative in (and if !) picking dependencies.

* **[Nicolaos Christofides](https://cran.r-project.org/web//packages/timeplyr/index.html)** is a Healthcare Analyst at Public Health Scotland. With a background in statistics, epidemiology, and finance, he enjoys utilising his technical expertise to analyse healthcare data, building tools to help solve real-world problems. During the COVID-19 pandemic, he played a vital role in reporting key trends and insights to the Scottish government and NHS Boards. In this time he gained a particular interest in time series data, one of the inspirations for timeplyr. Also in his spare time he enjoys cooking, drumming, and writing R code.



---

<br/>

## Rolling statistics

### [Jan Gorecki](https://fosstodon.org/@jangorecki)

Rolling statistics are an interesting topic for optimizations, therefore in my talk I will use R language to present naive implementation, and the optimized implementation, on a simple case of rolling mean.
Then I will move to data.table implementations of rolling statistics explaining possible optimizations in other functions, which are not that straightforward anymore, like min/max and, actually very complex, median.
Finally benchmarks will be presented comparing data.table implementations to base R, pandas, polars, slider/dplyr, duckdb and spark.

---

## timeplyr - Fast Tidy Functions for Date and Time Manipulation

### [Nicolaos Christofides](https://cran.r-project.org/web//packages/timeplyr/index.html)

We all know dates in R are difficult and frustrating at the best of times, so timeplyr seeks to make this much easier!

While most time-based packages are designed to work with relatively small, clean and aggregate data, timeplyr contains a set of tidy tools to efficiently handle big messy data, as well as being able to naturally manage many time-based variables such as dates, date-times, year-months and others.

timeplyr aims to be a companion to the successful dplyr package but with speed in mind, with most of the calculations combining the speed of collapse and the efficiency of data.table.


---


<blockquote class="embedly-card"><h4><a href="https://www.meetup.com/edinbr/events/298492818">January 2024: Rolling statistics and moving windows</a></h4></blockquote><script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

<br/>

