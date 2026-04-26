This class is the main controller for **all** Roblox Instances.

> Inherits from:
>- [InterfaceWorksBase](/docs/apis/Classes/InterfaceWorksBase.md)

## API

- `:Destroy()` - Destroys the Object and the Roblox Instance Host, cleans up all function code that still could be running. (Is recursive)
- `:GetTreeStroke()` - Returns the parent stroke. (If an object is inside of a fragment, it returns the non-fragment stroke, due to how fragments are indexed.)

## Properties

- Workers
    - All functions parented to the Object.
- Animations
    - Table containing all `InterfaceWorksAnimationData` structs.