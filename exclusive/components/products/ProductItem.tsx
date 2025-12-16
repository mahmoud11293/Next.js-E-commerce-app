import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { IProduct } from "@/Interfaces/product.interface";
import { Star } from "lucide-react";
import Link from "next/link";

export default function ProductItem({ product }: { product: IProduct }) {
  return (
    <div>
      <picture className="relative group ">
        <Link href={`/products/${product._id}`}>
          <Image
            src={product.imageCover}
            alt={product.title}
            className="w-full object-contain h-[200px] bg-gray-100"
            width={300}
            height={300}
          />
        </Link>
        <Button className="w-full absolute bottom-0 translate-y-full group-hover:translate-y-0 invisible group-hover:visible">
          Add to Cart
        </Button>
      </picture>

      <h2 className="font-medium my-2 line-clamp-1">
        <Link href={`/products/${product._id}`}>{product.title}</Link>
      </h2>

      <div className="flex justify-between items-center">
        <span className="font-medium text-red-500">${product.price} EGP</span>
        <div className="flex items-center gap-x-1">
          <Star className="text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-semibold text-gray-500">
            {product.ratingsAverage}
          </span>
        </div>
      </div>
    </div>
  );
}
