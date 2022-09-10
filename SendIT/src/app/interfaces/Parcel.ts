export interface Parcel{

    id?:number,
    senderName:string
    receiverName:string
    senderEmail:string
    receiverEmail:string
    from:string
    to:string
    dispatchedDate:string
    deliveryDate:string
    weight:number
    price:number
}