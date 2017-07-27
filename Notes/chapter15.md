# Chapter 15: Layout (notes)

* fixed positioning: an element is positioned relative to the browser window and doesn't move when the use scrolls up or down the apge. 
  good for headings/nav bars so that when the user scrolls the bar is still visible
* floating element: element is out of normal flow and can be positioned to the far left or right
  anything else will flow around the floated element. 
  - clearing floats: no element in the containing element should touch the left or right hand sides of a box. 
    .clear{
    clear: left;}
  - 
  may be used to place boxes side by side. 
* relatie positioning: 
  "p.example { 
    position: relative; 
    top: 10px;
    left: 100px;}"
  able to offset element after it is declared as relative, which moves it 
* absolute positioning: 
  does not affect other elements of the page.
* z-index: allows you to set which element should appear on top. the higher the z-index, the closer to the front of the screen. 

_Columns with Div_ 
* width sets the width of the columns
* float positions columns beside eachother. 
* margin: creates gap. 

* Fixed Width Layouts: fixed sizes. 
* Liquid Layouts: stretch and contract in response to browser window. 
* Grid Layouts: pg 388, frameworks
