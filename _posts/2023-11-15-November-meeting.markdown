---
layout: post
title:  "November 2023: health analysis - regression and economic inactivity"
date:   2023-11-15
categories: edinbr
tags:   announcement
image:
author: mikerspencer
comments: true
---



Hi everyone,
<br/>

November is here already. This month we're meeting in [50 George Square, G.05](https://www.ed.ac.uk/timetabling-examinations/timetabling/room-bookings/bookable-rooms3/room/0227_00_G.05) at 5pm on Friday 24th Nov. We've two talks on health data and analysis.

Register here: <https://www.meetup.com/edinbr/events/297376476>

<br/>


* **[Steven Kerr](https://www.linkedin.com/in/steven-kerr-014b19133/)** is a Chancellor's Fellow in the Usher Institute at the University of Edinburgh. He has PhDs in physics and economics where he worked on quantum gravity and game theory respectively. In the last three years, he has moved into epidemiology and health data science, where his research has focused on pandemics and safety/effectiveness of treatments. He is also interested in privacy enhancing technologies such as secure multiparty computation and their application in health data science.

* **[Jon Minton](https://www.linkedin.com/in/jon-minton-09480b13a/)**  is a public health researcher interested in population structure, data science, and more recently software development. His has been an avid (but occasionally jaded) R user for around twenty years. He has two cats who occasionally write code and emails for him when they walk over his keyboard.


---

<br/>

## In defence of linear regression

### [Steven Kerr](https://www.linkedin.com/in/steven-kerr-014b19133/)

In my field, linear regression is rarely used. It's often seen as being overly simple or crude. It is also typically regarded as inappropriate to use linear regression when the dependant variable has limited values - for example, it's a binary or count variable. In this talk I will argue that those criticisms are not as strong as commonly thought, and linear regression enjoys many advantages compared to other models. In particular, it is more interpretable and does not require iterative methods to fit. The latter may be of huge benefit from the point of view of carrying out analyses across multiple datasets with no information sharing.

---

## Modelling the drivers of working age economic inactivity using R: More complex than I realised

### [Jon Minton](https://www.linkedin.com/in/jon-minton-09480b13a/)

This presentation will describe a modelling and simulation framework developed to model flows into and out of economic (in)activity states, and estimating how much of an impact interventions on drivers of these flows could potentially have on the size of the economically inactive population.

The framework uses multinomial logistic regression, via the multinom function in the nnet package. It uses longitudinal data from the UKHLS, predicting the annual transition probabilities between seven mutually exclusive economic (in)activity states given both known demographic characteristics, which can’t be modified, and drivers/exposures, such as having poor mental or physical health, which potentially can be.

As well as demonstrating the modelling framework in action through a live demo, I will also discuss the importance of translating  ‘ground truths’ (such as path dependency and the influence of demography) into an appropriate model and simulation framework, rather than constraining ourselves to models and packages we are already familiar with, but which cannot capture some important aspects of the processes we are investigating. In attempting to do so, the modelling framework became more complex (or at least complicated) than I realised. However, in not attempting to do so, we pretend to know less about something than we really know, and produce models (and answers) that are dumber than they need to be. 


---


<blockquote class="embedly-card"><h4><a href="https://www.meetup.com/edinbr/events/297376476">November 2023: health analysis - regression and economic inactivity</a></h4></blockquote><script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

<br/>

