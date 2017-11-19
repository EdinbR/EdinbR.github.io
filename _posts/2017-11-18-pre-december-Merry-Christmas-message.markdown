---
layout: post
title: "December meeting substitute: Animating transitions between data states"
date: 2017-11-18
categories: edinbr
tags: demo
image:
author: acaterin
comments: true
---

Hi everyone,

As mentioned during our last meeting, we won't be hosting any talks in December, and shall be resuming activity in January 2018. But fear not! We've prepared something else instead: a fun & short demo for creating an animation in `R`, where random scatterplot points converge dynamically into a legible text message:

![](/assets/images/2017-11-18-pre-december-Merry-Christmas-message/MerryChristmas.gif)

How can you do this in `R`? By relying on packages: `ggplot2`, `tweenr` and `gganimate`, plus a little help from a *very* clever external tool: [**WebPlotDigitizer**](http://arohatgi.info/WebPlotDigitizer/app3_12/). Let's start by loading the required `R` packages:

```r
library(tweenr)
library(ggplot2)
# library(devtools)
# install_github("dgrtwo/gganimate")
library(gganimate)
```

```r
# We'll begin with very simple base R plot, and then save it locally.
# This will map out the desired locations of points -
# locations which we'll later reverse-engineer online:
plot( c( 0, 1 ), c( 0, 1 ),
      ann = F,
      bty = 'n', type = 'n',
      xaxt = 'n', yaxt = 'n' )
text( x = 0.45, y = 0.55, paste( "Merry Christmas" ),
      col = "black", srt = 45, vfont = c( 'script', 'bold' ),
      cex = 3 )
text( x = 0.52, y = 0.46, paste( "from EdinbR!" ),
      col = "black", srt = 45,
      cex = 2 )
# Alternative to manual export:
# message <- recordPlot()
# Then use png(); print(message); dev.off() to export the 'message' plot as a .png.
```

What you get is this:

![](/assets/images/2017-11-18-pre-december-Merry-Christmas-message/MerryChristmasStartPoint.png)

Now upload this very simple plot to [**WebPlotDigitizer**](http://arohatgi.info/WebPlotDigitizer/app3_12/), and let it work its magic. Its author, Ankit Rohatgi offers a very useful video tutorial [here](https://youtu.be/P7GbGdMvopU) (and you can find further information [here](https://automeris.io/WebPlotDigitizer/tutorial.html)).

In this case, the job of WebPlotDigitizer is to convert our text to points with specific coordinates - and to do so quite precisely, so we don't end up with very fuzzy lettering. You can see the interface below:

![](/assets/images/2017-11-18-pre-december-Merry-Christmas-message/HowToDigitizeAnImageWithArohatgi.png)

Once you're happy with how precisely the points trace / are mapped onto the shape of the letters, you can export their coordinates as a [.csv file](/assets/images/2017-11-18-pre-december-Merry-Christmas-message/MerryChristmasDigitizedPoints.csv), and return with it in `R`:

```r
# After extracting the point coordinates with WebPlotDigitizer (i.e., the points which make up the text), return here with the outputted .csv file:
digitized_points <- read.csv( "/path/to/my/points/MerryChristmasDigitizedPoints.csv",
                              header = F )

# Now create a randomized version of the data (i.e., randomly sort one of the two columns, independently of the other):
digitized_points_random <- digitized_points
digitized_points_random$V1 <- digitized_points_random$V1[ sample( 1 : nrow( digitized_points_random ),
                                                                  nrow( digitized_points_random ),
                                                                  replace = F ) ]

# Further create a list of the various states of the data: random, and legible text message.
# NB: The 'legible' data will be sandwiched between two copies of the random data,
# to ensure a smooth transition in the animation:

digi_data_states <- list( digitized_points_random, digitized_points, digitized_points_random )
tween_message <- tween_states( digi_data_states, tweenlength = 1,
                               statelength = 0.5, ease = "sine-out",
                               nframe = 200 )

p <- ggplot( tween_message, aes( x = V1, y = V2 ) ) +
  geom_point( aes( frame = .frame ) )

animation::ani.options( interval = 1 / 15 )
gganimate( p, title_frame = FALSE,
           filename = "/path/to/my/points/MerryChristmas.gif" )
```

So, what happened above is that `tweenr` took as input the various data states, and created the transition between them. Then, `gganimate` created an animation for it.

Hope that was fun and perhaps even **useful** for you - especially since the same idea of animating data transitions is applicable to things like the well-known [**Anscombe Quartet**](https://en.wikipedia.org/wiki/Anscombe%27s_quartet), or more recently, the [**Datasaurus Dozen**](https://www.autodeskresearch.com/publications/samestats)! Comments are welcome below.

Enjoy the winter holidays & see you in January 2018!

Caterina Constantinescu

