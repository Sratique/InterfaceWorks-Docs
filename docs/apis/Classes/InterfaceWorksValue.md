This class is mainly responsible for firing Retracing events.

> Inherits from:
>- [InterfaceWorksBase](/docs/apis/Classes/InterfaceWorksBase.md)

## API

- `:Set(Value: any)` - Sets the value as the first given argument. **DEPRECATED**
- `:Destroy()` - Destroys the value.

## Events

- `:OnChange(callback: () -> ())` - On every Value change the callback function is fired.

## Properties

- Value
    - Can be read and modified freely.