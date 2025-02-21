import { SpawnSyncOptionsWithBufferEncoding } from "child_process";

export interface User {
    firstname: string;
    lastname: string;
    username: string;
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
