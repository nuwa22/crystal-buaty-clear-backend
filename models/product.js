import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    productId : {
        type : String,
        required : true,
        unique : true
    },
    productName : {
        type : String,
        required : true
    },
    altName : {
        type : [String],
        default : []
    },
    price : {
        type : Number,
        required : true
    },
    lebeledPrice : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    images : {
        type : [String],
        required : true,
        default : ["https://st3.depositphotos.com/3687485/36145/v/450/depositphotos_361457414-stock-illustration-makeup-products-vector-illustration-beautiful.jpg"]
    },
    stock : {
        type : Number,
        required : true
    }
})

const Product = mongoose.model("products", productSchema);

export default Product;