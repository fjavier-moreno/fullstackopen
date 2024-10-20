```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: The user enters a text and presses the send button

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: JSON message
    deactivate server

    Note right of browser: The browser executes the callback function that insert the new note
```
