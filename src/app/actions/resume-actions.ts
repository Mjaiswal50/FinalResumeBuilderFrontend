import {Weakness} from '../models/weakness';
import {Action} from './index';
import {Strength} from '../models/strength';
import {ProjectDetail} from '../models/project-detail';
import {Refrence} from '../models/refrence';
import {Objective} from '../models/objective';
import {AwardsAchivement} from '../models/awards-achivement';
import {IndustrialExposure} from '../models/industrial-exposure';
import {Language} from '../models/language';
import {Interest} from '../models/interest';
import {EmploymentHistory} from '../models/employment-history';
import {Education} from '../models/education';
import {Skill} from '../models/skill';
import {Contact, Resume} from '../models/resume';

export const RESUME_ADD_SUCCESS = 'add Resume';
export const RESUME_UPDATE = 'update Resume';
export const RESUME_DELETE = 'delete Resume';
export const RESUME_LIST_REQUEST = 'loading Resume';
export const RESUME_LIST_SUCCESS = 'loaded Resume';
export const RESUME_ERROR = 'error in loading Resume';
// nested

export const RESUME_ADD_CONTACT_DETAIL = 'add contact details';
export const RESUME_UPDATE_CONTACT_DETAIL = 'update contact details Resume';
export const RESUME_ADD_SKILL = 'add new skill';
export const RESUME_UPDATE_SKILL = 'update skill';
export const RESUME_DELETE_SKILL = 'delete skill';
export const RESUME_ADD_EDUCATION = 'add new education';
export const RESUME_UPDATE_EDUCATION = 'update education';
export const RESUME_DELETE_EDUCATION = 'delete education';
export const RESUME_ADD_EMPLOYMENT_HISTORY = 'add new employment history';
export const RESUME_UPDATE_EMPLOYMENT_HISTORY = 'update employment history';
export const RESUME_DELETE_EMPLOYMENT_HISTORY = 'delete employment history';
export const RESUME_ADD_INTEREST = 'add new interest ';
export const RESUME_UPDATE_INTEREST = 'update interest ';
export const RESUME_DELETE_INTEREST = 'delete interest';
export const RESUME_ADD_LANGUAGE = 'add new language ';
export const RESUME_UPDATE_LANGUAGE = 'update language ';
export const RESUME_DELETE_LANGUAGE = 'delete language';
export const RESUME_ADD_INDUSTRIAL_EXPOSURE = 'add new industrial Exposure ';
export const RESUME_UPDATE_INDUSTRIAL_EXPOSURE = 'update industrial Exposure ';
export const RESUME_DELETE_INDUSTRIAL_EXPOSURE = 'delete industrial Exposure';
export const RESUME_ADD_AWARDS = 'add new awards';
export const RESUME_UPDATE_AWARDS = 'update awards';
export const RESUME_DELETE_AWARDS = 'delete awards';
export const RESUME_ADD_OBJECTIVE = 'add new objective';
export const RESUME_UPDATE_OBJECTIVE = 'update objective';
export const RESUME_DELETE_OBJECTIVE = 'delete objective';
export const RESUME_ADD_REFERENCE = 'add new reference';
export const RESUME_UPDATE_REFERENCE = 'update reference';
export const RESUME_DELETE_REFERENCE = 'delete reference';
export const RESUME_ADD_PROJECT_DETAIL = 'add new project detail';
export const RESUME_UPDATE_PROJECT_DETAIL = 'update project detail';
export const RESUME_DELETE_PROJECT_DETAIL = 'delete project detail';
export const RESUME_ADD_STRENGTH = 'add new Strength';
export const RESUME_UPDATE_STRENGTH = 'update Strength';
export const RESUME_DELETE_STRENGTH = 'delete Strength';
export const RESUME_ADD_WEAKNESS = 'add new Weakness';
export const RESUME_UPDATE_WEAKNESS = 'update Weakness';
export const RESUME_DELETE_WEAKNESS = 'delete Weakness';



export class ResumeErrorAction implements Action {
  readonly type = RESUME_ERROR;

  constructor() {
  }
}

export class AddResumeAction implements Action {
  readonly type = RESUME_ADD_SUCCESS;

  constructor(public payload: Resume) {
  }
}

export class UpdateResumeAction implements Action {
  readonly type = RESUME_UPDATE;

  constructor(public payload: Resume) {
  }
}

export class DeleteResumeAction implements Action {
  readonly type = RESUME_DELETE;

  constructor(public payload: string) {
  }
}

export class ResumeListRequestAction implements Action {
  readonly type = RESUME_LIST_REQUEST;
}

export class ResumeListSuccessAction implements Action {
  readonly type = RESUME_LIST_SUCCESS;

  constructor(public payload: Resume[]) {
  }
}

export class AddContactDetailAction implements Action {
  readonly type = RESUME_ADD_CONTACT_DETAIL;

  constructor(public payload: { contact: Contact, resume_id: string }) {
  }
}


export class UpdateContactDetailAction implements Action {
  readonly type = RESUME_UPDATE_CONTACT_DETAIL;

  constructor(public payload: { contact: Contact, resume_id: string }) {
  }
}



export class AddSkillAction implements Action {
  readonly type = RESUME_ADD_SKILL;

  constructor(public payload: { skill: Skill, resume_id: string }) {
  }
}

export class UpdateSkillAction implements Action {
  readonly type = RESUME_UPDATE_SKILL;

  constructor(public payload: { skill: Skill, resume_id: string }) {
  }
}

export class DeleteSkillAction implements Action {
  readonly type = RESUME_DELETE_SKILL;

  constructor(public payload: { skill: Skill, resume_id: string }) {
  }
}

export class AddEducationAction implements Action {
  readonly type = RESUME_ADD_EDUCATION;

  constructor(public payload: { education: Education, resume_id: string }) {
  }
}

export class UpdateEducationAction implements Action {
  readonly type = RESUME_UPDATE_EDUCATION;

  constructor(public payload: { education: Education, resume_id: string }) {
  }
}

export class DeleteEducationAction implements Action {
  readonly type = RESUME_DELETE_EDUCATION;

  constructor(public payload: { education: Education, resume_id: string }) {
  }
}

export class AddEmploymentHistoryAction implements Action {
  readonly type = RESUME_ADD_EMPLOYMENT_HISTORY;

  constructor(public payload: { employment_history: EmploymentHistory, resume_id: string }) {
  }
}

export class UpdateEmploymentHistoryAction implements Action {
  readonly type = RESUME_UPDATE_EMPLOYMENT_HISTORY;

  constructor(public payload: { employment_history: EmploymentHistory, resume_id: string }) {
  }
}

export class DeleteEmploymentHistoryAction implements Action {
  readonly type = RESUME_DELETE_EMPLOYMENT_HISTORY;

  constructor(public payload: { employment_history: EmploymentHistory, resume_id: string }) {
  }
}

export class AddInterestAction implements Action {
  readonly type = RESUME_ADD_INTEREST;

  constructor(public payload: { interest: Interest, resume_id: string }) {
  }
}

export class UpdateInterestAction implements Action {
  readonly type = RESUME_UPDATE_INTEREST;

  constructor(public payload: { interest: Interest, resume_id: string }) {
  }
}

export class DeleteInterestAction implements Action {
  readonly type = RESUME_DELETE_INTEREST;

  constructor(public payload: { interest: Interest, resume_id: string }) {
  }
}

export class AddLanguageAction implements Action {
  readonly type = RESUME_ADD_LANGUAGE;

  constructor(public payload: { language: Language, resume_id: string }) {
  }
}

export class UpdateLanguageAction implements Action {
  readonly type = RESUME_UPDATE_LANGUAGE;

  constructor(public payload: { language: Language, resume_id: string }) {
  }
}

export class DeleteLanguageAction implements Action {
  readonly type = RESUME_DELETE_LANGUAGE;

  constructor(public payload: { language: Language, resume_id: string }) {
  }
}

export class AddIndustrialExposureAction implements Action {
  readonly type = RESUME_ADD_INDUSTRIAL_EXPOSURE;

  constructor(public payload: { industrial_exposure: IndustrialExposure, resume_id: string }) {
  }
}

export class UpdateIndustrialExposureAction implements Action {
  readonly type = RESUME_UPDATE_INDUSTRIAL_EXPOSURE;

  constructor(public payload: { industrial_exposure: IndustrialExposure, resume_id: string }) {
  }
}

export class DeleteIndustrialExposureAction implements Action {
  readonly type = RESUME_DELETE_INDUSTRIAL_EXPOSURE;

  constructor(public payload: { industrial_exposure: IndustrialExposure, resume_id: string }) {
  }
}
export class AddAwardAction implements Action {
  readonly type = RESUME_ADD_AWARDS;

  constructor(public payload: { award: AwardsAchivement, resume_id: string }) {
  }
}

export class UpdateAwardAction implements Action {
  readonly type = RESUME_UPDATE_AWARDS;

  constructor(public payload: { award: AwardsAchivement, resume_id: string }) {
  }
}

export class DeleteAwardAction implements Action {
  readonly type = RESUME_DELETE_AWARDS;

  constructor(public payload: { award: AwardsAchivement, resume_id: string }) {
  }
}
export class AddObjectiveAction implements Action {
  readonly type = RESUME_ADD_OBJECTIVE;

  constructor(public payload: { objective: Objective, resume_id: string }) {
  }
}

export class UpdateObjectiveAction implements Action {
  readonly type = RESUME_UPDATE_OBJECTIVE;

  constructor(public payload: { objective: Objective, resume_id: string }) {
  }
}

export class DeleteObjectiveAction implements Action {
  readonly type = RESUME_DELETE_OBJECTIVE;

  constructor(public payload: { objective: Objective, resume_id: string }) {
  }
}
export class AddReferenceAction implements Action {
  readonly type = RESUME_ADD_REFERENCE;

  constructor(public payload: { reference: Refrence, resume_id: string }) {
  }
}

export class UpdateReferenceAction implements Action {
  readonly type = RESUME_UPDATE_REFERENCE;

  constructor(public payload: { reference: Refrence, resume_id: string }) {
  }
}

export class DeleteReferenceAction implements Action {
  readonly type = RESUME_DELETE_REFERENCE;

  constructor(public payload: { reference: Refrence, resume_id: string }) {
  }
}
export class AddProjectDetailAction implements Action {
  readonly type = RESUME_ADD_PROJECT_DETAIL;

  constructor(public payload: { project_detail: ProjectDetail, resume_id: string }) {
  }
}

export class UpdateProjectDetailAction implements Action {
  readonly type = RESUME_UPDATE_PROJECT_DETAIL;

  constructor(public payload: { project_detail: ProjectDetail, resume_id: string }) {
  }
}

export class DeleteProjectDetailAction implements Action {
  readonly type = RESUME_DELETE_PROJECT_DETAIL;

  constructor(public payload: { project_detail: ProjectDetail, resume_id: string }) {
  }
}
export class AddStrengthAction implements Action {
  readonly type = RESUME_ADD_STRENGTH;

  constructor(public payload: { strength: Strength, resume_id: string }) {
  }
}

export class UpdateStrengthAction implements Action {
  readonly type = RESUME_UPDATE_STRENGTH;

  constructor(public payload: { strength: Strength, resume_id: string }) {
  }
}

export class DeleteStrengthAction implements Action {
  readonly type = RESUME_DELETE_STRENGTH;

  constructor(public payload: { strength: Strength, resume_id: string }) {
  }
}

export class AddWeaknessAction implements Action {
  readonly type = RESUME_ADD_WEAKNESS;

  constructor(public payload: { weakness: Weakness, resume_id: string }) {
  }
}

export class UpdateWeaknessAction implements Action {
  readonly type = RESUME_UPDATE_WEAKNESS;

  constructor(public payload: { weakness: Weakness, resume_id: string }) {
  }
}

export class DeleteWeaknessAction implements Action {
  readonly type = RESUME_DELETE_WEAKNESS;

  constructor(public payload: { weakness: Weakness, resume_id: string }) {
  }
}
