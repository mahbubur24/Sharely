import CardList from "@/components/ui/healthcard";
import HealthTopBar from "@/components/ui/HealthTopBar";
import { dummyData3 } from "@/static/navmenuItems";
import React from "react";

function HealthSection() {
 

  return (
    <div className="px-10 pb-10">
      <HealthTopBar category={"Health"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dummyData3.map((card) => (
          <CardList key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default HealthSection;
