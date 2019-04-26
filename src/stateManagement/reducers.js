import { GOTO_INDEX, INC_INDEX, DEC_INDEX } from './actions';

export const reducer  = (state, action = {type: null }) => {
  const { currentIndex, slideCount } = state;
  switch (action.type) {
    case GOTO_INDEX:
      return {
        ...state,
        currentIndex: action.payload
      };
    case INC_INDEX:
      return {
        ...state,
        currentIndex: currentIndex >= slideCount - 1 ? 0 : currentIndex + 1
      }
    case DEC_INDEX:
      return {
        ...state,
        currentIndex: currentIndex <= 0 ? slideCount - 1 : currentIndex - 1
      }
    default:
      console.log(`'${action.type}' action type not found`);
      return state;
  }
};