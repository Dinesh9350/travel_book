import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  image: string;
  title: string;
  subtitle: string;
}

const services = [
  {
    image: "/service_1.png",
    title: "Guided Tours",
    subtitle: "Building responsive and modern websites",
  },
  {
    image: "/service_2.png",
    title: "Best Flights Options",
    subtitle: "iOS and Android native & cross-platform apps",
  },
  {
    image: "/service_3.png",
    title: "Religious Tours",
    subtitle: "Creating intuitive and beautiful designs",
  },
  {
    image: "/service_4.png",
    title: "Medical insurance",
    subtitle: "Secure and decentralized apps for businesses",
  },
];

const partners = [
  {
    image: "/partner_1.png",
    title: "Guided Tours",
  },
  {
    image: "/partner_2.png",
    title: "Best Flights Options",
  },
  {
    image: "/partner_3.png",
    title: "Religious Tours",
  },
  {
    image: "/partner_4.png",
    title: "Medical insurance",
  },
];

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, subtitle }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg hover:shadow-xl transition p-6 w-64">
      {/* Icon */}
      <Image
        src={image}
        alt={title}
        width={48}
        height={48}
      />

      {/* Content */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="min-h-screen pb-16 bg-gray-50">
      {/* Partners */}
      <div className="bg-[#F7F7F0] py-10 mb-16">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-8">
          {partners.map((partner, index) => (
            <Image
              key={index}
              src={partner.image}
              alt={partner.title}
              width={120}
              height={50}
              className="object-contain"
            />
          ))}
        </div>
      </div>


      <div className="text-center mb-12">
        <h2 className="text-sm font-bold text-[#DF6951]">CATEGORY</h2>
        <p className="text-[#181E4B] font-bold mt-2 text-3xl">
          We Offer Best Services
        </p>
      </div>


      <div className="flex flex-wrap gap-8 justify-center">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            image={service.image}
            title={service.title}
            subtitle={service.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
