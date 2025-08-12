import { ProductCategory } from "@/generated/prisma";
import prismaClient from "@/lib/services/prisma";

export async function addProducts(
  _: any,
  args: {
    id: string;
    title: string;
    description: string;
    category: ProductCategory;
    price: number;
    stock: number;
    ImageUrl: string;
  }
) {
  try {
    const createdProducts = await prismaClient.product.create({
      data: args,
    });
    return createdProducts;
  } catch (error) {
    return null;
  }
}


export async function getAllProducts(){
  try{
    const products = await prismaClient.product.findMany()
    return products
  }catch(err){
    return null;
  }
}