import { Product } from "./Product";
import { Review } from "./Review";
import promptSync from "prompt-sync";
const prompt = promptSync();
export class ProductManager {
    private products: Product[] = [];
    constructor() {
        const productNames = ["Smartwatch", "Laptop", "Mobile", "Headphone", "Mouse", "Keyboard", "Monitor", "HDMI", "TV", "camera"];
        productNames.forEach(name => this.products.push(new Product(name)));
    }
    addProduct(product: Product): void {
        this.products.push(product);

    }
    getProductByName(productName: string): Product | undefined {
        return this.products.find(p => p.name === productName);

    }
    addReview(productName: string, rating: number, comment: string): void {
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

    getUserInput(): void {
        let continueInput = true;
        while (continueInput) {
            const productName = prompt("Enter the product name:");
            const rating = parseInt(prompt("Enter the rating (1-5):"), 10);
            const comment = prompt("Enter your comment:");

            if (productName && !isNaN(rating) && comment) {
                this.addReview(productName, rating, comment);
            } else {
                console.log("Invalid input. Please try again.");
            }

            const continueResponse = prompt("Do you want to add another review? (yes/no):");
            if (continueResponse?.toLowerCase() !== "yes") {
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
