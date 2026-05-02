---
sidebar_position: 5
---

Creating animations in InterfaceWorks is very easy.

To create an animation we use the `InterfaceWorks.CreateAnimation()` function.

The arguments of that function go as follows:
```
Goals: { [string]: any },
BeginningPoint: { any }?,
BeginningPointRepeats: boolean?,
Duration: number,
EasingStyle: Enum.EasingStyle?,
EasingDirection: Enum.EasingDirection?,
RepeatCount: number?,
Reverses: boolean?,
delayTime: number?,
```

Goals is a table with keys being the property name we want to update and values being the value we want the property to update to.

BeginningPoint has the same structure as Goals, but instead of it being the end point of the animations, it is the point where the animation begins.

BeginningPointRepeats is a boolean that describes if we want to always apply the BegginingPoint or only during the first animation play.

Duration is the length of the animation in seconds.

The rest of the properties are just unpacked properties of a `TweenInfo.New()`.