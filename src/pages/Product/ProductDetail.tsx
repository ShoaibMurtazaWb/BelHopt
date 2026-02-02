import { useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import MainHeader from "../../components/Headers/MainHeader";
import ProductCard from "../../components/product/ProductCard";
import { ArrowLeftIcon, ArrowRightIcon, MinusIcon, PlusIcon } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useProduct, useProductsByCategory } from "../../hooks/useProducts";

export default function ProductDetail() {
    const { id: productId } = useParams<{ id: string }>();
    const [viewImage, setViewImage] = useState(0);
    const { data: product } = useProduct(Number(productId));
    const { data: relatedProducts } = useProductsByCategory({
        category: product?.category,
        page: 1,
        limit: 12,
    });    const scrollRef = useRef<HTMLDivElement>(null);
    const { items, addItem, increase, decrease } = useCart();
    const cartItem = items.find(p => p.id === product?.id)


    const navigate = useNavigate();

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({
            left: -380,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({
            left: 380,
            behavior: "smooth",
        });
    };

    const images = product?.images ?? [];

    if (!product) {
        return (
            <>
                <MainHeader />
                <p className="p-20">Loading product...</p>
            </>
        );
    }

    return (
        <>
            <MainHeader />

            <main className="p-20">



                <div className="flex gap-10">
                    {/* Images */}
                    <div className="flex flex-col items-center gap-20 justify-center p-10 border border-gray-300 w-[60%]">
                        {/* Carousal */}
                        <div>
                            <img
                                src={images[viewImage]}
                                alt=""
                                className="w-full h-50 object-contain"
                            />
                        </div>
                        <div>
                            <div className="flex gap-12">
                                {images.map((img: string, index: number) => (
                                    <img
                                        key={img}
                                        src={img}
                                        width={100}
                                        className={`p-4 border-b-2 cursor-pointer
                                                    ${viewImage === index ? "border-red-500" : "border-transparent"}`}
                                        onClick={() => setViewImage(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Detail */}
                    <div className="flex flex-col gap-6 justify-center text-left p-10 border border-gray-300 w-[40%]">
                        <h2 className="text-2xl font-bold">{product?.title}</h2>
                        <div>
                            <table>
                                <tbody>
                                    <tr className="flex gap-15">
                                        <td className="p-1">SKU</td>
                                        <td>{product?.sku ?? "N/A"}</td>
                                    </tr>
                                    <tr className="flex gap-10">
                                        <td>Vendor</td>
                                        <td>{product?.brand ?? "BellHopt"}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-xl font-semibold">Price: ${product?.price}</h2>

                        <div className="flex gap-3 mt-3">
                            {/* Stock Icon */}
                            {product.availabilityStatus === "In Stock" && (
                                <img className="w-5 h-5" src="/High Stock.svg" alt="In Stock" />
                            )}
                            {product.availabilityStatus === "Low Stock" && (
                                <img className="w-5 h-5" src="/Low Stock.svg" alt="Low Stock" />
                            )}
                            {product.availabilityStatus === "Out of Stock" && (
                                <img
                                    className="w-5 h-5"
                                    src="/Out Of Stock.svg"
                                    alt="Out of Stock"
                                />
                            )}

                            {/* Stock Status Text */}
                            <span className="mt-1 text-sm ">
                                {product.availabilityStatus}
                            </span>
                        </div>

                        {/* Add to Cart Button */}
                        <div className="my-5">
                            {cartItem ? (
                            <div className="flex items-center gap-4 bg-red-100 rounded-full w-fit p-1">
                                <button
                                        className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors hover:cursor-pointer"
                                    onClick={() => decrease(product.id)}
                                >
                                    <MinusIcon />
                                </button>
                                <span className="font-semibold text-lg w-4 text-center">
                                    {cartItem?.quantity ?? 0}
                                </span>
                                <button
                                        className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors hover:cursor-pointer"
                                    onClick={() => increase(product.id)}
                                >
                                    <PlusIcon />
                                </button>
                            </div>
                            ) : (
                                <Button onClick={() => addItem({ ...product, quantity: 1, total: product.price, discountedTotal: product.price })}>Add to Cart</Button>
                            )}
                        </div>

                        {/* Satisfaction Guaranteed */}
                        <div className="flex items-center p-10 gap-5 border-t border-gray-300">
                            <img width={28} src="/Certified.svg" alt="" />
                            <p className="text-blue-300! font-semibold font-crimson! text-xl">
                                100% satisfaction guaranteed
                            </p>
                        </div>
                    </div>
                </div>


                {/*  Product Detail */}

                <div className="mt-5 ">
                    <div className="space-y-2 border border-gray-300 p-8" >
                        <h2>Product Detail for {product.title}</h2>
                        <p>{product.description}</p>
                        <div>
                            <h3>Return:</h3>
                            <p>{product.returnPolicy}</p>
                        </div>
                        <div>
                            <h3>Reviews:</h3>
                            <div>{product.reviews.map((rev, index) => (
                                <div key={index}>
                                    <h4 className="text-black! font-medium">{rev.reviewerName}</h4>
                                    <p className="font-light ">Rating: {rev.rating}</p>
                                    <p className="font-light t">Email: {rev.reviewerEmail}</p>
                                    <p className="font-light ">Comment: {rev.comment}</p>
                                    <p className="font-light ">Date: {(rev.date).split('T')[0]}</p>
                                </div>))}
                            </div>
                        </div>
                        <div>
                            <h3>Product Dimensions:</h3>
                            <p>{
                                Object.entries(product.dimensions).map(([key, value]) => (
                                    <li key={key} className="list-none">
                                        <strong className="font-light text-black!">{key}</strong>: {value}
                                    </li>
                                ))}</p>
                        </div>
                    </div>


                </div>


                <div className="flex flex-col py-20">
                    <div className="flex justify-between">
                        <h2>Related Items</h2>
                        <div className="flex gap-10">
                            <div className="flex gap-3">
                                <button
                                    className="bg-gray-200 text-black w-10 h-10 rounded-full flex cursor-pointer items-center justify-center"
                                    onClick={scrollLeft}
                                >
                                    <ArrowLeftIcon />
                                </button>

                                <button
                                    className="bg-gray-200 text-black w-10 h-10 rounded-full cursor-pointer flex items-center justify-center"
                                    onClick={scrollRight}
                                >
                                    <ArrowRightIcon />
                                </button>
                            </div>

                            <button
                                className="text-red-5 cursor-pointer text-lg hover:underline"
                                onClick={() =>
                                    navigate({
                                        pathname: "/",
                                        search: `?category=${product.category}&page=1`,
                                    })
                                }
                            >
                                See all
                            </button>
                        </div>
                    </div>
                    <div
                        className="flex gap-15 overflow-x-auto related-items-scrollbar"
                        ref={scrollRef}
                    >
                        {relatedProducts
                            .filter((item) => item.id !== product.id)
                            .map((product, index) => (
                                <ProductCard product={product} key={index} />
                            ))}
                    </div>
                </div>
            </main>
        </>
    );
}
