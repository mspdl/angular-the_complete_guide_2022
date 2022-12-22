import { User } from '../user.model';

export interface UserState {
  user: User;
}

const initialState: UserState = {
  user: null,
};

export function authReducer(state = initialState, action) {
  return state;
}
