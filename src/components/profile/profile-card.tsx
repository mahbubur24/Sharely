import React from "react";

interface UserProfileProps {
  name: string;
  email: string;
  phone: string;
  bio: string;
  image: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  email,
  phone,
  bio,
  image,
}) => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Cover Image */}
      <div className="bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-300 h-40 rounded-t-xl relative">
        {/* Avatar */}
        <div className="absolute -bottom-10 left-4">
          <img
            src={image}
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
          />
        </div>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-b-xl shadow-md pt-12 pb-6 px-6">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-sm text-gray-600">📍 Los Angeles, United States</p>
          <p className="text-sm text-gray-600">
            @amanda21 ·{" "}
            <span className="font-medium">Lead product designer at Google</span>{" "}
            · Full-time
          </p>
          <p className="text-sm text-gray-600 mt-1">📧 {email}</p>
          <p className="text-sm text-gray-600">📞 {phone}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mb-6">
          <button className="px-4 py-2 bg-gray-200 text-sm rounded-md hover:bg-gray-300">
            Message
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
            Share profile
          </button>
        </div>

        {/* Bio */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">About</h3>
          <p className="text-sm text-gray-700">{bio}</p>
        </div>

        {/* Skills Section */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Product Design",
              "UX Design",
              "Google Analytics",
              "SEO Content",
              "Customer Service",
              "UI Design",
              "Web Development",
              "Integrated Design",
              "Front End",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Employment History */}
        <div>
          <h3 className="font-semibold mb-4">Employment history</h3>

          {/* Instagram */}
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-800">
              Product Designer
            </p>
            <p className="text-sm text-gray-600">Instagram · Full-time</p>
            <p className="text-sm text-gray-500 mt-1">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without...
            </p>
          </div>

          {/* Facebook */}
          <div>
            <p className="text-sm font-medium text-gray-800">
              Lead UI Designer
            </p>
            <p className="text-sm text-gray-600">Facebook · Full-time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
