export abstract class CustomErrors extends  Error{


    abstract statusCode:number;

    constructor(message:string){

        super(message);

        Object.setPrototypeOf(this, CustomErrors.prototype)
    }


    abstract serializeErrors(): {message: string, field?:string}[];
}