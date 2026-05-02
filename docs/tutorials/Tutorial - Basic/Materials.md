---
sidebar_position: 4
---

Materials are reusable element definitions.

You can define Classname specific properties and default properties that apply to every object.
It is also possible to update a UI Instance every frame using materials.

Creating a material should happen **outside** of an app.

To create a material we call the `InterfaceWorks.Materials.New()` function.

The arguments of that function go like this:
```
DefaultProperties: { [(string | "Default")]: { [string]: any } },
Reactivity: (InterfaceWorksObject) -> ...RBXScriptConnection?,
ConstantReactivity: ((InterfaceWorksObject) -> ())?
```

The first argument is a table that has classnames or a string - `default` (if you want a property to apply everywhere) as keys and values are tables with keys being the property name and property values as the values.

Reactivity is a function that is ran once on every target added to the Material. If it creates any disposable the return value should be function disposing of any disposables.

ConstantReactivity is a function that applies every frame to every target. This function should not be creating any disposables.

To apply a material we use the Material key in the addtional data table. Like this:

```
{
    Properties = {
        Some properties
    },
    Functions = {
        Some functions
    },
    Material = The material we created
}
```