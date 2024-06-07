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

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    createdAt: string;
    updatedAt: string;
}

export interface ProductsResponse {
    status: boolean,
    message?: string,
    data: Product[]
}