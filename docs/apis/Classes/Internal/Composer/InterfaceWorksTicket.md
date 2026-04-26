This class is used for storing data in the renderer queue.

## API

- `:Destroy()` - Destroys the ticket and all the related data. Should not be called outside of the Composer/Tickets module because it could cause corruption in the renderer queue.

## Properties

- Job
    - The callback passed when creating the object.
- ID
    - The ID for the ticket passed when creating the object.
- Environment
    - Meant for use with `InterfaceWorksJob`.