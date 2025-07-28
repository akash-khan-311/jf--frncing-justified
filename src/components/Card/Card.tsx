import Image from "next/image";

const Card = ({ title, price }: { title: string, price: string }) => {
  return (
    <div className="bg-[rgb(242,_244,_246)] text-black p-3  rounded-xl relative">
      <div className="relative w-full h-64 mb-4 overflow-hidden rounded-xl">
        <Image className="w-full h-full rounded-xl" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/24701-nature-natural-beauty.jpg/1280px-24701-nature-natural-beauty.jpg" alt="card" width={300} height={300} />
      </div>
      <div className="space-y-2 p-4">
        <h1 className="text-xl font-medium">{title}</h1>
        <p className="text-sm ">${price}</p>
        <button className="my-4 px-8 py-2 rounded-full bg-[rgb(176,_221,_29)] hover:bg-[rgb(156,_201,_19)] transition-colors cursor-pointer">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Card;