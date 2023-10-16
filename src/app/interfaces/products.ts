export interface IProducts {
    _id: number;
    name: string;
    price: number;
    images: string,
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
    deleted?: boolean;
}