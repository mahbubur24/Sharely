import { dummyData3 } from "@/static/navmenuItems";
import Card from "../ui/healthcard";
import WorldTopBar from "./WorldTopBar";
import WorldContent from "./WorldContent";

function WorldSection() {
  return (
    <div className="px-10">
      <WorldTopBar category={"World"} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {dummyData3.slice(0, 3).map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
      <WorldContent/>
    </div>
  );
}

export default WorldSection;
