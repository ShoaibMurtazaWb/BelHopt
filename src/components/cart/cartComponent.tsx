import type { CartComponentProps } from "../../lib/types";
const CartComponent: React.FC<CartComponentProps> = ({ cart }) => {
    return (
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                        Cart #{cart.id}
                    </h2>
                    <p className="text-sm text-gray-500">
                        User ID: {cart.userId}
                    </p>
                </div>

                <div className="mt-4 sm:mt-0 flex gap-4 text-sm">
                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                        Products: <strong>{cart.totalProducts}</strong>
                    </span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                        Qty: <strong>{cart.totalQuantity}</strong>
                    </span>
                </div>
            </div>

            {/* Products */}
            <div className="divide-y">
                {cart.products.map(product => (
                    <div
                        key={product.id}
                        className="flex flex-col sm:flex-row gap-4 py-4"
                    >
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-24 h-24 rounded-lg object-cover border"
                        />

                        <div className="flex-1">
                            <h3 className="font-semibold text-gray-800">
                                {product.title}
                            </h3>

                            <div className="mt-1 text-sm text-gray-500">
                                Price: ${product.price} × {product.quantity}
                            </div>

                            <div className="mt-2 flex flex-wrap items-center gap-3">
                                <span className="text-sm line-through text-gray-400">
                                    ${product.total}
                                </span>
                                <span className="text-sm font-semibold text-green-600">
                                    ${product.discountedTotal}
                                </span>
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                    {product.discountPercentage}% OFF
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="border-t mt-6 pt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="text-gray-600 text-sm">
                    <p>Total items: {cart.totalQuantity}</p>
                </div>

                <div className="mt-4 sm:mt-0 text-right">
                    <p className="text-sm text-gray-400 line-through">
                        ${cart.total}
                    </p>
                    <p className="text-2xl font-bold text-gray-800">
                        ${cart.discountedTotal}
                    </p>
                    <p className="text-sm text-green-600">
                        You saved ${(cart.total - cart.discountedTotal).toFixed(2)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CartComponent;