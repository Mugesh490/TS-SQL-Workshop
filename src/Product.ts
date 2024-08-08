import { Review } from "./Review";
export class Product{
    public reviews:Review[]=[];
    constructor(public name:string){
        this.name=name;
    }

    addReview(rating:number,comment:string):void{
        this.reviews.push(new Review(rating,comment));
    }

    displayReviews():void{
        console.log(`Reviews for ${this.name}:`);
        this.reviews.forEach(review=>{
            console.log(`Rating: ${review.rating},Comment:${review.comment}`);
        });
    }
    calculateAverage():number{
        if(this.reviews.length===0){
            console.log("No reviews");
            return 0;
        }
        const totalRating=this.reviews.reduce((sum,review)=>sum+review.rating,0);
        return totalRating/this.reviews.length;
    }
}