export interface User extends UserInfo {
    token: string;
}

export interface UserInfo {
    email: string;
    username: string;
    bio: string;
    image?: string;
}

export interface UserAuthInfo {
    username: string;
    password: string;
    email: string;
}

export interface UserRepository {
    add(userInfo: UserAuthInfo): Promise<User>;
    authBy(userInfo: UserAuthInfo): Promise<User>;
    updae(updatedUser: UserInfo, token: string): Promise<User>;
}
