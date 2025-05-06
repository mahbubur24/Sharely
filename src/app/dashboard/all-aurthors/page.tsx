import AuthorCard from "@/components/all-aurthors/all-posts-card";

function page() {
  const authors = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "+1 234 567 8901",
      bio: "Tech writer and AI enthusiast.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      badge: "Top Author",
      categories: ["AI", "Web Dev", "JavaScript", "React"],
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      phone: "+1 222 333 4444",
      bio: "Backend engineer who loves clean APIs.",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      badge: "Contributor",
      categories: ["Node.js", "Express", "MongoDB"],
    },
    {
      id: 3,
      name: "Carla Mendes",
      email: "carla@example.com",
      phone: "+1 987 654 3210",
      bio: "UI/UX designer passionate about accessibility.",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      badge: "Design Expert",
      categories: ["Figma", "Accessibility", "Design Systems"],
    },
    {
      id: 4,
      name: "David Lee",
      email: "david@example.com",
      phone: "+1 345 678 9012",
      bio: "Fullstack developer and blogger.",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      badge: "Mentor",
      categories: ["Vue.js", "Laravel", "DevOps"],
    },
    {
      id: 5,
      name: "Elena Gomez",
      email: "elena@example.com",
      phone: "+1 555 666 7777",
      bio: "Writes about startups and growth hacking.",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      badge: "Guest Author",
      categories: ["Marketing", "SEO", "Startups"],
    },
    {
      id: 6,
      name: "Frank Chen",
      email: "frank@example.com",
      phone: "+1 444 222 8888",
      bio: "Cloud architect and Kubernetes geek.",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      badge: "Cloud Specialist",
      categories: ["AWS", "Docker", "Kubernetes", "Terraform"],
    },
    {
      id: 7,
      name: "Grace Park",
      email: "grace@example.com",
      phone: "+1 777 123 4567",
      bio: "Security researcher and ethical hacker.",
      image: "https://randomuser.me/api/portraits/women/7.jpg",
      badge: "Security Analyst",
      categories: ["Cybersecurity", "Ethical Hacking", "Networking"],
    },
    {
      id: 8,
      name: "Henry Wallace",
      email: "henry@example.com",
      phone: "+1 321 555 6789",
      bio: "Writes on clean code and software architecture.",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
      badge: "Editor",
      categories: ["OOP", "Clean Code", "TDD"],
    },
    {
      id: 9,
      name: "Isla Thompson",
      email: "isla@example.com",
      phone: "+1 888 999 0000",
      bio: "Mobile dev with a love for animations.",
      image: "https://randomuser.me/api/portraits/women/9.jpg",
      badge: "App Creator",
      categories: ["Flutter", "React Native", "Animations"],
    },
    {
      id: 10,
      name: "Jack Martin",
      email: "jack@example.com",
      phone: "+1 666 777 8888",
      bio: "Writes tutorials for beginners in tech.",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      badge: "Educator",
      categories: ["HTML", "CSS", "Beginner", "Learning"],
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Authors</h1>
      </div>
      <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {authors.map((author) => (
          <AuthorCard key={author.id} author={author} />
        ))}
      </div>
    </div>
  );
}

export default page;
