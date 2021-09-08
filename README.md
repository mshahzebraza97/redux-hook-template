# About the project

This is basically an attempt to create a redux like store locally with the combo of

- Context API
- useReducer Hook
- & other React Hooks (useEffect)

  Following URLs may help in understanding the

  > This is an open-to-all template which can be used to set up a local store quickly that works like redux. It is created by following a documented tutorial.
  > ![Read Article 1](https://yudhajitadhikary.medium.com/implementation-of-react-hooks-context-api-reducer-all-together-bf2df11070b7) , ![Read Article 2](https://hmh.engineering/using-react-contextapi-usereducer-as-a-replacement-of-redux-as-a-state-management-architecture-336452b2930e)

# About useReducer

Hook Syntax :
`const [state, dispatchFn ] = useReducer(reducerFn, initialState, initialStateFn)`

DispatchFn Syntax:

```
dispatchFn = ({type, data}) => {
  ' The object passed in this function is called `action object` as a whole, which is then passed in the reducerFn.
  ' The `action object` has two parts. 1. Type, 2. Data(optional)
}
```

```
const ReducerFn = (state, action) => {
  switch (action.type) {
      // do something with the action
  }
}
```

# FAQs

1. What is the need of displayName method for React Components

   > A React Component is manually given a display name for the UX friendly error handling during the build/development phase. It is automatically removed in the production phase. For more info: ~[CLick Here](https://stackoverflow.com/questions/41581130/what-is-react-component-displayname-is-used-for)

2. Why do i need to make a hook and a component for the context and provider?

   > Using `React.useContext(-ctx-name-here-)` instead of `useCtx` and `ctxName.Provider` instead of `ctxProvide` is very verbose and also may produce syntax error.

3. Find it difficult to use destructuring in the function parameters?

   > https://stackoverflow.com/questions/59687888/why-i-cant-desctructure-value-from-a-target-in-onchange-event

4. Why is the currentTarget value shown null in when event object is logged in the console. However, it shows a value if event.currentTarget is directly logged on the console?

   > ![Check This Answer](https://stackoverflow.com/a/66086044/11908014) or you can also read the ![Mozilla Doc for currentTarget](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget)

5. Can we create a generalized function to update the individual form-control-states upon the call of on-change-event?

   > Yes, you can! In fact it has been implemented already in the project.
   > `const handleInputOnChange = ({ currentTarget: { name, value } }) => setForm((state) => ({ ...state, [name]: value }));`
   > You might notice that the name parameter has been _wrapped in square brackets_ in the setState function.

6. Why do we need to wrap the arguments in square brackets, if we define an object key with the same name as that of the argument?

   > Suppose, arg1 & arg2 is passed in a function which returns an object with a `key/value = 'arg1'/arg2`. For this task `arg2` can be directly stored as the `value` but to name the `key` with the name of `arg1`, you'll have to wrap it in square bracket. See the code below

   ```
   (arg-key,arg-value)=>{
     return {
       [arg-key] = arg-value
     }
   }
   ```

7. How can you structure the store? Can it be explained easily.

   > It may be a bit confusing at first, but we can surely understand it one by one.
   >
   > 1. **_First Step:_** Create a context file. In this file, you'll:
   >
   > - create a context using createContext() & store it in storeCtx.
   > - create a storeHook to easily access the context. (OPTIONAL)
   > - create a ContextProvider-HOC(Higher Order Component) to wrap State & the Children components in which you need to access the store.
   > - Create a useReducer hook to get the `state` & `dispatchFn` from the hook. The two arguments should be passed in the Provider.value. This will help you to access the `state` and manipulate it using `dispatchFn`.
   >   This is all you need from the store. The `initialState`, `reducerFn` and `reducerFn-dependencies` will be imported from a separate reducer file.

   > 2. **_Second Step:_** Create a reducer file. In this file, you'll:

   > - Create and Export a Reducer function, containing separate IF/Switch block for each possible condition.
   > - Create and Export a separate **Action-Objects** containing `action.type` and `action.payload` against each IF/SWITCH block in the reducerFn
   > - Create and Export an `initialState` object and an `initialStateFunction`

   > 3. **_Use it:_** You can make use of the setup by following the guideline:-

   > - Import `useStore` Hook from the storeCtx. Then fetch the `state` or `dispatchFn` or both, according to your need. (You shouldn't need `dispatchFn` if you're just using the data from `state` )
   >   If you're fetching the `dispatchFn`, then you should need to import the specific `actionFn` from the reducer file. (This is not necessary if you're defining the `action type` & `action.payload` on the go. But this might distribute your code and also make the files bulky & unorganized )
   >   Congratulations! You're ready to go.
