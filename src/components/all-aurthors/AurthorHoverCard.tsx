"use client";

import Image from "next/image";

type AuthorCardProps = {
  name: string;
  role: string;
  imageUrl?: string;
  onSignOut?: () => void;
};

const AuthorCard = ({ name, role, imageUrl, onSignOut }: AuthorCardProps) => {
  return (
    <div className="w-80 rounded-xl shadow-lg bg-white">
      <div className="p-4 border-b">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 relative rounded-full overflow-hidden">
            {imageUrl && (
              <Image  src={`http://localhost:8000/uploads/${imageUrl}`} alt={name} fill className="object-cover" />
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <button className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm">
            View Profile
          </button>
          <button className="text-blue-500 hover:underline text-sm">
            Add Account
          </button>
        </div>
      </div>

      <div className="p-4 space-y-3 text-sm text-gray-700">
        <div className="hover:underline cursor-pointer text-red-500">
          Upgrade to <strong>PRO</strong>
        </div>
        <div className="hover:underline cursor-pointer">Invite team member</div>
        <div className="hover:underline cursor-pointer">Feedback</div>
        <div className="hover:underline cursor-pointer">Help</div>
        <div
          className="hover:underline cursor-pointer text-gray-600"
          onClick={onSignOut}
        >
          Sign Out
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
