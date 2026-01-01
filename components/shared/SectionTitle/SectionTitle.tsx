import React from "react";

export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-15">
      <h2 className="font-semibold text-red-600 mb-5 ps-9 relative before:content-[''] before:rounded-sm before:absolute before:top-1/2 before:start-0 before:-translate-y-1/2 before:w-5 before:h-10 before:bg-red-600">
        {title}
      </h2>
      <span className="text-3xl font-semibold">{subtitle}</span>
    </div>
  );
}
