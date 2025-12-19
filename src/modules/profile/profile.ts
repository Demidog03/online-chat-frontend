import AuthPageGuardService from "../guards/services/auth-page-guard.service";
import ToastifyService from "../../shared/services/toaster.service";
import UsersApiService from "../users/service/users-api.service";
import LocalStorageService from "../../shared/services/storage.service";
import ProfileFormService from "./services/profile-form.service";

// SERVICES
const toasterApiService = new ToastifyService(3000)
const localStorageService = new LocalStorageService()
const usersApiService = new UsersApiService(toasterApiService, localStorageService)

// AUTH PAGE GUARD
const authPageGuardService = new AuthPageGuardService(usersApiService, localStorageService);
authPageGuardService.init()

// PROFILE FORM SERVICE
const fullnameInput: HTMLInputElement | null = document.querySelector('#fullnameInput')
const emailInput: HTMLInputElement | null = document.querySelector('#emailInput')

if (fullnameInput && emailInput && usersApiService) {
    const profileFormService = new ProfileFormService(fullnameInput, emailInput, usersApiService)
    profileFormService.init()
}