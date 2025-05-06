import PostCard from "@/components/all-posts/AllPostCard";

function page() {
  const dummyPosts = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      title: "The Benefits of Blood Donation",
      content:
        "Blood donation is essential for saving lives and maintaining a healthy blood supply. Here's how you can make a difference.",
      author: "John Doe",
      date: "May 5, 2025",
      comments: 12,
      views: 456,
      likes: 34,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      title: "How to Prepare for a Blood Donation",
      content:
        "Preparing for a blood donation is important to ensure that the process goes smoothly. Here are some tips to get ready.",
      author: "Jane Smith",
      date: "May 3, 2025",
      comments: 8,
      views: 312,
      likes: 21,
    },
    {
      id: 13,
      image: "https://via.placeholder.com/150",
      title: "What Happens After You Donate Blood?",
      content:
        "After you donate blood, your body starts working to replenish the blood volume. Let's explore the process.",
      author: "Mark Lee",
      date: "April 30, 2025",
      comments: 5,
      views: 245,
      likes: 15,
    },
    {
      id: 144,
      image: "https://via.placeholder.com/150",
      title: "The Different Types of Blood Donations",
      content:
        "There are several types of blood donations, including whole blood and platelet donations. Here's what you need to know.",
      author: "Sarah Connor",
      date: "April 28, 2025",
      comments: 18,
      views: 567,
      likes: 42,
    },
    {
      id: 188,
      image: "https://via.placeholder.com/150",
      title: "Blood Donation Myths Debunked",
      content:
        "Many myths surround blood donation. Let’s clear up some common misconceptions and make sure you have accurate information.",
      author: "Alex Johnson",
      date: "April 25, 2025",
      comments: 22,
      views: 198,
      likes: 50,
    },
    {
      id: 100,
      image: "https://via.placeholder.com/150",
      title: "How Blood Donations Save Lives",
      content:
        "Every drop counts when it comes to saving lives. Learn how blood donations are used in emergency situations and treatments.",
      author: "Emily Davis",
      date: "April 22, 2025",
      comments: 7,
      views: 367,
      likes: 28,
    },
    {
      id: 122,
      image: "https://via.placeholder.com/150",
      title: "The Science Behind Blood Donations",
      content:
        "Ever wondered what happens to your blood once it's donated? Here's a scientific breakdown of the entire process.",
      author: "Chris Green",
      date: "April 19, 2025",
      comments: 14,
      views: 423,
      likes: 36,
    },
    {
      id: 1999,
      image: "https://via.placeholder.com/150",
      title: "How Often Can You Donate Blood?",
      content:
        "Wondering how often you can donate blood? We cover the recommended intervals between donations to ensure safe practice.",
      author: "Megan Harris",
      date: "April 15, 2025",
      comments: 3,
      views: 281,
      likes: 18,
    },
    {
      id: 1111111,
      image: "https://via.placeholder.com/150",
      title: "The History of Blood Donation",
      content:
        "Blood donation has a long history, from its earliest uses to modern practices. Let’s take a look at how it evolved.",
      author: "David Walker",
      date: "April 10, 2025",
      comments: 9,
      views: 212,
      likes: 27,
    },
    {
      id: 10000,
      image: "https://via.placeholder.com/150",
      title: "How to Organize a Blood Drive",
      content:
        "Interested in organizing a blood drive? Here's a step-by-step guide to hosting an event and encouraging donations.",
      author: "Sophia Brown",
      date: "April 8, 2025",
      comments: 11,
      views: 309,
      likes: 33,
    },
  ];

  return (
    <div className="space-y-4 px-10  my-10">
      <h1 className="text-4xl">All Posts :</h1>
      <div className=" my-10">
        {dummyPosts.map((post, index) => (
          <PostCard
            key={index}
            id={post.id}
            image={post.image}
            title={post.title}
            content={post.content}
            author={post.author}
            date={post.date}
            comments={post.comments}
            views={post.views}
            likes={post.likes}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
