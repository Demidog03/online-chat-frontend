import {UsersApiServiceInterface} from "../../users/service/users-api.types";
import {StorageServiceInterface} from "../../../shared/services/storage.service";

export interface AuthPageGuardServiceInterface {
    init(): void;
}

export default class AuthPageGuardService implements AuthPageGuardServiceInterface {
    constructor(
        private usersApiService: UsersApiServiceInterface,
        private storageService: StorageServiceInterface,
    ) {}

    async init() {
        const data = await this.getProfile()

        if (!data) {
            this.storageService.removeFromStorage('accessToken')
            this.storageService.addToStorage('from', location.pathname)
            location.href = '/sign-in'
        }
    }

    private async getProfile() {
        try {
            return await this.usersApiService.profile()
        }
        catch (error: Error | unknown) {
            console.error(error)
        }
    }
}