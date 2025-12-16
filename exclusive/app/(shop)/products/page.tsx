import { getProducts } from "@/services/getProducts.api";
import { IProduct } from "@/Interfaces/product.interface";
import ProductItem from "@/components/products/ProductItem";

export default async function ProductsPage() {
  const { data: products }: { data: IProduct[] } = await getProducts();

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-15 mb-15">
          {products &&
            products.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))}
        </div>
      </div>
    </section>
  );
}
