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

export async function getAllProducts() {
  try {
    const products = await prismaClient.product.findMany();
    return products;
  } catch (err) {
    return null;
  }
}

export async function getProduct(
  _: any,
  args: {
    id: string;
  }
) {
  const id = args.id;
  try {
    const product = await prismaClient.product.findUnique({
      where: { id: id },
    });
    if (product) return product;
    return product;
  } catch (error) {
    return null;
  }
}

export async function createSale(
  _: any,
  args: {
    id: string;
    quantity: number;
  }
) {
  try {
    const sale = await prismaClient.sale.create({
      data: {
        productId: args.id,
        quantity: args.quantity,
      },
    });
    if (sale) {
      await prismaClient.product.update({
        where: {
          id: args.id,
        },
        data:{
          stock:{
            decrement:args.quantity
          }
        }
      });
    }
    return true;
  } catch (error) {
    return false;
  }
}
