export class UserModel {
    private id!:string
    private email!:string
    private name!:string
    private password!:string
    private verify_token!:string
    private otp_code!:string


    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public getVerify_token(): string {
        return this.verify_token;
    }

    public setVerify_token(verify_token: string): void {
        this.verify_token = verify_token;
    }

    public setOtpCode(otp_code:string){
       this.otp_code =  otp_code
    }

    public getOtpCode():string{
        return this.otp_code
    }

    public getLogin(){
        return {
            email: this.email,
            password: this.password
        }
    }
    public getVerify2fa(){
        return {
            otp_code: this.otp_code,
            verify_token: this.verify_token
        }
    }

    public reset():UserModel{
        return new UserModel()
    }


}