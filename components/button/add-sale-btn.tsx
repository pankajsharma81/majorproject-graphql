import { CREATE_SALE } from "@/lib/gql/mutation";
import gqlClient from "@/lib/services/gql";
import React, { useState } from "react";

export default function AddSale({ product }) {
  const [quantity, setQuantity] = useState(1);

  async function handleSale() {
    if (product.stock < quantity) {
      alert("sale quantity cannot be more than avl stock");
      return;
    }

    try {
      const data = await gqlClient.request(CREATE_SALE, {
        id: product.id,
        quantity,
      });

      if(data?.createSale){
        alert("success")
        
      }else{
        alert("sales not working")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <input
        value={quantity}
        onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
        type="number"
      />
      <button onClick={handleSale}>Add to sale</button>
    </div>
  );
}
