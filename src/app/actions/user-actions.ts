import {Action} from './index';
import {User} from '../models/user';

export const LOGIN_REQUEST = '[USER] Login Request';
export const LOGIN_SUCCESS = '[USER] Login Success';
export const USER_PROFILE_REQUEST = '[USER] Profile Request';
export const USER_PROFILE_SUCCESS = '[USER] Profile Success';
export const USER_UPDATE_SUCCESS = '[USER] Account Reset Success';
export const LOGOUT_ACTION = '[USER] Logout Success';


export class LoginRequestAction implements Action {
  readonly type = LOGIN_REQUEST;
}

export class LoginSuccessAction implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: User) {
  }
}


export class LogoutAction implements Action {
  readonly type = LOGOUT_ACTION;
}

export class UserProfileRequestAction implements Action {
  readonly type = USER_PROFILE_REQUEST;
}

export class UserProfileSuccessAction implements Action {
  readonly type = USER_PROFILE_SUCCESS;

  constructor(public payload: User) {
  }
}

export class UserUpdateAction implements Action {
  readonly type = USER_UPDATE_SUCCESS;

  constructor(public payload: User) {
  }
}

