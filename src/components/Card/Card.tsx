import Image from "next/image";
import Button from "../Button";

const Card = ({ title, price, img }: { title: string, price: string, img: string }) => {
  return (
    <div className="bg-[rgb(242,_244,_246)] text-black p-3  rounded-xl relative">
      <div className="relative w-full h-64 mb-4 overflow-hidden rounded-xl">
        <Image className="w-full h-full rounded-xl" src={img} alt="card" width={300} height={300} />
      </div>
      <div className="space-y-2 p-4">
        <h1 className="text-xl font-medium">{title}</h1>
        <p className="text-sm ">{price}</p>
        <Button>Shop Now</Button>
      </div>
    </div>
  );
};

export default Card;