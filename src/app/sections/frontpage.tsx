import Image from "next/image";
import Heroimage from "@/Assets/heroimage.png";
import VitaminIcon from "@/Assets/vitamin.png";
import WeightIcon from "@/Assets/weight.png";
import FunctionalFoodIcon from "@/Assets/functionalfood.png";
import React from "react";
import Vitamin from "../../Assets/vita.png"

const Frontpage = () => {
  const firstThree = [
    {
      "id": 1,
      "name": "Vitamins",
      "icon": VitaminIcon,
      "description": "Vitamins are essential nutrients that are needed for growth and development."
    },
    {
      "id": 2,
      "name": "Weight Loss",
      "icon": WeightIcon,
      "description": "Find scientifically proven solutions",
    },
    {
      "id": 3,
      "name": "Functional Foods",
      "icon": FunctionalFoodIcon,
      "description": "Functional foods are designed to provide health benefits beyond basic nutrition."
    }
  ]
  return (
    <section className="min-h-screen w-full bg-[#E2F5FB] flex flex-col px-8 py-12 pt-32">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-[#17414F] mb-6">
          Essential Vitamins
        </h1> */}
        <Image src={Vitamin} alt="Essential Vitamins" height={150} />
      </div>

      <div className="flex justify-center items-center">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row lg:items-start gap-12 my-auto">
          <div className="mt-20 text-center lg:text-left lg:w-1/3 flex flex-col justify-start mb-8">
            <p className="text-[#727272] font-semibold">Online Medical Supplies</p>
            <h2 className="text-2xl lg:text-4xl font-bold text-[#17414F] my-4">
              Get Your Vitamins & Minerals
            </h2>
            <button className="p-2 bg-[#17414F] text-white rounded-3xl hover:bg-[#14565F]">
              EXPLORE
            </button>
          </div>
          <div className="relative w-full lg:w-1/3 flex flex-col items-center justify-center mb-8 lg:mb-0 order-1 lg:order-none">
            <div className="relative w-64 h-64 bg-[#FADFB8] rounded-tl-[25%] rounded-br-[25%] flex justify-center items-center">
              <Image
                src={Heroimage}
                alt="Probiotics bottle"
                className="object-contain w-full h-auto max-w-xs animate-float"
              />
            </div>
          </div>
          <div className="flex flex-col lg:w-1/3 justify-start gap-8">
            {firstThree.map((vitamin) => (
              <div key={vitamin.id} className="flex items-center gap-3">
                <Image src={vitamin.icon} alt="Vitamins" width={64} height={64} />
                <div>
                  <h4 className="text-xl font-bold text-[#17414F] mt-4">{vitamin.name}</h4>
                  <p className="text-sm text-[#17414F]">
                    {vitamin.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frontpage;
