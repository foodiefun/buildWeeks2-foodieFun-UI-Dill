import { dispatch } from './store';
import { GOTO_INDEX, INC_INDEX, DEC_INDEX } from './types'

export const gotoIndex = dispatch(payload => ({  
  type: GOTO_INDEX,
  payload
}));

export const incIndex = dispatch(() => ({
type: INC_INDEX
}));

export const decIndex = dispatch(() => ({
type: DEC_INDEX
}));

