
export type IncremenActionType = ReturnType<typeof IncrementAC>;
export type DecrementActionType = ReturnType<typeof DecrementAC>;
export type ResetActionType = ReturnType<typeof ResetAC>;


type ActionsType =
  | IncremenActionType
  | DecrementActionType
  | ResetActionType;

export const CounterReducer = (state: number = 0, action: ActionsType) => {
    switch (action.type) {
        case "INCREMENT":
          return state + 1;
        case "DECREMENT":
          return state - 1;
        case "RESET":
          return (state = 0);
        default:
          return state;
      }
}

export const IncrementAC = () => {
    return {
      type: "INCREMENT",
    };
  };
  
  export const DecrementAC = () => {
    return {
      type: "DECREMENT",
    };
  };
  
  export const ResetAC = () => {
    return {
      type: "RESET",
    };
  };