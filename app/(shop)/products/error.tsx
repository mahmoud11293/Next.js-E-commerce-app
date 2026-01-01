"use client";

export default function error({ error }: { error: Error }) {
  return (
    <div className="bg-red-600 text-white text-center text-2xl font-bold mt-10 container mx-auto p-6 ">
      <h2 className="mb-4">ERROR: Something went wrong</h2>
      <p>{error.message}</p>
    </div>
  );
}
