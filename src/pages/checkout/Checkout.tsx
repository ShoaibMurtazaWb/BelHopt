import { useState } from "react";
import MainHeader from "../../components/Headers/MainHeader";
import Button from "../../components/Button";
import { useCart } from "../../components/cart/CartContext";
import { useNavigate } from "react-router-dom";
import { MapPin, Trash } from "lucide-react";

export default function Checkout() {
    const { items, totalItems } = useCart();
    const navigate = useNavigate();

    const [tipPercent, setTipPercent] = useState(20);

    const subtotal = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const platformFee = subtotal * 0.05;
    const driverFee = items.length ? 14.99 : 0;
    const tipAmount = subtotal * (tipPercent / 100);
    const total = subtotal + platformFee + driverFee + tipAmount;

    const [emails, setEmails] = useState<string[]>([]);
    const addEmail = () => {
        setEmails(prev => [...prev, ""]);
    };

    const removeEmail = (index: number) => {
        setEmails(prev => prev.filter((_, i) => i !== index));
    };

    const updateEmail = (index: number, value: string) => {
        setEmails(prev =>
            prev.map((email, i) => (i === index ? value : email))
        );
    };


    if (items.length === 0) {
        navigate("/cart");
        return null;
    }

    return (
        <>
            <MainHeader />

            <main className="px-20 py-10">
                <h2 className="text-2xl font-semibold mb-8">Checkout</h2>

                <div className="flex gap-10">
                    {/* LEFT SIDE */}
                    <div className="flex-1 flex flex-col gap-6">
                        {/* ETA */}
                        <section className="border border-gray-300 p-6">
                            <h3 className="font-semibold mb-4">
                                Expected Time of Arrival
                            </h3>

                            <div className="flex gap-4 ">
                                <input
                                    type="date"
                                    className="border border-gray-300 rounded-lg  p-3 flex-1 focus:ring-0 focus:outline-none"
                                />
                                <input
                                    type="time"
                                    className="border border-gray-300 rounded-lg  p-3 flex-1 focus:ring-0 focus:outline-none"
                                />
                            </div>
                        </section>

                        {/* Contact Info */}
                        <section className="border border-gray-300 p-6">
                            <h3 className="font-semibold mb-4">
                                Contact Information
                            </h3>

                            <input
                                type="tel"
                                placeholder="+123 456-7890"
                                className="border border-gray-300 rounded-lg  p-3 w-full focus:ring-0 focus:outline-none"
                            />
                        </section>

                        {/* Address */}
                        <section className="border border-gray-300 p-6">
                            <h3 className="font-semibold mb-4">
                                Delivery Address
                            </h3>
                            <div className="flex gap-5 border border-gray-300 rounded-lg  justify-center items-center px-2 py-1 mb-5">
                                <MapPin />
                                <input
                                    type="text"
                                    className=" w-full p-3 flex-1 border-none focus:ring-0 focus:outline-none"
                                    placeholder="LH 123, Apt. 2 Zabar's, Broadway, New York, NY, USA"
                                />
                            </div>

                            <label className="flex items-center gap-2 text-sm">
                                <input type="checkbox" />
                                I've confirmed the above address
                            </label>
                        </section>

                        {/* Split Bill */}
                        <section className="border border-gray-300 p-6">
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold">
                                    Split total bill <span className="text-gray-400">(Optional)</span>
                                </h3>

                                <button
                                    className="text-sm border px-4 py-2 rounded-full hover:bg-gray-50"
                                    onClick={addEmail}
                                >
                                    + Add additional email
                                </button>
                            </div>

                            {emails.length === 0 ? (
                                <p className="text-sm text-gray-400 mt-4">
                                    No additional email added yet
                                </p>
                            ) : (
                                <div className="mt-4 flex flex-col gap-4">
                                    {emails.map((email, index) => (
                                        <div key={index} className="flex gap-3 items-start">
                                            <div className="flex-1 ">
                                                <label className="block text-sm font-medium mb-1">
                                                    Email {index + 1}
                                                </label>
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => updateEmail(index, e.target.value)}
                                                    placeholder="you@example.com"
                                                    className="py-2.5 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:ring-0 focus:outline-none"
                                                />
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() => removeEmail(index)}
                                                className="mt-7 text-red-500 hover:text-red-700 text-sm"
                                            >
                                                <Trash />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="w-[380px] border border-gray-300 p-6 h-fit">
                        <h3 className="font-semibold mb-4">
                            Order Summary ({totalItems} items)
                        </h3>

                        <div className="flex flex-col gap-3 text-sm">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Platform Fee (5%)</span>
                                <span>${platformFee.toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Driver’s fee</span>
                                <span>${driverFee.toFixed(2)}</span>
                            </div>
                        </div>

                        {/* Tip */}
                        <div className="mt-6">
                            <p className="text-sm mb-2">Tip for Driver</p>

                            <div className="flex gap-2">
                                {[10, 15, 20].map(p => (
                                    <button
                                        key={p}
                                        className={`px-4 py-2 rounded-full text-sm ${tipPercent === p
                                            ? "bg-red-500 text-white"
                                            : "bg-gray-100"
                                            }`}
                                        onClick={() => setTipPercent(p)}
                                    >
                                        {p}%
                                    </button>
                                ))}

                                {/* <button className="px-4 py-2 rounded-full bg-gray-100 text-sm">
                  Custom
                </button
                > */}
                            </div>
                        </div>

                        {/* Total */}
                        <div className="border-t mt-6 pt-4">
                            <div className="flex justify-between font-semibold text-lg">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>

                        <p className="text-xs text-gray-400 mt-4">
                            Your personal data will be used to process your order.
                        </p>

                        <Button className="w-full mt-6">
                            Place Order
                        </Button>
                    </div>
                </div>
            </main>
        </>
    );
}