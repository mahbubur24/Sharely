import { dummyData, dummyData2 } from "@/static/navmenuItems";
import OverLaySection from "../shared/OverLaySection";
import SectionTitle from "../shared/SectionTitle";
import NewsletterSubscribe from "./SubscribeCard";
import TopStoriesArticle from "./TopStoriesArticle";

export default function TopStories() {
  return (
    <div className="px-10 pb-10 w-full">
      <div className="flex w-full mb-10 items-center">
        <SectionTitle category={"Top Stories"} />
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 items-stretch">
        <div className="col-span-2">
          {dummyData.map((card) => (
            <OverLaySection
              badgeText={card.category}
              date={card.date}
              id={card.id}
              imageUrl={card.imageUrl}
              title={card.title}
              height="h-[500px]"
              key={card.id}
            />
          ))}
        </div>
        <NewsletterSubscribe />
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 w-full  gap-5">
        {dummyData2.map((card) => {
          return <TopStoriesArticle key={card.id} card={card} />;
        })}
      </div>
    </div>
  );
}
