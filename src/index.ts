import { Product } from "./Product";
import { Review } from "./Review";
import { ProductManager } from "./ProductManager";

const productManager=new ProductManager();

productManager.addReview("Laptop",5,"Excellent Product");
productManager.addReview("Laptop",4,"Good Laptop");
productManager.addReview("Mobile",2,"Average");
productManager.addReview("Mobile",4,"Good");

productManager.displayReview("Laptop");
productManager.calculateAverageRating("Laptop");

productManager.displayReview("Mobile");
productManager.calculateAverageRating("Mobile");


