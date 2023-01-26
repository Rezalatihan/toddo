// import * as actionName from './constants'

// const todoInitialState = {
//   todo: ['oli','kampas depan', 'kampas belakang' ]
// }

// const initialState = {
//   ...todoInitialState,
//   action: ''
// }

// const todoReducer = (state = initialState,{ type, payload }) => {
//   const _actionts = {
//     [actionName.TODO_ADD] : () => {
//       return {
//         ...state,
//         action: action.type,
//         todo: [...state.todo, action.payload]
//       }
//     },
//     [actionName.TODO_UPDATE] : () => {
//       return {
//         ...state,
//         action: action.type,
//         todo: [...state.todo, action.payload]
//       }
//     },
//     [actionName.TODO_DELET] : () => {
//       return {
//         ...state,
//         action: action.type,
//         todo: [...state.todo, action.payload]
//       }
//     },
//     DEFAULT () => state
//   } return Users[type] || Users.default
// }
// export default function authReducer(state=initialState, { type, payload}) {
//   switch(type) {
//     case T:
//       return { user: payload.user, token: payload.token }
//     case USER_LOGOUT:
//       return { user: null, token: null }
//     default:
//       return state
//   }
// }
