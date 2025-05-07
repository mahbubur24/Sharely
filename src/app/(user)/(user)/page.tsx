import BussinessSection from "@/components/bussiness/BussinessSection";
import FeaturedArticle from "@/components/FeaturedArticle/FeaturedArticle";
import HealthSection from "@/components/Health/HealthSection";
import ScienceAndPolitics from "@/components/ScienceAndPolitics/ScienceAndPolitics";
import TopStories from "@/components/TopSories/TopStories";
import WorldSection from "@/components/world/WorldSection";

export default function Home() {
  const postsLeft = [
    {
      id: "post-left-1",
      imageUrl:
        "https://websitedemos.net/news-blog-04/wp-content/uploads/sites/1516/2025/02/post1.jpg",
      badgeText: "Health",
      title:
        "Exploring the Connection Between Gut Health and Mental Well-being",
      date: "February 24, 2025",
    },
  ];
  
  const posts = [
    {
      id: "post-1",
      imageUrl:
        "https://websitedemos.net/news-blog-04/wp-content/uploads/sites/1516/2025/02/post1.jpg",
      badgeText: "Health",
      title:
        "Exploring the Connection Between Gut Health and Mental Well-being",
      date: "February 24, 2025",
    },
    {
      id: "post-2",
      imageUrl:
        "https://websitedemos.net/news-blog-04/wp-content/uploads/sites/1516/2025/02/post1.jpg",
      badgeText: "Science",
      title: "The Latest Breakthroughs in Renewable Energy Technology",
      date: "March 10, 2025",
    },
  ];
  
  const scienceAndPoliticsPosts = [
    {
      id: "sap-1",
      imageUrl:
        "https://websitedemos.net/news-blog-04/wp-content/uploads/sites/1516/2025/02/post1.jpg",
      badgeText: "Politics",
      title:
        "Exploring the Connection Between Gut Health and Mental Well-being",
      date: "February 24, 2025",
      extra: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis orci consectetur, blandit justo ut, tempor turpis. Vestibulum facilisis condimentum hendrerit. Maecenas ac turpis egestas ...`,
    },
    {
      id: "sap-2",
      imageUrl:
        "https://websitedemos.net/news-blog-04/wp-content/uploads/sites/1516/2025/02/post1.jpg",
      badgeText: "Science",
      title: "The Latest Breakthroughs in Renewable Energy Technology",
      date: "March 10, 2025",
      extra: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis orci consectetur, blandit justo ut, tempor turpis. Vestibulum facilisis condimentum hendrerit. Maecenas ac turpis egestas ...`,
    },
  ];
  
  return (
    <main className="">
      <FeaturedArticle postsLeft={postsLeft} posts={posts} />
      <HealthSection />
      <TopStories />
      <BussinessSection/>
      <WorldSection />
      <ScienceAndPolitics posts={scienceAndPoliticsPosts} />
    </main>
  );
}
