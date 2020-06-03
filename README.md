# Udemy React Native Project Files

## Primitive Elements

**Types of React Native Primitives:**
![alt text](./Readme-Images/primitives.png "React Native Primitives")
**Questions and Answers**
![alt text](./Readme-Images/q-a.png "Questions and Answers")
**Flat lists**
![alt text](./Readme-Images/flat-list.png "Flat list")
**Buttons**
![alt text](./Readme-Images/button.png "Flat list")

## React Navigation

- Showing different content to user

## State Management

**Counter**
![alt text](./Readme-Images/state.png "Counter")
**Input**
![alt text](./Readme-Images/state-2.png "Input")
**List**
![alt text](./Readme-Images/state-3.png "List")
**State LifeCycle**
![alt text](./Readme-Images/state-4.png "State Life cyle")
**A Few Notes**
![alt text](./Readme-Images/state-5.png "Notes")
**Assigning Colors as RGB( )**
![alt text](./Readme-Images/state-6.png "Colors")
**Colors Screen**
![alt text](./Readme-Images/state-7.png "Colors Screen")
**Reusable Colors Screen**
![alt text](./Readme-Images/reusable-colors.png "Reusable Colors Screen")

- **SquareScreen State Explainer** ![alt text](./Readme-Images/square-state.png "Square State Explainer")
  - **SquareScreen State Explainer** ![alt text](./Readme-Images/square-state-2.png "Square State Explainer")
  - **SquareScreen onChange State Explainer** ![alt text](./Readme-Images/square-state-3.png "Square State Explainer")

**Reducers**
A reducer is a function that manages changes to an object
![alt text](./Readme-Images/reducer.png "Reducers")

![alt text](./Readme-Images/reducer2.png "Reducers")

```javascript
const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
// state === { red: number, green: number, blue: number }
// action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}
// action === { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}
```

**action** means how do we change our state object

**Action object** ![alt text](./Readme-Images/action.png "Actions")
**Counter reducer example** ![alt text](./Readme-Images/counter-reduce.png "Counter reducer example")
**Text input example** ![alt text](./Readme-Images/text-input.png "Text input")
