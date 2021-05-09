import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './services/http-service';
import {ApiService} from './services/api-service';
import {AlertService} from './services/alert-service';
import {LoginComponent} from './container/login.component';
import {SignupComponent} from './container/signup.component';
import {ForgotPasswordComponent} from './container/forgot-password.component';
import {VerificationComponent} from './container/verification.component';
import {AuthGuard} from './guards/auth-guard';
import {AnonGuard} from './guards/anon-guard';
import {OnBoardingComponent} from './container/on-boarding/on-boarding.component';
import {DashboardComponent} from './container/layout/dashboard.component';
import {VerificationCompleted} from './guards/verification-completed';
import {VerificationInComplete} from './guards/verification-in-complete';
import {OnBoardingComplete} from './guards/on-boarding-complete';
import {OnBoardingInComplete} from './guards/on-boarding-in-complete';
import {OnBoardingIntroComponent} from './container/on-boarding/on-boarding-intro.component';
import {ResumeNameComponent} from './container/on-boarding/resume-name.component';
import {UploadComponent} from './container/tabs/upload.componet';
import {UploadImageComponent} from './container/tabs/upload-image.component';
import {UploadFromDiskComponent} from './container/tabs/upload-from-disk.component';
import {ImportYoutubeComponent} from './container/tabs/import-youtube.component';
import {ResumeFormComponent} from './container/resume-form.component';
import {ContactDetailsComponent} from './components/resume-form/contact-details.component';
import {ContactDetailFormComponent} from './components/resume-form/resume-dialogues/contact-detail-form.component';
import {EducationComponent} from './components/resume-form/education.component';
import {EducationFormComponent} from './components/resume-form/resume-dialogues/education-form.component';
import {EducationCardComponent} from './components/resume-form/resume-card/education-card.component';
import {EducationListComponent} from './components/resume-form/resume-list/education-list.component';
import {EmploymentHistoryComponent} from './components/resume-form/employment-history.component';
import {EmploymentHistoryListComponent} from './components/resume-form/resume-list/employment-history-list.component';
import {EmploymentHistoryCardComponent} from './components/resume-form/resume-card/employment-history-card.component';
import {EmploymentHistoryFormComponent} from './components/resume-form/resume-dialogues/employment-history-form.component';
import {InterestComponent} from './components/resume-form/interest.component';
import {InterestListComponent} from './components/resume-form/resume-list/interest-list.component';
import {InterestCardComponent} from './components/resume-form/resume-card/interest-card.component';
import {InterestFormComponent} from './components/resume-form/resume-dialogues/interest-form.component';
import {SkillsComponent} from './components/resume-form/skills.component';
import {SkillListComponent} from './components/resume-form/resume-list/skill-list.component';
import {SkillCardComponent} from './components/resume-form/resume-card/skill-card.component';
import {SkillFormComponent} from './components/resume-form/resume-dialogues/skill-form.component';
import {LanguageComponent} from './components/resume-form/language.component';
import {LanguageListComponent} from './components/resume-form/resume-list/language-list.component';
import {LanguageCardComponent} from './components/resume-form/resume-card/language-card.component';
import {LanguageFormComponent} from './components/resume-form/resume-dialogues/language-form.component';
import {IndustrialExposureComponent} from './components/resume-form/industrial-exposure.component';
import {IndustrialExposureListComponent} from './components/resume-form/resume-list/industrial-exposure-list.component';
import {IndustrialExposureFormComponent} from './components/resume-form/resume-dialogues/industrial-exposure-form.component';
import {IndustrialExposureCardComponent} from './components/resume-form/resume-card/industrial-exposure-card.component';
import {AwardComponent} from './components/resume-form/award.component';
import {AwardListComponent} from './components/resume-form/resume-list/award-list.component';
import {AwardFormComponent} from './components/resume-form/resume-dialogues/award-form.component';
import {AwardCardComponent} from './components/resume-form/resume-card/award-card.component';
import {ObjectiveComponent} from './components/resume-form/objective.component';
import {ObjectiveListComponent} from './components/resume-form/resume-list/objective-list.component';
import {ObjectiveFormComponent} from './components/resume-form/resume-dialogues/objective-form.component';
import {ObjectiveCardComponent} from './components/resume-form/resume-card/objective-card.component';
import {ReferenceComponent} from './components/resume-form/reference.component';
import {ReferenceListComponent} from './components/resume-form/resume-list/reference-list.component';
import {ReferenceFormComponent} from './components/resume-form/resume-dialogues/reference-form.component';
import {ReferenceCardComponent} from './components/resume-form/resume-card/reference-card.component';
import {ProjectDetailsComponent} from './components/resume-form/project-details.component';
import {ProjectDetailsListComponent} from './components/resume-form/resume-list/project-details-list.component';
import {ProjectDetailsFormComponent} from './components/resume-form/resume-dialogues/project-details-form.component';
import {ProjectDetailsCardComponent} from './components/resume-form/resume-card/project-details-card.component';
import {StrengthComponent} from './components/resume-form/strength.component';
import {StrengthListComponent} from './components/resume-form/resume-list/strength-list.component';
import {StrengthFormComponent} from './components/resume-form/resume-dialogues/strength-form.component';
import {StrengthCardComponent} from './components/resume-form/resume-card/strength-card.component';
import {WeaknessComponent} from './components/resume-form/weakness.component';
import {WeaknessListComponent} from './components/resume-form/resume-list/weakness-list.component';
import {WeaknessFormComponent} from './components/resume-form/resume-dialogues/weakness-form.component';
import {WeaknessCardComponent} from './components/resume-form/resume-card/weakness-card.component';
import {Truncate} from './pipes/truncate';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {rootReducer} from './reducers';
import {AuthRepository} from './repository/auth-repository';
import {ResumeRepository} from './repository/resume-repository';
import {ResumeComponent} from './container/dashboard/resume.component';
import {SettingComponent} from './container/dashboard/setting.component';
import {HeaderComponent} from './container/layout/header.component';
import {LogoutComponent} from './components/logout.component';
import {NotFoundComponent} from './container/not-found.component';
import {ProfileSettingsComponent} from './components/profile-settings.component';
import {PasswordComponent} from './components/password.component';
import {ResumeCardComponent} from './components/resume-card.component';
import {ErrorComponent} from './components/error.component';
import {AddOrEditResumeComponent} from './components/dialogues/add-or-edit-resume.component';
import {TemplatesComponent} from './container/templates.component';
import {SingleTemplateComponent} from './container/single-template.component';
import {TemplateCardComponent} from './components/template-card.component';
import {BluesTemplateComponent} from './components/templates/blues-template.component';
import {ClassicTemplateComponent} from './components/templates/classic-template.component';
import {ModernTemplateComponent} from './components/templates/modern-template.component';
import {RoyalTemplateComponent} from './components/templates/royal-template.component';
import {TraditionalPanelTemplateComponent} from './components/templates/traditional-panel-template.component';
import {SingleResumeComponent} from './container/single-resume.component';
import {TemplateContactDetailComponent} from './components/resume-template/template-contact-detail.component';
import {TemplateButtonsComponent} from './components/resume-template/template-buttons.component';
import {TemplateSkillCardComponent} from './components/resume-template/template-cards/template-skill-card.component';
import {TemplateLanguageCardComponent} from './components/resume-template/template-cards/template-language-card.component';
import {TemplateStrengthCardComponent} from './components/resume-template/template-cards/template-strength-card.component';
import {TemplateWeaknessCardComponent} from './components/resume-template/template-cards/template-weakness-card.component';
import {TemplateDetailsComponent} from './components/resume-template/template-details.component';
import {TemplateEducationComponent} from './components/resume-template/template-cards/template-education.component';
import {TemplateEmploymentHistoryComponent} from './components/resume-template/template-cards/template-employment-history.component';
import {TemplateInterestComponent} from './components/resume-template/template-cards/template-interest.component';
import {TemplateIndustrialExposureComponent} from './components/resume-template/template-cards/template-industrial-exposure.component';
import { TemplateAwardsComponent } from './components/resume-template/template-cards/template-awards.component';
import {TemplateObjectiveComponent} from './components/resume-template/template-cards/template-objective.component';
import {TemplateReferenceComponent} from './components/resume-template/template-cards/template-reference.component';
import {TemplateProjectDetailComponent} from './components/resume-template/template-cards/template-project-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    VerificationComponent,
    OnBoardingComponent,
    DashboardComponent,
    OnBoardingIntroComponent,
    ResumeNameComponent,
    UploadComponent,
    UploadImageComponent,
    UploadFromDiskComponent,
    ImportYoutubeComponent,
    ResumeFormComponent,
    ContactDetailsComponent,
    ContactDetailFormComponent,
    EducationComponent,
    EducationFormComponent,
    EducationCardComponent,
    EducationListComponent,
    EmploymentHistoryComponent,
    EmploymentHistoryListComponent,
    EmploymentHistoryCardComponent,
    EmploymentHistoryFormComponent,
    InterestComponent,
    InterestListComponent,
    InterestCardComponent,
    InterestFormComponent,
    SkillsComponent,
    SkillListComponent,
    SkillCardComponent,
    SkillFormComponent,
    LanguageComponent,
    LanguageListComponent,
    LanguageCardComponent,
    LanguageFormComponent,
    IndustrialExposureComponent,
    IndustrialExposureListComponent,
    IndustrialExposureFormComponent,
    IndustrialExposureCardComponent,
    AwardComponent,
    AwardListComponent,
    AwardFormComponent,
    AwardCardComponent,
    ObjectiveComponent,
    ObjectiveListComponent,
    ObjectiveFormComponent,
    ObjectiveCardComponent,
    ReferenceComponent,
    ReferenceListComponent,
    ReferenceFormComponent,
    ReferenceCardComponent,
    ProjectDetailsComponent,
    ProjectDetailsListComponent,
    ProjectDetailsFormComponent,
    ProjectDetailsCardComponent,
    StrengthComponent,
    StrengthListComponent,
    StrengthFormComponent,
    StrengthCardComponent,
    WeaknessComponent,
    WeaknessListComponent,
    WeaknessFormComponent,
    WeaknessCardComponent,
    Truncate,
    ResumeComponent,
    SettingComponent,
    HeaderComponent,
    LogoutComponent,
    NotFoundComponent,
    ProfileSettingsComponent,
    PasswordComponent,
    ResumeCardComponent,
    ErrorComponent,
    AddOrEditResumeComponent,
    TemplatesComponent,
    SingleTemplateComponent,
    TemplateCardComponent,
    BluesTemplateComponent,
    ClassicTemplateComponent,
    ModernTemplateComponent,
    RoyalTemplateComponent,
    TraditionalPanelTemplateComponent,
    SingleResumeComponent,
    TemplateContactDetailComponent,
    TemplateButtonsComponent,
    TemplateSkillCardComponent,
    TemplateLanguageCardComponent,
    TemplateStrengthCardComponent,
    TemplateWeaknessCardComponent,
    TemplateDetailsComponent,
    TemplateEducationComponent,
    TemplateEmploymentHistoryComponent,
    TemplateInterestComponent,
    TemplateIndustrialExposureComponent,
    TemplateAwardsComponent,
    TemplateObjectiveComponent,
    TemplateReferenceComponent,
    TemplateProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
  ],
  providers: [HttpService, ApiService,
    AlertService, AuthGuard, AnonGuard, VerificationCompleted,
    VerificationInComplete, OnBoardingComplete, OnBoardingInComplete, AuthRepository, ResumeRepository],
  bootstrap: [AppComponent]
})
export class AppModule {
}
