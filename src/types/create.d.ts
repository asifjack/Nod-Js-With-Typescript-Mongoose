declare namespace User {
    interface CreateRequest {
        userName: string,
        password: string

    }

    interface ChangePasswordRequest {
        userName: string,
        currentPassword: string,
        newPassword: string,

    }
}