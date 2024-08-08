"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManager = void 0;
const Product_1 = require("./Product");
class ProductManager {
    constructor() {
        this.products = [];
        const productNames = ["Smartwatch", "Laptop", "Mobile", "Headphone", "Mouse", "Keyboard", "Monitor", "HDMI", "TV", "camera"];
        productNames.forEach(name => this.products.push(new Product_1.Product(name)));
    }
    addProduct(product) {
        this.products.push(product);
    }
    getProductByName(productName) {
        return this.products.find(p => p.name === productName);
    }
    addReview(productName, rating, comment) {
        const product = this.getProductByName(productName);
        if (product) {
            product.addReview(rating, comment);
        }
        else {
            console.log("Product not found");
        }
    }
    displayReview(productName) {
        const product = this.getProductByName(productName);
        if (product) {
            product.displayReviews();
        }
        else {
            console.log("product not found");
        }
    }
    calculateAverageRating(productName) {
        const product = this.getProductByName(productName);
        if (product) {
            const averageRating = product.calculateAverage();
            console.log(`Average Rating for ${product.name}:${averageRating}`);
        }
        else {
            console.log("Product not found");
        }
    }
}
exports.ProductManager = ProductManager;
