export interface IUsers {
    _id: string;
    name: string;
    email: string;
    password: string;
    role: "admin" | "member";

}