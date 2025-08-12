"use client"
import AddSale from '@/components/button/add-sale-btn'
import ProductSaleChart from '@/components/product-sales'
import { Product } from '@/generated/prisma'
import { GET_PRODUCT } from '@/lib/gql/queries'
import gqlClient from '@/lib/services/gql'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function ProductDetail() {
    const params = useParams()
    const id = params.id
    const [product,setProduct] = useState<Product | null>(null)
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        async function getProductDetails(){
            const data = await gqlClient.request(GET_PRODUCT,{
                getProductId : id
            })

            if(data?.getProduct){
                setProduct(data.getProduct)
            }

        }
        getProductDetails()
    },[id])
  return (
    <div>ProductDetail
        {product?.title}
        <p>{product?.stock}</p>

        <AddSale product={product}/>

        <div className='h-120 w-120'>
            <ProductSaleChart/>
        </div>

    </div>
  )
}
