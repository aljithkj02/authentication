"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const products = [
    {
        id: 1,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        price: 9.99,
        thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    },
    {
        id: 2,
        title: "Eyeshadow Palette with Mirror",
        description: "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
        price: 19.99,
        thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
    },
    {
        id: 3,
        title: "Powder Canister",
        description: "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
        price: 14.99,
        thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
    },
    {
        id: 4,
        title: "Red Lipstick",
        description: "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
        price: 12.99,
        thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png",
    },
    {
        id: 5,
        title: "Red Nail Polish",
        description: "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
        price: 8.99,
        thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png",
    },
    {
        id: 6,
        title: "Calvin Klein CK One",
        description: "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
        price: 49.99,
        thumbnail: "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png",
    },
    {
        id: 7,
        title: "Chanel Coco Noir Eau De",
        description: "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
        price: 129.99,
        thumbnail: "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png",
    },
    {
        id: 8,
        title: "Dior J'adore",
        description: "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
        price: 89.99,
        thumbnail: "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png",
    },
    {
        id: 9,
        title: "Dolce Shine Eau de",
        description: "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
        price: 69.99,
        thumbnail: "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/thumbnail.png",
    },
    {
        id: 10,
        title: "Gucci Bloom Eau de",
        description: "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
        price: 79.99,
        thumbnail: "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png",
    },
    {
        id: 11,
        title: "Annibale Colombo Bed",
        description: "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
        price: 1899.99,
        thumbnail: "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
    },
    {
        id: 12,
        title: "Annibale Colombo Sofa",
        description: "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
        price: 2499.99,
        thumbnail: "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png",
    },
    {
        id: 13,
        title: "Bedside Table African Cherry",
        description: "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
        price: 299.99,
        thumbnail: "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/thumbnail.png",
    },
    {
        id: 14,
        title: "Knoll Saarinen Executive Conference Chair",
        description: "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
        price: 499.99,
        thumbnail: "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png",
    },
    {
        id: 15,
        title: "Wooden Bathroom Sink With Mirror",
        description: "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
        price: 799.99,
        thumbnail: "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/thumbnail.png",
    },
    {
        id: 16,
        title: "Apple",
        description: "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
        price: 1.99,
        thumbnail: "https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png",
    },
    {
        id: 17,
        title: "Beef Steak",
        description: "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
        price: 12.99,
        thumbnail: "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/thumbnail.png",
    },
    {
        id: 18,
        title: "Cat Food",
        description: "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
        price: 8.99,
        thumbnail: "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/thumbnail.png",
    },
    {
        id: 19,
        title: "Chicken Meat",
        description: "Fresh and tender chicken meat, suitable for various culinary preparations.",
        price: 9.99,
        thumbnail: "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/thumbnail.png",
    },
    {
        id: 20,
        title: "Cooking Oil",
        description: "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
        price: 4.99,
        thumbnail: "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/thumbnail.png",
    },
    {
        id: 21,
        title: "Cucumber",
        description: "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
        price: 1.49,
        thumbnail: "https://cdn.dummyjson.com/products/images/groceries/Cucumber/thumbnail.png",
    },
    {
        id: 22,
        title: "Dog Food",
        description: "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
        price: 10.99,
        thumbnail: "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/thumbnail.png",
    },
    {
        id: 23,
        title: "Eggs",
        description: "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
        price: 2.99,
        thumbnail: "https://cdn.dummyjson.com/products/images/groceries/Eggs/thumbnail.png",
    },
    {
        id: 24,
        title: "Fish Steak",
        description: "Quality fish steak, suitable for grilling, baking, or pan-searing.",
        price: 14.99,
        thumbnail: "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/thumbnail.png",
    },
    {
        id: 25,
        title: "Green Bell Pepper",
        description: "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
        price: 1.29,
        thumbnail: "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/thumbnail.png",
    },
    {
        id: 26,
        title: "Green Chili Pepper",
        description: "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
        price: 0.99,
        thumbnail: "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/thumbnail.png",
    },
    {
        id: 27,
        title: "Honey Jar",
        description: "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
        price: 6.99,
        thumbnail: "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/thumbnail.png",
    },
    {
        id: 28,
        title: "Ice Cream",
        description: "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
        price: 5.49,
        thumbnail: "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/thumbnail.png",
    },
    {
        id: 29,
        title: "Juice",
        description: "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
        price: 3.99,
        thumbnail: "https://cdn.dummyjson.com/products/images/groceries/Juice/thumbnail.png",
    },
    {
        id: 30,
        title: "Kiwi",
        description: "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
        price: 2.49,
        thumbnail: "https://cdn.dummyjson.com/products/images/groceries/Kiwi/thumbnail.png",
    },
];
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield Promise.all(products.map((item) => __awaiter(this, void 0, void 0, function* () {
            return yield prisma.product.upsert({
                where: { id: item.id },
                update: {},
                create: Object.assign({}, item)
            });
        })));
        console.log(res);
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
