import * as fromUser from './user-reducer';
import * as fromResume from './resume-reducer';
import {ActionReducerMap} from '@ngrx/store/src/models';
import {createSelector} from '@ngrx/store';

export interface RootReducerState {
  user: fromUser.UserReducerState;
  resume: fromResume.ResumeReducerState;
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
  user: fromUser.UserReducer,
  resume: fromResume.ResumeReducer
};

const getUserRootState = (state: RootReducerState) => state.user;
export const userLoggedIn = createSelector(getUserRootState, fromUser.loggedIn);
export const userLoggingIn = createSelector(getUserRootState, fromUser.loggingIn);
export const getUser = createSelector(getUserRootState, fromUser.user);

const getResumeRootState = (state: RootReducerState) => state.resume;
export const resumeLoading = createSelector(getResumeRootState, fromResume.getLoading);
export const resumeLoaded = createSelector(getResumeRootState, fromResume.getLoaded);
export const getResume = createSelector(getResumeRootState, fromResume.getResumeList);
export const resumeEntities = createSelector(getResumeRootState, fromResume.getEntities);
export const resumeIds = createSelector(getResumeRootState, fromResume.getIds);
export const resumeError = createSelector(getResumeRootState, fromResume.getError);
export const getResumeById = (state: RootReducerState, id) => {
  const entities = resumeEntities(state);
  return entities[id];
};

