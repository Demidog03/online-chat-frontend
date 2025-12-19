import 'bootstrap/dist/js/bootstrap.min.js'
import './declare.d.ts'
import NavbarComponent from "./modules/navbar/ui/navbar.component";
import UsersApiService from "./modules/users/service/users-api.service";
import LocalStorageService from "./shared/services/storage.service";
import ToastifyService from "./shared/services/toaster.service";

// SERVICES
const toasterApiService = new ToastifyService(3000)
const localStorageService = new LocalStorageService()
const usersApiService = new UsersApiService(toasterApiService, localStorageService)

// NAVBAR
const header: HTMLElement | null = document.querySelector('header')
const navbarComponent = new NavbarComponent(header, usersApiService, localStorageService)
navbarComponent.render()