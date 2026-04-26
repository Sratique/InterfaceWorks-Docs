This struct is a temporary container table for all children, functions and properties data including classnames.

### Structure

The structure of this struct goes as follows:

```
{

	ID: string,
	Type: "Object" | "Property" | "Fragment",
	Ps: { [string]: any }?,
	Fs: { [InterfaceWorksInputType | string]: (any) -> any }?,
	Cn: { [string | number]: InterfaceWorksElement }?,
	Mt: InterfaceWorksMaterial?,
	An: InterfaceWorksAnimationData?,
	Composition: _InterfaceWorksComposition?,
	FragmentArguments: { any }?,
}
```

### Use cases

This struct is used as a full Element and as an Element shorthand for Instances that act more like properties (for example a UICorner).