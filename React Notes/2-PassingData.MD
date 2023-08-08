# Passing Data

data is passes By:

1. props Object [pass data by props](../src/components/passing/PassingProps.js)
	1. Props are Read-Only:
	Whether you declare a component as a function or a class, it must never modify its own props.
    ex: pure function
	> ``function sum(a, b) {return a + b;}``
	when you called sum function, a and b has no changes every call because always return the same result for the same inputs.
    > ``sum(2,3) ==> 5``
    > ``sum(2,3) ==> 5``
    > ``sum(2,3) ==> 5``
    ex: impure function
    > ``function withdraw(account, amount) {account.total -= amount;}``
    myAccount = {total: 1000}
    withdraw(myAccount, 100) ==> 900
    withdraw(myAccount, 100) ==> 800
    withdraw(myAccount, 100) ==> 700
    All React components must act like pure functions with respect to their props.

2. state Object [pass data by state](../src/components/passing/PassingState.js) state can be updated by methods
	1. function component is => stateless component
	2. class component is => statefull component
	3. state is an internal data for component
	4. state can be changed but not directly, however update it by setState method