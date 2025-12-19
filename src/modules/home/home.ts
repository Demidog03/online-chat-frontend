import AuthPageGuardService from "../guards/services/auth-page-guard.service";
import ToastifyService from "../../shared/services/toaster.service";
import UsersApiService from "../users/service/users-api.service";
import LocalStorageService from "../../shared/services/storage.service";

const toasterApiService = new ToastifyService(3000)
const localStorageService = new LocalStorageService()
const usersApiService = new UsersApiService(toasterApiService, localStorageService)

const authPageGuardService = new AuthPageGuardService(usersApiService, localStorageService);
authPageGuardService.init()