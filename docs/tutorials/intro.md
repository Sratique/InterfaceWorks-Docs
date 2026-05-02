---
sidebar_position: 1
---

# Intro

InterfaceWorks is a **Roblox specific version** of React. It removes any confusing Web Development naming and replaces it with more understandable Roblox terms.

## Getting Started

Get started by **downloading a InterfaceWorks binary** or **assemble InterfaceWorks Yourself**.

InterfaceWorks is also available on [Wally](https://wally.run/package/sratique/interfaceworks).

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
		{
			Properties={
				Size = UDim2.fromScale(0.5,0.5),
				AnchorPoint = Vector2.new(0.5,0.5),
				Position = UDim2.fromScale(WidthScale.Value,0.5)
			}
		},
		{
			InterfaceWorks.CreateElement("TextLabel", {
				Properties = {
					Text = "Test Hello world!",
					Size = UDim2.fromScale(1,1),
					BackgroundTransparency = 1,
					TextColor3 = Color3.new(1,1,1)
				}
			}),
		}
		)
	}
end

NewRoot:Attach(MyApp)
```

## Recommended tools

- [UI labs](https://create.roblox.com/store/asset/14293316215/UI-Labs) - [Source | Credits](https://devforum.roblox.com/t/ui-labs-modern-storybook-plugin-for-roblox/3109174)
	- Allows you to preview your UI code instantly without running your game.
	- Features a Hot-Reloader that updates your changes in real-time.
	- Provides a Sandboxed environment for your code to run in, you dont have to worry about reverting all your changes.
	- Native support for Fusion, Roact, React, Vide and Iris.
	- Support for Generic Stories allowing you to adapt the stories to your own Library or Framework.

## About example files

All example files use UI labs.

## Next steps

Now that You've created Your first InterfaceWorks UI, You can move onto more advanced scenarios and use cases.

# !! Warning !!
>**These docs are being built alongside InterfaceWorks! So not everything from the library might be reflected onto the docs immediately.**