export interface userDetails{
    products:product[]
}
export interface product{
    id:number,
    title:string,
    description:string,
    category:string,
    price:number,
    tags:[],
    dimensions:Dimension,
    reviews:Review[]
}
interface Dimension{
    width:number,
    height:number,
    depth:number
}
interface Review{
    rating:number,
    comment:string
}
