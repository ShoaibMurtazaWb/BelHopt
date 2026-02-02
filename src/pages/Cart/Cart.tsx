import MainHeader from "../../components/Headers/MainHeader";
import { EditIcon, MinusIcon, PlusIcon, Trash2 } from "lucide-react";
import Button from "../../components/Button";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { items, removeItem, increase, decrease } = useCart();
  const navigate = useNavigate();

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const platformFee = subtotal * 0.05;
  const driverFee = items.length ? 14.99 : 0;
  const total = subtotal + platformFee + driverFee;

  if (items.length === 0) {
    return (
      <>
        <MainHeader />

        <main className="px-20 py-20 flex flex-col items-center justify-center gap-6">
          <img
            src="/Empty Cart.jpg"
            alt="Empty Cart"
            className="w-60 opacity-70"
          />

          <h2 className="text-2xl font-semibold">Your cart is empty</h2>

          <p className="text-gray-500">
            Looks like you haven’t added anything yet
          </p>

          <Button onClick={() => navigate("/")}>Continue Shopping</Button>
        </main>
      </>
    );
  }

  return (
    <>
      <MainHeader />

      <main className="px-20 py-10">
        <h2 className="text-2xl mb-6">My Cart</h2>

        <div className="flex justify-between gap-10">
          {/* LEFT: CART TABLE */}
          <div className="flex-1 border-gray-300">
            <table className="w-full">
              <thead className="border-b">
                <tr className="text-left">
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-b">
                    {/* Product */}
                    <td className="py-6" >
                      <div className="flex items-center gap-5">
                        <div className="border p-5 border-gray-300 hover:cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => navigate(`/product/${item.id}`) }>
                          <img src={item.thumbnail} className="w-20"  />
                        </div>
                        <div>
                          <h2 className="hover:text-red-500 transition-colors hover:cursor-pointer" onClick={() => navigate(`/product/${item.id}`) }>{item.title}</h2>
                          <p className="text-sm text-gray-500">
                            VIP {item.title}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Price */}
                    <td>${item.price.toFixed(2)}</td>

                    {/* Quantity */}
                    <td>
                      <div className="flex items-center justify-between w-32 gap-4 bg-red-100 rounded-full p-1">
                        <button
                          className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors hover:cursor-pointer"
                          onClick={() => decrease(item.id)}
                        >
                          <MinusIcon size={20} />
                        </button>

                        <span className="font-semibold">{item.quantity}</span>

                        <button
                          className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors hover:cursor-pointer"
                          onClick={() => increase(item.id)}
                        >
                          <PlusIcon size={20} />
                        </button>
                      </div>
                    </td>

                    {/* Edit */}
                    <td>
                      <EditIcon className="cursor-pointer" />
                    </td>

                    {/* Delete */}
                    <td>
                      <Trash2
                        className="cursor-pointer text-red-500"
                        onClick={() => removeItem(item.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* RIGHT: ORDER SUMMARY */}
          <div className="w-96 border border-gray-300 p-6">
            <table className="w-full">
              <tbody className="space-y-3">
                <tr className="flex justify-between">
                  <td>Subtotal</td>
                  <td>${subtotal.toFixed(2)}</td>
                </tr>
                <tr className="flex justify-between">
                  <td>Platform Fee</td>
                  <td>${platformFee.toFixed(2)}</td>
                </tr>
                <tr className="flex justify-between">
                  <td>Driver Fee</td>
                  <td>${driverFee.toFixed(2)}</td>
                </tr>
                <tr className="flex justify-between font-semibold text-lg">
                  <td>Total</td>
                  <td>${total.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>

            <div className="border-t border-gray-300 pt-5 mt-5">
              <Button className="w-full" onClick={() => navigate("/checkout")}>
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
