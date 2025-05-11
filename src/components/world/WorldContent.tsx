import { foregroundContent } from "@/static/constants";
import Image from "next/image";
import Button from "../shared/ButtonProps";

function WorldContent() {
  return (
    <div className="relative w-full h-[500px] bg-white my-10">
      <div className="absolute top-0 right-0 h-full w-full md:w-[80%] bg-red-500" />

      <div
        className="relative z-10 p-6 text-black flex flex-col md:flex-row items-center md:gap-25
      h-full justify-center
      "
      >
        {/* Left - Image */}
        <div className="relative w-full md:w-1/2 h-[400px]">
          <Image
            src={`https://sharely-backend.onrender.com/uploads/`}
            alt="Tagline Image"
            fill
            className="object-cover rounded-md"
          />
        </div>

        {/* Right - Content */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white">
            {foregroundContent.tagline}
          </h2>
          <p className="text-white text-lg">{foregroundContent.description}</p>
          <Button
            type="submit"
            className="bg-white text-gray-500 hover:bg-black px-20"
            width="w-auto"
          >
            {foregroundContent.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default WorldContent;
