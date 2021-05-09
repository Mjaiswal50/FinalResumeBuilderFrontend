import {Resume} from '../models/resume';
import {Action} from '../actions';
import {
  RESUME_ADD_AWARDS,
  RESUME_ADD_CONTACT_DETAIL,
  RESUME_ADD_EDUCATION,
  RESUME_ADD_EMPLOYMENT_HISTORY,
  RESUME_ADD_INDUSTRIAL_EXPOSURE,
  RESUME_ADD_INTEREST,
  RESUME_ADD_LANGUAGE,
  RESUME_ADD_OBJECTIVE, RESUME_ADD_PROJECT_DETAIL, RESUME_ADD_REFERENCE,
  RESUME_ADD_SKILL, RESUME_ADD_STRENGTH, RESUME_ADD_SUCCESS, RESUME_ADD_WEAKNESS,
  RESUME_DELETE,
  RESUME_DELETE_AWARDS,
  RESUME_DELETE_EDUCATION,
  RESUME_DELETE_EMPLOYMENT_HISTORY,
  RESUME_DELETE_INDUSTRIAL_EXPOSURE,
  RESUME_DELETE_INTEREST,
  RESUME_DELETE_LANGUAGE,
  RESUME_DELETE_OBJECTIVE, RESUME_DELETE_PROJECT_DETAIL, RESUME_DELETE_REFERENCE,
  RESUME_DELETE_SKILL, RESUME_DELETE_STRENGTH, RESUME_DELETE_WEAKNESS,
  RESUME_ERROR,
  RESUME_LIST_REQUEST,
  RESUME_LIST_SUCCESS,
  RESUME_UPDATE,
  RESUME_UPDATE_AWARDS,
  RESUME_UPDATE_CONTACT_DETAIL,
  RESUME_UPDATE_EDUCATION,
  RESUME_UPDATE_EMPLOYMENT_HISTORY,
  RESUME_UPDATE_INDUSTRIAL_EXPOSURE,
  RESUME_UPDATE_INTEREST,
  RESUME_UPDATE_LANGUAGE,
  RESUME_UPDATE_OBJECTIVE, RESUME_UPDATE_PROJECT_DETAIL, RESUME_UPDATE_REFERENCE,
  RESUME_UPDATE_SKILL, RESUME_UPDATE_STRENGTH, RESUME_UPDATE_WEAKNESS
} from '../actions/resume-actions';
import {StoreUtility} from '../utility/store-utility';
import {createSelector} from '@ngrx/store';
import {LOGOUT_ACTION} from '../actions/user-actions';

export interface ResumeReducerState {
  loading: boolean;
  error: boolean;
  loaded: boolean;
  // tslint:disable-next-line:variable-name
  entities: { [_id: string]: Resume };
  ids: string[];
}

const initialState: ResumeReducerState = {
  loaded: false,
  loading: false,
  error: false,
  entities: {},
  ids: []
};

export function ResumeReducer(state = initialState, action: Action): ResumeReducerState {
  switch (action.type) {
    case RESUME_LIST_REQUEST: {
      return {...state, loading: true};
    }
    case RESUME_LIST_SUCCESS: {
      const resume = action.payload;
      const obj = StoreUtility.normalize(resume);
      const newEntities = {...state.entities, ...obj};
      const ids = resume.map((res) => res._id);
      const newIds = StoreUtility.filterDuplicateIds([...state.ids, ...ids]);
      return {
        ...state, loading: false, loaded: true,
        error: false, entities: newEntities, ids: newIds
      };
    }
    case RESUME_ADD_SUCCESS: {
      const resume = action.payload;
      const obj = {[resume._id]: resume};
      const newIds = [...state.ids, resume._id];
      const entities = {...state.entities, ...obj};
      return {...state, ...{entities, ids: newIds}};
    }
    case RESUME_ERROR: {
      return {...initialState};
    }
    case RESUME_UPDATE: {
      const resume = action.payload;
      const obj = {[resume._id]: resume};
      const newEntities = {...state.entities, ...obj};
      return {...state, entities: newEntities};
    }
    case RESUME_DELETE: {
      const id = action.payload;
      const newIds = state.ids.filter((elem) => elem !== id);
      const newEntities = StoreUtility.removeKey(state.entities, id);
      return {
        ...state,
        ids: newIds,
        entities: newEntities
      };
    }
    case RESUME_ADD_CONTACT_DETAIL:
    case RESUME_UPDATE_CONTACT_DETAIL: {
      const contactDetail = action.payload.contact;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.contact_details = contactDetail;
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, entities: newEntities};
    }
    case RESUME_ADD_SKILL: {
      const skill = action.payload.skill;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.skills.push(skill);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_DELETE_SKILL: {
      const skill = action.payload.skill;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.skills = oldResume.skills.filter((data) => data._id !== skill._id);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case LOGOUT_ACTION: {
      return {...initialState};
    }
    case RESUME_UPDATE_SKILL: {
      const skill = action.payload.skill;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.skills = oldResume.skills.filter((data) => data._id !== skill._id);
      oldResume.skills.push(skill);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_ADD_EDUCATION: {
      const education = action.payload.education;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.education.push(education);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_DELETE_EDUCATION: {
      const education = action.payload.education;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.education = oldResume.education.filter((data) => data._id !== education._id);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_UPDATE_EDUCATION: {
      const education = action.payload.education;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.education = oldResume.education.filter((data) => data._id !== education._id);
      oldResume.education.push(education);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_ADD_EMPLOYMENT_HISTORY: {
      const employmentHistory = action.payload.employment_history;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.employment_history.push(employmentHistory);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_DELETE_EMPLOYMENT_HISTORY: {
      const employmentHistory = action.payload.employment_history;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.employment_history = oldResume.employment_history.filter((data) => data._id !== employmentHistory._id);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_UPDATE_EMPLOYMENT_HISTORY: {
      const employmentHistory = action.payload.employment_history;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.employment_history = oldResume.employment_history.filter((data) => data._id !== employmentHistory._id);
      oldResume.employment_history.push(employmentHistory);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_ADD_INTEREST: {
      const interest = action.payload.interest;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.interests.push(interest);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_DELETE_INTEREST: {
      const interest = action.payload.interest;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.interests = oldResume.interests.filter((data) => data._id !== interest._id);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_UPDATE_INTEREST: {
      const interest = action.payload.interest;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.interests = oldResume.interests.filter((data) => data._id !== interest._id);
      oldResume.interests.push(interest);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_ADD_LANGUAGE: {
      const language = action.payload.language;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.languages.push(language);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_DELETE_LANGUAGE: {
      const language = action.payload.language;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.languages = oldResume.languages.filter((data) => data._id !== language._id);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_UPDATE_LANGUAGE: {
      const language = action.payload.language;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.languages = oldResume.languages.filter((data) => data._id !== language._id);
      oldResume.languages.push(language);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_ADD_INDUSTRIAL_EXPOSURE: {
      const industrialExposure = action.payload.industrial_exposure;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.industrialExposures.push(industrialExposure);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_DELETE_INDUSTRIAL_EXPOSURE: {
      const industrialExposure = action.payload.industrial_exposure;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.industrialExposures = oldResume.industrialExposures.filter((data) => data._id !== industrialExposure._id);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_UPDATE_INDUSTRIAL_EXPOSURE: {
      const industrialExposure = action.payload.industrial_exposure;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.industrialExposures = oldResume.industrialExposures.filter((data) => data._id !== industrialExposure._id);
      oldResume.industrialExposures.push(industrialExposure);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_ADD_AWARDS: {
      const award = action.payload.award;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.award_achivements.push(award);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_UPDATE_AWARDS: {
      const award = action.payload.award;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.award_achivements = oldResume.award_achivements.filter((data) => data._id !== award._id);
      oldResume.award_achivements.push(award);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_DELETE_AWARDS: {
      const award = action.payload.award;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.award_achivements = oldResume.award_achivements.filter((data) => data._id !== award._id);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_ADD_OBJECTIVE: {
      const objective = action.payload.objective;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.objectives.push(objective);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_UPDATE_OBJECTIVE: {
      const objective = action.payload.objective;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.objectives = oldResume.objectives.filter((data) => data._id !== objective._id);
      oldResume.objectives.push(objective);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_DELETE_OBJECTIVE: {
      const objective = action.payload.objective;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.objectives = oldResume.objectives.filter((data) => data._id !== objective._id);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_ADD_REFERENCE: {
      const reference = action.payload.reference;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.refrences.push(reference);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_UPDATE_REFERENCE: {
      const reference = action.payload.reference;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.refrences = oldResume.refrences.filter((data) => data._id !== reference._id);
      oldResume.refrences.push(reference);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_DELETE_REFERENCE: {
      const reference = action.payload.reference;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.refrences = oldResume.refrences.filter((data) => data._id !== reference._id);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_ADD_PROJECT_DETAIL: {
      const projectDetail = action.payload.project_detail;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.projectDetails.push(projectDetail);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_UPDATE_PROJECT_DETAIL: {
      const projectDetail = action.payload.project_detail;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.projectDetails = oldResume.projectDetails.filter((data) => data._id !== projectDetail._id);
      oldResume.projectDetails.push(projectDetail);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_DELETE_PROJECT_DETAIL: {
      const projectDetail = action.payload.project_detail;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.projectDetails = oldResume.projectDetails.filter((data) => data._id !== projectDetail._id);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_ADD_STRENGTH: {
      const strength = action.payload.strength;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.strengths.push(strength);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_UPDATE_STRENGTH: {
      const strength = action.payload.strength;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.strengths = oldResume.strengths.filter((data) => data._id !== strength._id);
      oldResume.strengths.push(strength);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_DELETE_STRENGTH: {
      const strength = action.payload.strength;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.strengths = oldResume.strengths.filter((data) => data._id !== strength._id);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_ADD_WEAKNESS: {
      const weakness = action.payload.weakness;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.weakness.push(weakness);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_UPDATE_WEAKNESS: {
      const weakness = action.payload.weakness;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.weakness = oldResume.weakness.filter((data) => data._id !== weakness._id);
      oldResume.weakness.push(weakness);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case RESUME_DELETE_WEAKNESS: {
      const weakness = action.payload.weakness;
      const resumeId = action.payload.resume_id;
      const oldResume = JSON.parse(JSON.stringify(state.entities[resumeId]));
      oldResume.weakness = oldResume.weakness.filter((data) => data._id !== weakness._id);
      const obj = {[resumeId]: oldResume};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    default: {
      return state;
    }
  }
}

export const getLoading = (state: ResumeReducerState) => state.loading;
export const getLoaded = (state: ResumeReducerState) => state.loaded;
export const getEntities = (state: ResumeReducerState) => state.entities;
export const getIds = (state: ResumeReducerState) => state.ids;
export const getError = (state: ResumeReducerState) => state.error;
export const getResumeList = createSelector(getEntities, (entities) => {
  return StoreUtility.unNormalized(entities);
});
