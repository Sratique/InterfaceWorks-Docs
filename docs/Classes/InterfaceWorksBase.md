This class is a starting point for **all** classes in InterfaceWorks.

## API

- `:Insert(Object: InterfaceWorksBase, Name: string?)` - Inserts the given Object with the index as the Name argument or a number. If possible, also parents the Instance of the Object to its parent's Instance.
- `:GetChildren()` - Returns all parented Ojects using `:Insert()`.
- `:GetTreeRoot()` - Returns the `InterfaceWorksRoot` Object.

## Properties

- Host
    - The Instance that the Object is created for.
    - Not required. Classes like `InterfaceWorksValue` don't have this property.