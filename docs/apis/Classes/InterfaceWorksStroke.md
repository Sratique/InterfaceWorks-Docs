This class is a container for `InterfaceWorksElement`s. It is used as an ID in the composer.

> Inherits from:
>
> - [InterfaceWorksBase](/docs/apis/Classes/InterfaceWorksBase.md)

## API

- `:InsertValue(Value: InterfaceWorksValue)` - Inserts the value into the stroke following the indexing rules.
- `:GetCurrentValue()` - Advances the pointer and returns the Current `InterfaceWorksValue`.
- `:ResetPosition()` - Resets the pointer to 0.
- `:Destroy()` - Destroys the stroke and all of its descendants.
- `:GetMouse()` - Returns the mouse created during the initialization of the stroke.

## Events

- `:MaxPointer(Callback: ()->())` - Fires the given callback when the internal pointer reaches its maximum amount. *(Not available during init!)*

## Properties

- Values
  - Container table for all `InterfaceWorksValue`s.
- RetracingComposition
  - `_InterfaceWorksComposition` used for getting the updated values `InterfaceWorksElement`s.
- CurrentComposition
  - Currently rendered `_InterfaceWorksComposition`.
- CurrentPosition
  - Pointer value used for `InterfaceWorksValue`s.
- ID
  - ID of the stroke ( Uses newproxy() )
- TotalValues
  - The total amount of values used in this stroke. *(Not available during init!)*
