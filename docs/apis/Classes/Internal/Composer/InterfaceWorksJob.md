This class is *similar* to something like a promise system.

## API

- `:Destroy()` - Destroys the `InterfaceWorksJob` and ends the thread.
- `:SetArgs()` - Set the arguments passed into the new thread.
- `:SetEnv(Env: { [any]: any })` - Sets the environment of the thread.
- `:GetArtifact()` - Returns the environment.
- `:Run()` - Used to create and run a new thread while ending the old one if exists.

## Events

- `:Finished( Callback: ()->() )` - Fires the given callback when the thread finishes. If it is interrupted, the callback will wait until the new scheduled job will finish.

## Properties

- Environment
    - Default environment used. Created when creating the job object.
- Current
    - The current running thread. Can be nil.