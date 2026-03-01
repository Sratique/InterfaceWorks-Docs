This class is a temporary container table for all children, functions and properties data including classnames.

### Structure

The structure of this class goes as follows:

```

ID: string,
Ps: { [string]: any },
Fs: { [InterfaceWorksType | string]: (any) -> any }?,
Cn: { [string | number]: InterfaceWorksElement }?,
Type: "Object" | "Property",

```

### Use cases

This class is used as a full Element and as an Element shorthand for Instances that act more like properties (for example a UICorner).