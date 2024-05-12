import { CounterReducer } from "./Counter-reducer";
import { IncrementAC, DecrementAC, ResetAC } from './Counter-reducer';



 
test('Increment', () => {

    // 1. Стартовый state
    const startState: number = 2
   
    // 2. Действие
    const action = IncrementAC()
    const endState = CounterReducer(startState, action)
   
    // 3. Проверяем, что наши действия (изменения state) соответствуют ожиданию
    // в массиве останется один тудулист
    expect(endState).toBe(3)

  })


  test('Reset', () => {

    // 1. Стартовый state
    const startState: number = 5
   
    // 2. Действие
    const action = ResetAC()
    const endState = CounterReducer(startState, action)
   
    // 3. Проверяем, что наши действия (изменения state) соответствуют ожиданию
    // в массиве останется один тудулист
    expect(endState).toBe(0)

  })