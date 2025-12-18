import AuthPageGuardService from "../guards/services/auth-page-guard.service";
import ToastifyService from "../../shared/services/toaster.service";
import UsersApiService from "../users/service/users-api.service";
import LocalStorageService from "../../shared/services/storage.service";

const toasterApiService = new ToastifyService(3000)
const usersApiService = new UsersApiService(toasterApiService)
const localStorageService = new LocalStorageService()

const authPageGuardService = new AuthPageGuardService(usersApiService, localStorageService);
authPageGuardService.init()