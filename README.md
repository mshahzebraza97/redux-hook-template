# A ContextAPI+useReducer Store

> This is an open-to-all template which can be used to set up a local store quickly that works like redux. It is created by following a documented tutorial. ![Read Article](https://hmh.engineering/using-react-contextapi-usereducer-as-a-replacement-of-redux-as-a-state-management-architecture-336452b2930e)

# FAQs

1. What is the need of displayName method for React Components

   > A React Component is manually given a display name for the UX friendly error handling during the build/development phase. It is automatically removed in the production phase. For more info: ~[CLick Here](https://stackoverflow.com/questions/41581130/what-is-react-component-displayname-is-used-for)

2. Why do i need to make a hook and a component for the context and provider?
   > Using `React.useContext(-ctx-name-here-)` instead of `useCtx` and `ctxName.Provider` instead of `ctxProvide` is very verbose and also may produce syntax error.
