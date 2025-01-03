import React from 'react';
import Image from "next/image";
import Phone from "@/Assets/phone.svg";
import Mail from "@/Assets/mail.svg";
import Location from "@/Assets/location.svg";
import Logo from "@/Assets/heading.png";
import locationIcon from "@/Assets/locationIcon.svg";

const Footer: React.FC = () => {

  const cards = [
    {
      id: 1,
      image: Phone,
      heading: "Phone Number",
      description:
        "+974 3118 1843",
    },
    {
      id: 2,
      image: Mail,
      heading: "Email Address",
      description: "Elbrithcqhr@gmail.com",
    },
    {
      id: 3,
      image: Location,
      heading: "Office Location",
      description: "Ambassador Street, Zone 61",
    },
  ];
  return (
    <footer className="bg-[#1E3A45] text-white py-10" id="footerSection">
      <div className="container mx-auto px-6">
        <div className="flex gap-4 justify-center flex-wrap lg:flex-nowrap lg:justify-evenly mb-7">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex w-full md:w-1/2 lg:w-1/3 justify-start items-center gap-8 bg-[#215D72] px-6 py-4 rounded-lg shadow-md hover:shadow-lg"
            >
              <Image
                src={card.image.src}
                width={60}
                height={60}
                alt={card.heading}
                className="object-cover w-12 h-12"
              />
              <div>
                <h3 className="text-lg font-semibold">{card.heading}</h3>
                <p className="text-sm text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4 flex flex-row items-center justify-center w-full">
          <div className="flex justify-center items-center">
            <Image
              src={Logo}
              width={60}
              height={60}
              alt="Logo"
              className="bg-white p-6 w-32 rounded-md"
            />
          </div>
          <p className="text-white text-sm mt-4 text-center">
            Your health, physical and emotional well-being is important to us.
            We are always by your side and have made it even easier for you to
            find the necessary vitamins.
          </p>
        </div>
        <div className="flex justify-center items-center text-center text-white text-sm border-t border-gray-700 pt-4">
          <Image src={locationIcon} width={10} height={10} alt="LocationIcon" className="mr-2" />
          {new Date().getFullYear()} Elbrit Life Sciences Private Limited. C20,
          BKC, G Block, Mumbai 400051
        </div>
      </div>
    </footer>
  );
};

export default Footer;
