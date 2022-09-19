import { CustomErrors } from "./custom-errors";

export class NotFoundError extends CustomErrors{


    statusCode=404;


constructor(){

    super('Route not found')
}


serializeErrors(){

return [{message:'Not Found'}]
}
    
}