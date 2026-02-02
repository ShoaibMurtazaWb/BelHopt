export default function ProductCardSkeleton() {
  return (
    <div className="flex flex-col grow p-5 shrink-0 min-w-60 gap-4 justify-center items-center animate-pulse">
      {/* Image */}
      <div className="w-full h-32 bg-gray-200 rounded-md" />

      {/* Price */}
      <div className="w-20 h-6 bg-gray-200 rounded" />

      {/* Title */}
      <div className="w-full h-5 bg-gray-200 rounded" />

      {/* Weight */}
      <div className="w-24 h-4 bg-gray-200 rounded" />

      {/* Stock */}
      <div className="w-16 h-4 bg-gray-200 rounded" />
    </div>
  );
}