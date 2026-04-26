---
sidebar_position: 1
---

## Global config

### InterfaceWorksDebug
Used to display more verbose debug info.

### InterfaceWorksDebuggerKernel
Should link to the [DebuggerKernel](https://github.com/Sratique/InterfaceWorks-Debugger).

## Links

### Value
Links to the ValueController.

### InputTypes
Links to InputTypes used for reactivity.

### CreateProperty
Links to the shorthand for properties.

### Materials
Links to the MaterialController.luau

### Assets
Links to the AssetsBank.

## API

### CreateRoot

> CreateRoot( Container: Instance? ): InterfaceWorksRoot

Create a `InterfaceWorksRoot` with the first argument being the Container. By default creates a ScreenGui later accessible at .Host of the returned `InterfaceWorksRoot`.

### CreateElement

> InterfaceWorks.CreateElement( Classname: string, Data: InterfaceWorksElementData, Children ): InterfaceWorksElement

Returns a InterfaceWorksElement struct with the given data.

### CreateAnimation

```
InterfaceWorks.CreateAnimation(AnimationData: {
	Goals: { [string]: any },
	BeginningPoint: { any }?,
	BeginningPointRepeats: boolean?,
	Duration: number,
	EasingStyle: Enum.EasingStyle?,
	EasingDirection: Enum.EasingDirection?,
	RepeatCount: number?,
	Reverses: boolean?,
	delayTime: number?,
}): InterfaceWorksAnimationData
```

Returns InterfaceWorksAnimationData with the given data.

### CreateFragment

> InterfaceWorks.CreateFragment( Composition: _InterfaceWorksComposition, ...: any ): InterfaceWorksElement

Returns a InterfaceWorksElement with the `Fragment` type. All other arguments are passed into the creation of the fragment.