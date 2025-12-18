import {UsersApiServiceInterface} from "../../users/service/users-api.types";
import {StorageServiceInterface} from "../../../shared/services/storage.service";

export interface PublicPageGuardServiceInterface {
    init(): void;
}

export default class PublicPageGuardService implements PublicPageGuardServiceInterface {
    constructor(
        private usersApiService: UsersApiServiceInterface,
        private storageService: StorageServiceInterface,
    ) {}

    async init() {
        const data = await this.getProfile()

        if (data) {
            location.href = '/profile'
        }
    }

    private async getProfile() {
        try {
            const accessToken = this.storageService.getFromStorage('accessToken');
            if (accessToken) {
                return await this.usersApiService.profile(accessToken)
            }
        }
        catch (error: Error | unknown) {
            console.error(error)
        }
    }
}