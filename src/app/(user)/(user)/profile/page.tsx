import UserProfile from "@/components/profile/profile-card";

function page() {
  return (
    <div>
      <UserProfile
        name="Amanda Smith"
        email="amanda@example.com"
        phone="+1 (555) 123-4567"
        bio="Creative designer with a passion for crafting intuitive and beautiful user experiences."
        image="https://randomuser.me/api/portraits/women/68.jpg"
      />
    </div>
  );
}

export default page;
