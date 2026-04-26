This class is used for storing and applying material data.

> Inherits from:
>- [InterfaceWorksBase](/docs/apis/Classes/InterfaceWorksBase.md)

## API

- `:AddTarget` - Adds a target for the material.

## Properties

- Targets
    - Table containing all targets.
- ReactivityWorkers
    - Table containing all reactivity workers.
- ReactivityFunction
    - The function called every frame for every target.
- ConstantReactivityWorker
    - Worker for the ReactivityFunction RenderStepped event.