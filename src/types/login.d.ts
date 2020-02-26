declare namespace UserLogin {
    interface LoginRequest {
        userId: string,
        userName: string,
        password: string,
        deviceName: string,
        ipAddress: string,
        loginTime: string,
        logoutTime: string,
        refreshToken: string
    }
}