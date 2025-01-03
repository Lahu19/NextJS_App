import React from "react";
import Image from "next/image";
import f1 from "@/Assets/feature1.svg";
import f2 from "@/Assets/feature2.svg";
import f3 from "@/Assets/feature3.svg";
import f4 from "@/Assets/feature4.svg";
import f5 from "@/Assets/feature5.svg";
import f6 from "@/Assets/feature6.svg";
const Features = () => {
  const features = [
    {
      icon: f1,
      title: "Clinically Studied",
      description1: "All products that we offer have",
      description2: "undergone lab and safety tests",
    },
    {
      icon: f2,
      title: "Vegetarian Friendly",
      description1: "We have a wide selection of vegetarian",
      description2: "products to meet your needs",
    },
    {
      icon: f3,
      title: "Made in India",
      description1: "Shop local and explore health products",
      description2: "products to meet your needs",
    },
    {
      icon: f4,
      title: "Free Shipping",
      description1: "We deliver to your door with no",
      description2: "shipping costs on your orders",
    },
    {
      icon: f5,
      title: "No Risk",
      description1: "We ensure that all products are safe",
      description2: "and within their use-by date",
    },
    {
      icon: f6,
      title: "GMO Free",
      description1: "Natural, no modified products and",
      description2: "derivatives for those who need it",
    },
  ];

  return (
    <section className="relative z-0" id="featuresSection">
      <div className="container mx-auto -translate-y-42 md:-translate-y-28">
        <div className="bg-[#17414F] rounded-[60px] p-10 pb-0 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 rounded-lg -translate-y-24"
              >
                <div className="flex items-center justify-center w-20 h-20 p-7 bg-white rounded-full mb-4 text-2xl border-b-4 border-[#17414F]/90 shadow-lg">
                  <Image
                    src={feature.icon.src}
                    height={40}
                    width={40}
                    alt={feature.title}
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-white text-center">
                  {feature.description1}
                </p>
                <p className="text-sm text-white text-center">
                  {feature.description2}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
