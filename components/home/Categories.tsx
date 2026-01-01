//  Category API Call
import { getCategories } from "@/services/getCategories.api";
//  Category Interface
import { ICategory } from "@/Interfaces/categories.interface";
//  Category Slider
import CategorySlider from "./CategorySlider";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import { Separator } from "../ui/separator";

export default async function Categories() {
  const { data: categories }: { data: ICategory[] } = await getCategories();

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <SectionTitle title={"Categories"} subtitle={"Browse By Category"} />
        <CategorySlider categories={categories} />

        <Separator />
      </div>
    </section>
  );
}
