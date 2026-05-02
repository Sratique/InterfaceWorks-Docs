---
sidebar_position: 3
---

Now to make our UI update on interactions or whenever really, we must use Values.

They function mostly like actual Roblox values, so adjusting to them shouldn't be an issue.

We have to create values **inside** of an app. We do it by accessing the `.New()` function at `InterfaceWorks.Value.New()`.

An example of how to create a value:
`local Counter = InterfaceWorks.Value.New(0)`

That 0 we pass in as the argument is the starting point for that value.

To access the data stored inside the object we would do:
`Counter.Value`
and to set it to a new value:
`Counter.Value = 10`.