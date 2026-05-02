---
sidebar_position: 2
---

All input types are accessible at `Root.InputTypes`.

## Input related

1. Click - Fired when the user let's go of their left mouse button while hovering over the UI element.
2. Drag - Fired while the user is moving their mouse and holding left mouse button over the UI element.
3. BeganClick - Fired when the user begins clicking the UI element using left mouse button.
4. Focus - LIMITED TO TEXTBOX - Fired when the user focuses on a textbox.
5. FocusLost - LIMITED TO TEXTBOX - Fired when the user focuses away from a textbox.
6. Enter - Fired when the user's mouse enters the element.
7. Leave - Fired when the user's mouse leaves the element.
8. RightClick - Fired when the user let's go of their right mouse button while hovering over the UI element.
9. RightDrag - Fired while the user is moving their mouse and holding right mouse button over the UI element.
10. RightBeganClick - Fired when the user begins clicking the UI element using right mouse button.

## InterfaceWorks related

1. Once - Fired during object creation, only once and never again. The function in once should always return a tuple of functions that cleanup the Once event (if required).
2. Render - Fired every ReComposition job. (Every value change for example)