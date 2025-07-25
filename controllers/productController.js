import Product from "../models/product.js";

export async function createProduct(req, res){
    if(req.user == null){
        res.status(403).json({
            message : "You need to login first"
        })
        return;
    }
    if(req.user.role != "admin"){
        res.status(403).json({
            message : "You are not authorized to create product"
        })
        return;
    }

    const product = new Product(req.body);
    try {
        await product.save()
        res.json({
            message: "Product saved successfully",
        })
    }catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Product not saved"
        })
    } 
}

export function getProducts(req, res){
        Product.find().then(
            (products) => {
                res.json(products);
            }
        ).catch(
            (err) => {
                res.status(500).json({
                    message : "Products not found"
                })
            }
        )
    }

export function deleteProduct(req, res){
    if(req.user == null){
        res.status(403).json({
            message : "You need to login first"
        })
    }
    if(req.user.role != "admin"){
        res.status(403).json({
            message : "You are not authorized to delete product"
        })
    }
    Product.findOneAndDelete({
        productId : req.params.productId
    }).then(
        () => {
            res.json({
                message : "Product deleted successfully"
            })
        }
    ).catch(
        (err) => {
            console.log(err);
            res.status(500).json({
                message : "Product not deleted"
            })
        }
    )
}

export function updateProduct(req, res){
    if(req.user == null){
        res.status(403).json({
            message : "You need to login first"
        })
    }
    if(req.user.role != "admin"){
        res.status(403).json({
            message : "You are not authorized to update product"
        })
    }
    Product.findOneAndUpdate({
        productId : req.params.productId
    }, req.body).then(
        () => {
            res.json({
                message : "Product updated successfully"
            })
        }
    ).catch(
        (err) => {
            console.log(err);
            res.status(500).json({
                message : "Product not updated"
            })
        }
    )
}

export async function getProductById(req, res){
    const productId = req.params.productId;
    const product = await Product.findOne({productId: productId});
    if(product == null){
        res.status(404).json({
            message: "Product not found"
        });
        return;
    }
    res.json({
        product: product
    })
}