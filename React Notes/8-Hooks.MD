# Intro

1. hooks let you use state and other React features without writing a class.
2. Hooks don’t work inside classes.


# Rules To Use It

1. Only Call Hooks at the Top Level, Don’t call Hooks inside loops, conditions, or nested functions.
2. Only Call Hooks from React Function component or custom Hooks. Don’t call Hooks from regular JavaScript functions.

# useState

Hook that lets you add React state to function components. [example](../src/components/hooks/state.js)

Note !IMPORTANT: callback function on useState will call **render method**

# useEffect

1. By using this Hook, you tell React that your component needs to do something after render.
2. it runs both after the first render and after every update, By default.
3. first parameter is the function will execute every call.
4. second parameter:
    1. if not exist: call effect after first render and every update [example comment 1 + 2](../src/components/hooks/effect.js)
    2. if empty array: call effect after first render ONLY. [example comment 3](../src/components/hooks/effect.js)
    3. if array with state names: will call effect after first render and every update on state you added in a list. [example comment 4, 5](../src/components/hooks/effect.js)
    4. be careful when using state callback inside useEffect that execute after the same state is udated
5. React also cleans up effects from the previous render before running the effects next time by return clean up function. so The cleanup function is called when useEffect is called again or on unmount.


# useContext

1. using this hook for global props and to solve drilling props proplem 
