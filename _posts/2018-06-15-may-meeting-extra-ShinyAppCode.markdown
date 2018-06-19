---
layout: post
title:  "Code demo follow-up: Exploring transport routes, journey characteristics and postcode networks using R Shiny"
date:   2018-06-15
categories: edinbr
tags:   announcement
image:
author: acaterin
comments: true
---


<link href="/css/slideshowStyle.css" rel="stylesheet"/>
<script src="/assets/js/slideshowBehaviour.js"></script>


## Hello,
<br/>

I am pleased to say that following my Shiny code demo from a previous EdinbR meeting (see [here](http://edinbr.org/edinbr/2018/05/08/may-meeting.html)), I am now able to share a more generic version of the code. Because I do not own the associated data, I am not able to include that as well - however the script alone should hopefully be enough to demonstrate various things you can achieve in Shiny.

Prior to visualising the data within the Shiny app, it underwent some cleaning and transformations. Then, I used the `stplanr` package (as well as the [GraphHopper](https://www.graphhopper.com/) routing engine) to create the __spatial lines__ connecting the origins and destinations for each unique journey. After these preliminary steps (which are not included in the code below), I was able to move on to creating the Shiny app itself, which looks roughly like this:

<div class="slideshow-container">
  <!-- Full-width images with number and caption text -->
  <div class="mySlides fade">
    <div class="numbertext">1/3</div>
    <img src="/assets/images/2018-06-15-may-meeting-extra-ShinyAppCode/Caterina_CouncilTransport_ShinyApp_Tab1.png" style="width:100%">
    <div class="text">Leaflet map (blurred): the thicker/'redder' the route, the more travelled it is.</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">2/3</div>
    <img src="/assets/images/2018-06-15-may-meeting-extra-ShinyAppCode/Caterina_CouncilTransport_ShinyApp_Tab2.png" style="width:100%">
    <div class="text">Data table output tab</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">3/3</div>
    <img src="/assets/images/2018-06-15-may-meeting-extra-ShinyAppCode/Caterina_CouncilTransport_ShinyApp_Tab3.png" style="width:100%">
    <div class="text">visNetwork output tab</div>
  </div>

  <!-- Next and previous buttons -->
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<br>
<br>

<center>
<a href="https://thedatalab.com/"><img src="/assets/images/TheDataLab-Black-Logo-transparent-small.png" 
alt="Thanks to the The Data Lab for facilitating this project" width="50%"></a>
</center>

<br/>

You can read a very concise description of the project, and access the underlying **R Shiny code** via [The Data Lab's technical blog](https://thedatateam.silvrback.com/r-shiny-app-for-visualising-transport-routes), and cite it as:
>Constantinescu, A.C. (2018, June). Exploring transport routes, journey characteristics and postcode networks using R Shiny [R script as GitHub Gist]. Edinburgh, Scotland: The Data Lab Innovation Centre. Retrieved [Month] [Day], [Year], from [URL]

<br>



Hope this is useful to you! Remember you can always leave comments down below if you have questions or suggestions.

Caterina Constantinescu

