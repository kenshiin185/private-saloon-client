export interface User {
    isLoggedin?: boolean;
    _id?: string;
    user: string;
    password: string;
    image?: string;
}