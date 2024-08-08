import { Product} from "./Product";
import { Review } from "./Review";
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



    displayReview(productName: string): void {
        const product = this.getProductByName(productName);
        if (product) {
            product.displayReviews();
        }
        else {
            console.log("product not found");
        }
    }
    calculateAverageRating(productName: string): void {
        const product = this.getProductByName(productName);
        if (product) {
            const averageRating = product.calculateAverage();
            console.log(`Average Rating for ${product.name}:${averageRating}`);
        }
        else {
            console.log("Product not found")
        }
    }
}