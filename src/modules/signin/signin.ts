import SigninFormService from "./services/sign-in-form.service";
import LocalStorageService from "../../shared/services/storage.service";
import UsersApiService from "../users/service/users-api.service";
import ToastifyService from "../../shared/services/toaster.service";
import PublicPageGuardService from "../guards/services/public-page-guard.service";

const emailInput: HTMLInputElement | null = document.querySelector('#emailInput')
const passwordInput: HTMLInputElement | null = document.querySelector('#passwordInput')
const signInForm: HTMLFormElement | null = document.querySelector('#signInForm')
const emailValidationFeedbackEl: HTMLDivElement | null = document.querySelector('#emailValidationFeedback')
const passwordValidationFeedbackEl: HTMLDivElement | null = document.querySelector('#passwordValidationFeedback')

const toasterApiService = new ToastifyService(3000)
const localStorageService = new LocalStorageService()
const usersApiService = new UsersApiService(toasterApiService)

const publicPageGuardService = new PublicPageGuardService(usersApiService,localStorageService)
publicPageGuardService.init()

if (emailInput && passwordInput && signInForm && emailValidationFeedbackEl && passwordValidationFeedbackEl) {
    const signinFormService = new SigninFormService(signInForm, emailInput, passwordInput, emailValidationFeedbackEl, passwordValidationFeedbackEl, localStorageService, usersApiService)

    void signinFormService.initEmailInputValue()
    void signinFormService.addSubmitEvent()
    void signinFormService.addEmailKeyUpEvent()
    void signinFormService.addPasswordKeyUpEvent()
}

