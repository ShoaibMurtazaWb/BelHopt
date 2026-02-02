import CartComponent from "../../components/cart/cartComponent";
import useCarts from "../../hooks/useCarts";

export default function CartsPage() {
    const { data: carts, isLoading } = useCarts();

    if (isLoading) return <div>Loading carts...</div>;

    return (
        <div className="min-h-screen bg-gray-100 p-6 space-y-6">
            {carts?.map(cart => (
                <CartComponent key={cart.id} cart={cart} />
            ))}
        </div>
    );
}
