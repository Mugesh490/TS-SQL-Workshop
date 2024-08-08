"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const Review_1 = require("./Review");
class Product {
    constructor(name) {
        this.name = name;
        this.reviews = [];
        this.name = name;
    }
    addReview(rating, comment) {
        this.reviews.push(new Review_1.Review(rating, comment));
    }
    displayReviews() {
        console.log(`Reviews for ${this.name}:`);
        this.reviews.forEach(review => {
            console.log(`Rating: ${review.rating},Comment:${review.comment}`);
        });
    }
    calculateAverage() {
        if (this.reviews.length === 0) {
            console.log("No reviews");
            return 0;
        }
        const totalRating = this.reviews.reduce((sum, review) => sum + review.rating, 0);
        return totalRating / this.reviews.length;
    }
}
exports.Product = Product;
