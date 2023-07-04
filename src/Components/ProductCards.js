import React from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import { addToWishlist, removeFromWishlist } from "../redux/Slices/wishlistSlice";

const ProductCard = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(post));
    toast.success("Item added to wishlist");
  };

  const handleRemoveFromWishlist = () => {
    dispatch(removeFromWishlist(post.id));
    toast.error("Item removed from wishlist");
  };

  return (
    <div className="flex sm:flex-col  md:flex-row md:flex-wrap items-center justify-between hover:scale-110 transition duration-300 ease-in shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] gap-3 p-4 mt-10 ml-5 rounded-xl group hover:shadow-[0px_-50px_100px_80px_rgba(0,0,0,0.08)] sm:w-56">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 sm:w-auto mt-1">
          {post.title}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left sm:w-auto">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px] w-40 sm:w-auto">
        <img src={post.image} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold text-[15px]">
            ${post.price}
          </p>
        </div>

        <button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 uppercase group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in tracking-wide"
          onClick={handleAddToWishlist}
        >
          Add to wishlist
        </button>
        <button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 uppercase group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in tracking-wide"
          onClick={handleRemoveFromWishlist}
        >
          Remove from wishlist
        </button>

        {cart.some((p) => p.id === post.id) ? (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 uppercase group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in tracking-wide"
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 uppercase group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in tracking-wide"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
