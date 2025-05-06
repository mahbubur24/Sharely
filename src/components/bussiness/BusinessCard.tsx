import { dummyData2 } from "@/static/navmenuItems";
import OverLaySection from "../shared/OverLaySection";

function BusinessCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {dummyData2.map((card) => {
        return (
          <OverLaySection
            id={card.id}
            key={card.id}
            imageUrl={card.imageUrl}
            title={card.title}
            date={card.date}
            badgeText={card.category}
            height="h-[350px]"
          />
        );
      })}
    </div>
  );
}

export default BusinessCard;
