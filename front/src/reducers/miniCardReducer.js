
export const miniCardReducer = (state = [], action) => {
  console.log("action . ", action)
  switch (action?.type) {
    case 'add':
      console.log("xxxx .",state)
      return [...state,action.payload]
  
    default:
      return state;
  }
};




