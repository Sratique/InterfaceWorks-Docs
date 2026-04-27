---
sidebar_position: 1
---

InterfaceWorks syntax is similar to already existing UI libraries like React.

1. To create a container for our app/apps we have to create a <strong>[`InterfaceWorksRoot`](/docs/apis/Classes/InterfaceWorksRoot.md)</strong>. To get a <strong>Root</strong> we call the CreateRoot function in the Root module.
    ```
    local NewRoot = InterfaceWorks.CreateRoot()
    ```

    By default, the container in which the Roblox Instances will be held is a ScreenGui. We can also pass in our own container for example a DockWidgetGui as the first argument. InterfaceWorks will then parent all Instances into that widget.

    ```
    local NewRoot = InterfaceWorks.CreateRoot(SomeDockWidget)
    ```

2. Creating an app is as simple as creating a local function. Inside that function the return value should be a table containg your elements.

    ```
    local function MyApp()

        return {Some elements}

    end
    ```
    This function can hold calls to Values and other InterfaceWorks APIs, but we'll come back to that later.

3. To create an element we use the CreateElement function and pass in the right arguments. The first argument is the ClassName of the Instance we want to create. Second we have a struct for additional data. While there is a lot to this struct, we will only be focusing on the properties table right now. The third argument is a table of children. It contains children elements.
    ```
    InterfaceWorks.CreateElement(
        "Frame",
        {
            Properties = {
                Size = UDim2.fromOffset(150,150),
            }
        },
        {
            Some children elements
        }
    )
    ```
    This code creates an Frame Instance with the size of 150x150 pixels.
4. Now we have to piece it all together and create a test app.
    ```
    local function MyApp()
        return {Element("Frame", {
            Properties = {
                Size = UDim2.fromScale(1, 1),
                BackgroundColor3 = Color3.fromRGB(20, 20, 20),
            }
        }, {
            Sidebar = Element("Frame", {
                Properties = {
                    Size = UDim2.new(0, 200, 1, 0),
                    BackgroundColor3 = Color3.fromRGB(30, 30, 30),
                }
            }, {
                HomeButton = Element("TextButton", {
                    Properties = {
                        Size = UDim2.new(1, 0, 0, 50),
                        Text = "Hello world!",
                        BackgroundColor3 = Color3.fromRGB(40, 40, 40),
                        TextColor3 = Color3.new(1, 1, 1),
                    }
                })
            }),

            Content = Element("ScrollingFrame", {
                Properties = {
                    Size = UDim2.new(1, -200, 1, 0),
                    Position = UDim2.fromOffset(200, 0),
                    BackgroundTransparency = 1,
                    CanvasSize = UDim2.fromScale(0, 2),
                }
            }, {
                Title = Element("TextLabel", {
                    Properties = {
                        Size = UDim2.new(1, 0, 0, 100),
                        Text = "Your own first InterfaceWorks app!",
                        TextScaled = true,
                        TextColor3 = Color3.new(1, 1, 1),
                        BackgroundTransparency = 1,
                    }
                })
            })
        })}
    end
    ```
5. To tell InterfaceWorks to render an app, use the Attach function of the [`InterfaceWorksRoot`](/docs/apis/Classes/InterfaceWorksRoot.md).
    ```
    NewRoot:Attach(MyApp)
    ```
6. The final outcome should look something like this:
    ```
    local InterfaceWorks = require(Path-To-InterfaceWorks)

    local Element = InterfaceWorks.CreateElement

    local function MyApp()
        return {Element("Frame", {
            Properties = {
                Size = UDim2.fromScale(1, 1),
                BackgroundColor3 = Color3.fromRGB(20, 20, 20),
            }
        }, {
            Sidebar = Element("Frame", {
                Properties = {
                    Size = UDim2.new(0, 200, 1, 0),
                    BackgroundColor3 = Color3.fromRGB(30, 30, 30),
                }
            }, {
                HomeButton = Element("TextButton", {
                    Properties = {
                        Size = UDim2.new(1, 0, 0, 50),
                        Text = "Hello world!",
                        BackgroundColor3 = Color3.fromRGB(40, 40, 40),
                        TextColor3 = Color3.new(1, 1, 1),
                    }
                })
            }),

            Content = Element("ScrollingFrame", {
                Properties = {
                    Size = UDim2.new(1, -200, 1, 0),
                    Position = UDim2.fromOffset(200, 0),
                    BackgroundTransparency = 1,
                    CanvasSize = UDim2.fromScale(0, 2),
                }
            }, {
                Title = Element("TextLabel", {
                    Properties = {
                        Size = UDim2.new(1, 0, 0, 100),
                        Text = "Your own first InterfaceWorks app!",
                        TextScaled = true,
                        TextColor3 = Color3.new(1, 1, 1),
                        BackgroundTransparency = 1,
                    }
                })
            })
        })}
    end

    local NewRoot = InterfaceWorks.CreateRoot(target)
    NewRoot:Attach(MyApp)
    ```

That's all there is to it! In next chapters you will learn more about Values, Functions and many more things.