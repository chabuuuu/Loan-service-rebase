
export interface IAuthenticationService<T> {
    getAccount(id: number, role: string): Promise<any>;
}