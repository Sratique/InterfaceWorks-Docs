---
sidebar_position: 1
---

# Intro

InterfaceWorks is a **Roblox specific version** of React. It removes any confusing Web Development naming and replaces it with more understandable Roblox terms.

## Getting Started

Get started by **downloading a InterfaceWorks binary** or **assemble InterfaceWorks Yourself**.

### Requirements for assembling

- [Rojo](https://rojo.space) version 7 or above:
  - Depending on Your use case, You might want to use different .project.json files.
- [Darklua](https://darklua.com/):
  - This is **always required** with the darklua properties file in the repo.

### Code organization

It is good practice to put libraries like InterfaceWorks into **ReplicatedStorage**. You can also put it into **subdirectories** in ReplicatedStorage, but remember to correctly set your **require path**.

## Creating a new Root

To create a new default Root, use the ```.CreateRoot()``` function. The return value is a ```InterfaceWorksRoot``` object. By default the Instance container is a ScreenGui that is accessible through the **.Host** property of the InterfaceWorksRoot, change the Parent of that ScreenGui to anything You'd like. There is an option to create Your own Instance container and pass it as the first argument of the function. Using the ```InterfaceWorksRoot```, you can render interface elements just like in React using the ```:Attach()``` function.

### Code example:
``` luau
local InterfaceWorks = require(game:GetService("ReplicatedStorage").InterfaceWorks)
local NewRootHost = Instance.new("ScreenGui")
NewRootHost.Parent = game.Players.LocalPlayer.PlayerGui
NewRootHost.IgnoreGuiInset = true

local NewRoot = InterfaceWorks.CreateRoot(NewRootHost)

function MyApp()
	
	local WidthScale = InterfaceWorks.Value.New(0)
	
	return {InterfaceWorks.CreateElement("Frame",
		{Size = UDim2.fromScale(0.5,0.5), AnchorPoint = Vector2.new(0.5,0.5), Position = UDim2.fromScale(WidthScale.Value,0.5)},
		{},
		{
			InterfaceWorks.CreateElement("TextLabel", {Text = "Test Hello world!", Size = UDim2.fromScale(1,1), BackgroundTransparency = 1, TextColor3 = Color3.new(1,1,1)}),
		}
		)
	}
end

NewRoot:Attach(MyApp)
```

## Next steps

Now that You've created Your first InterfaceWorks UI, You can move onto more advanced scenarios and use cases.

# !! Warning !!
>**These docs are being built alongside InterfaceWorks! So not everything from the library might be reflected onto the docs immediately.**