import React from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import { addToWishlist, removeFromWishlist } from "../redux/Slices/wishlistSlice"

const ProductCard = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  // ###########cart function###################
  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  };

  // ###########wishlist function###################
  
  // Add items to Wishlist
  const handleAddToWishlist = () => {
    dispatch(addToWishlist(post))
    toast.success("Item added to Wishlist");
  };

  // Remove items form wishlist
  const handleRemoveFromWishlist = () => {
    dispatch(removeFromWishlist(post.id))
    toast.error("Item removed from Wishlist");
  };

  return (
    <div className=" flex flex-col items-center justify-between hover:scale-105 transition duration-300 ease-in shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] gap-3 p-4 mt-10 ml-5 rounded-xl hover:shadow-[0px_-50px_100px_80px_rgba(0,0,0,0.08)] h-[450px] sm:h-[500px]">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title}
        </p>
      </div>
      <div>
        <p className="w-44 text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px] w-40">
        <img src={post.image} alt="img" className="h-full w-full" />
      </div>

      <div className="flex justify-between gap-20 items-center w-full mt-5">
        <div>
          <p className="text-green-600  font-semibold text-[15px]">
            ${post.price}
          </p>
        </div>


        {cart.some((p) => p.id === post.id) ? (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 
          uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in tracking-wide"
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1
            uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in tracking-wide"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}

      </div>
      <div className="flex flex-col md:flex-row justify-between  gap-4">
        <button onClick={handleAddToWishlist} className="text-gray-700 border-2 border-green-700 rounded-full font-semibold text-[12px] p-1
            uppercase hover:bg-green-700 hover:text-white transition duration-300 ease-in tracking-wide">Add to wishlist</button>
        <button onClick={handleRemoveFromWishlist} className="text-gray-700 border-2 border-black-900 rounded-full font-semibold text-[12px] p-1
            uppercase hover:bg-black hover:text-white transition duration-300 ease-in tracking-wide">Remove from wishlist</button>
      </div>
    </div>
  );
};

export default ProductCard;