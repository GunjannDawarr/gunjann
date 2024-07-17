const mongoose = require('mongoose');
const Product = require('./models/product');

const products = [
    {
        name:"airpods",
        img:"https://unsplash.com/photos/white-and-black-plastic-toy-gSZCLsE7ysc",
        price:30000,
        desc:"wireless Bluetooth earbuds designed by Apple"
    },
    {
        name:"watch",
        img:"https://unsplash.com/photos/a-close-up-of-a-watch-on-a-black-surface-dNnvotbg35Q",
        price:250000,
        desc:"samay bada balwaan hai"
    },
    {
        name:"Prada-bag",
        img:"https://unsplash.com/photos/a-pink-purse-with-hearts-and-flowers-on-it-yDT4Z_q2ro8",
        price:300000,
        desc:"Bling bling bling bling bling i like chains on chains"
    },
    {
        name:"Dior-lipstick",
        img:"https://images.unsplash.com/photo-1692306650906-5c475bf1e663?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price:50000,
        desc:"Cause lipstick on your collar told a tale on you, boy"
    },
    {
        name:"Chanel-perfume",
        img:"https://images.unsplash.com/photo-1708733145706-82da0d0596e9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhbmVsJTIwcGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D",
        price:80000,
        desc:"I bought my bitch some Chanel No.5"
    }
    

]

async function seedDB(){
    // await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("data seeded successfully")
}

module.exports = seedDB;