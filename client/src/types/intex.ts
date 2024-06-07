export interface IRootState {
    global: {
        isLoading: boolean;
    }
}

export interface AuthResponse {
    status: boolean,
    message: string;
    access_token: string;
}
