export class LocalStorage {
    private jwt_token!: string
    private setup_token!: string
    private verify_token!: string

    public getJwt_token(): string {
        return localStorage.getItem('__jt__') as string;
    }
    
    public setJwt_token(jwt_token: string): void {
        if(jwt_token == null) return
        localStorage.setItem('__jt__', jwt_token)
    }
    
    public removeJwtToken(): void {
        localStorage.removeItem('__jt__')
    }
    
    public getSetup_token(): string {
        return localStorage.getItem('__st__') as string;
    }
    
    public removeSetupToken(): void {
        localStorage.removeItem('__st__')
    }
    public setSetup_token(setup_token: string): void {
        if(setup_token == null) return
        localStorage.setItem('__st__', setup_token)
    }
    public removeVerifyToken(): void {
        localStorage.removeItem('__vt__')
    }
    
    public getVerify_token(): string {
        return localStorage.getItem('__vt__') as string;
    }
    
    public setVerify_token(verify_token: string): void {
        if(verify_token == null) return
        localStorage.setItem('__vt__', verify_token)
    }

    public clearData(){
        localStorage.removeItem('__jt__')
        localStorage.removeItem('__st__')
        localStorage.removeItem('__vt__')
    }

}