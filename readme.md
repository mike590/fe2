Plan:

use react router to listen to clicks on carousel and trigger change in FocusedComponent and url
AppComponent needs to get id from the url, and pass it to FocusedComponent.
  - Id stored in state of AppComponent? Or find the show based on id, and store that in state?

move carousel from top to bottom based on device size
style everything

3-4 Components:

AppComponent is top level, contains FocusedComponent and CarouselComponent
FocusedComponent (presentation comp)
CarouselComponent (presentation comp)
***MAYBE*** each show in the carousel is a SlotComponent

Ideas:
Does carousel have arrows on either side to rotate through? Or can it be done by hovering to one side?
Highlight shows in the carousel as you hover over them in the carousel
Info bubbles (like tooltips) when hovering for multiple seconds over a show in the carousel
Spice up the bg?
