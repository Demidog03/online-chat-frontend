import {UsersApiServiceInterface} from "../../users/service/users-api.types";

export default class ProfileFormService {
    constructor(
        private fullnameInput: HTMLInputElement,
        private emailInput: HTMLInputElement,
        private usersApiService: UsersApiServiceInterface,
    ) {}

    async init() {
        const userProfile = await this.usersApiService.profile()

        if (userProfile) {
            this.fullnameInput.value = userProfile.name || ''
            this.emailInput.value = userProfile.email || ''
        }
    }
}