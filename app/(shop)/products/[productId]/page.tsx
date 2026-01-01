import { Button } from "@/components/ui/button";
import { IProduct } from "@/Interfaces/product.interface";
import { getProductDetails } from "@/services/getProducts.api";
import { Star } from "lucide-react";
import Image from "next/image";

export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = await params;
  const { data: Product }: { data: IProduct } = await getProductDetails(
    productId
  );

  return (
    <>
      <div className="container w-full lg:w-[80%] mx-auto my-4 p-4 flex">
        <div className="w-1/2">
          <div className="p-4 bg-gray-100">
            <Image
              className="w-full mx-auto object-contain"
              src={Product.imageCover}
              alt={Product.title}
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="w-1/2">
          <div className="p-4">
            <h1 className="text-2xl font-semibold py-4">{Product.title}</h1>
            <p className="text-sm border-b border-b-gray-400 pb-6">
              {Product.description}
            </p>
            <p className="py-4 text-emerald-600">{Product.category.name}</p>
            <div className="flex justify-between w-full my-4">
              <span className="font-semibold text-xl">{Product.price} EGP</span>
              <div className="flex items-center gap-x-1">
                <Star className="text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-semibold text-gray-500">
                  {Product.ratingsAverage}
                </span>
              </div>
            </div>
            <Button
              className="cursor-pointer my-4 w-full"
              variant={"destructive"}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
