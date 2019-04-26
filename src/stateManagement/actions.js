import { dispatch } from './store';

export const GOTO_INDEX = 'GOTO_INDEX';
export const INC_INDEX = 'INC_INDEX';
export const DEC_INDEX = 'DEC_INDEX';

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

