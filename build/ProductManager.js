"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManager = void 0;
const Product_1 = require("./Product");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
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
    // displayReview(productName: string): void {
    //     const product = this.getProductByName(productName);
    //     if (product) {
    //         product.displayReviews();
    //     }
    //     else {
    //         console.log("product not found");
    //     }
    // }
    // calculateAverageRating(productName: string): void {
    //     const product = this.getProductByName(productName);
    //     if (product) {
    //         const averageRating = product.calculateAverage();
    //         console.log(`Average Rating for ${product.name}:${averageRating}`);
    //     }
    //     else {
    //         console.log("Product not found")
    //     }
    // }
    getUserInput() {
        let continueInput = true;
        while (continueInput) {
            const productName = prompt("Enter the product name:");
            const rating = parseInt(prompt("Enter the rating (1-5):"), 10);
            const comment = prompt("Enter your comment:");
            if (productName && !isNaN(rating) && comment) {
                this.addReview(productName, rating, comment);
            }
            else {
                console.log("Invalid input. Please try again.");
            }
            const continueResponse = prompt("Do you want to add another review? (yes/no):");
            if ((continueResponse === null || continueResponse === void 0 ? void 0 : continueResponse.toLowerCase()) !== "yes") {
                continueInput = false;
                const product = this.getProductByName(productName);
                if (product) {
                    product.displayReviews();
                    const averageRating = product.calculateAverage();
                    console.log(`Average Rating for ${product.name}:${averageRating}`);
                }
                else {
                    const product = this.getProductByName(productName);
                    if (product) {
                        product.displayReviews();
                        const averageRating = product.calculateAverage();
                        console.log(`Average Rating for ${product.name}:${averageRating}`);
                    }
                    else {
                        console.log("product not found");
                    }
                }
            }
        }
    }
}
exports.ProductManager = ProductManager;
