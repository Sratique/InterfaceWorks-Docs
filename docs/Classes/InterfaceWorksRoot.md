This class is a Root for **all** ```InterfaceWorksBase``` objects.

> Inherits from:
>- [InterfaceWorksBase](/docs/Classes/InterfaceWorksBase.md)

### API

- `:Attach(Composition: () -> InterfaceWorksElement, ID: string | "Main")` - Creates a InterfaceWorksStroke with the index of **ID** and InterfaceWorksObject as its children. ID defaults to **Main**.

- `:DestroyStroke(ID: string | "Main")` - Deletes a InterfaceWorksStroke and its children with the given **ID**. Defaults to **Main**.