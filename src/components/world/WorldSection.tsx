import { dummyData3 } from "@/static/navmenuItems";
import Card from "../ui/healthcard";
import WorldContent from "./WorldContent";
import WorldTopBar from "./WorldTopBar";

function WorldSection() {
  return (
    <div className="px-10">
      <WorldTopBar category={"World"} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {dummyData3.slice(0, 3).map((card) => {
          return <Card key={card.id} card={card} cardTitle="World" />;
        })}
      </div>
      <WorldContent />
    </div>
  );
}

export default WorldSection;
