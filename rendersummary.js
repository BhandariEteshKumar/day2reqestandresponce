-> While parsing the HTML the parser inserts the missing tags.HTML parsing can be halted.
-> Script, link, styles tags can halt the js excecution. link and styles tag can halt the js excecution.
-> While parsing if it has some external things to fetch, it fetches it first and continues the parsing.
-> It is recommended to use the script tag at the bottom of html so that the parsing is uninterrupted, 
   it will be fast to render.
-> We have muliple trees they are, RenderObjects,RenderStyles, RenderLayers, Lineboxes.
-> The paint setup takes layed out render trees and paints bottom up. it builds up over 12 phases.
-> The layout computes where a node is positioned on the screen