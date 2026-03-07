This class is a container for `InterfaceWorksElement`s. It is used as an ID in the composer.

> Inherits from:
>
> - [InterfaceWorksBase](/docs/Classes/InterfaceWorksBase.md)

## API

- `:InsertValue(Value: InterfaceWorksValue)` - Inserts the value into the stroke following the indexing rules.
- `:GetCurrentValue()` - Advances the pointer and returns the Current `InterfaceWorksValue`.
- `:ResetPosition()` - Resets the pointer to 0.

## Properties

- Values
  - Container table for all `InterfaceWorksValue`s.
- RetracingComposition
  - `_InterfaceWorksComposition` used for getting the updated values `InterfaceWorksElement`s.
- CurrentComposition
  - Currently rendered `_InterfaceWorksComposition`.
- CurrentPosition
  - Pointer value used for `InterfaceWorksValue`s.
