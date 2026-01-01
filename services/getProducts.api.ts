export async function getProducts(limit = 40) {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/api/v1/products?limit=${limit}`,
      {
        cache: "no-cache",
        next: { revalidate: 120, tags: ["products"] },
      }
    );
    if (!res.ok) throw new Error(res.statusText || "Failed to fetch data");

    const data = await res.json();
    return data;
  } catch (error) {
    return { error: error as string };
  }
}

export async function getProductDetails(id: string) {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/api/v1/products/${id}`,
      {
        cache: "no-cache",
        next: { revalidate: 120, tags: ["products"] },
      }
    );
    if (!res.ok) throw new Error(res.statusText || "Failed to fetch data");

    const data = await res.json();
    return data;
  } catch (error) {
    return { error: error as string };
  }
}
