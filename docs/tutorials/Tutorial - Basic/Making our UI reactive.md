---
sidebar_position: 2
---

In order to make our UI reactive we have to detect the user's input and apply it to our UI.

To apply input events to our elements we use the Functions table in the additional data table of our element. Like this:
```
{
    Properties = {
        Some properties
    },
    Functions = {
        [InterfaceWorks.InputTypes.Click] = function(self)
            print("Hello world!")
        end
    }
}
```

There are many input events already available, but if you feel like something is missing feel free to make an issue in our library github repo.
You can check out the available input types [here](/docs/apis/Input%20types.md).

You might be wondering what is that self argument in the function. That is the current object to which the input event belongs to. The very important distinction is that this is not the Instance, if you wanted to access the Instance you would have to access the `.Host` property of the object.