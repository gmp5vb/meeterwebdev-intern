# Chapter 13: Boxes (notes)

* if content does not fit inside specified box size: "overflow: scroll;"
* margin is outside border and can therefore separte elements. often pixels, sometimes % or em.  
  if one box is next to another, margins collapse so that the larger is used.  
  margin is added to width of box.  
  shorthand: "margin: top right bottom left" or "margin: top/bottom right/left"  
  margin: auto will center elements  
    
* padding is between border and content. usually specified in pixels  
  if padding is added to a box with a specified width, the padding will increase the size of the box.  
  shorthand: "padding: top right bottom left"  
    
* border: specified in pixels or thin/medium/thick.  
  border-style: solid/dotted/dashed/double/groove/ridge/inset/outset  
  border-color: hex, RGB, CSS color names  
  shorthand- "border: width style color"  
    
* don't know when i would use border-image.  
* box-shadow: horizontal vertical blur color  
* border-radius for roung corners  
  more specifics for horizontal and vertical parts will create more complex shapes.  
  "border-top-left-radius: 80 px 50px;   
