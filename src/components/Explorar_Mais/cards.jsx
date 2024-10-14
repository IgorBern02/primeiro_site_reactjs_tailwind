import Card from "./cards/card";
import { FaIdBadge } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaSistrix } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";

function cards() {
  const cardData = [
    {
      figure: (
        <FaIdBadge className="w-10 h-10 bg-purple-500 p-2 rounded-br-xl text-white" />
      ),
      title: "Campanha",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam voluptates mollitia perspiciatis.",
    },
    {
      figure: (
        <HiOutlineSpeakerphone className="w-10 h-10 bg-green-500 p-2 rounded-br-xl text-white" />
      ),
      title: "Marketing",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam voluptates mollitia perspiciatis.",
    },
    {
      figure: (
        <FaSistrix className="w-10 h-10 bg-yellow-500 p-2 rounded-br-xl text-white" />
      ),
      title: "Seo/Sem",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam voluptates mollitia perspiciatis.",
    },
    {
      figure: (
        <FaClipboardList className="w-10 h-10 bg-red-500 p-2 rounded-br-xl text-white" />
      ),
      title: "Outros",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam voluptates mollitia perspiciatis.",
    },
  ];

  return (
    <section className="w-full h-full mt-10 flex items-center justify-around">
      {cardData.map((card, index) => (
        <div>
          <Card figure={card.figure} title={card.title} desc={card.desc} />
        </div>
      ))}
    </section>
  );
}

export default cards;
