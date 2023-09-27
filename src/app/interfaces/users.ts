export interface IUsers {
    id?: number | string;
    name: string,
    email: string,
    password: string,
    passwordConfirmation?: string,
    role: number
}