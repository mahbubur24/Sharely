import SectionTitle from "../shared/SectionTitle";
import ViewAll from "../shared/ViewAll";

function WorldTopBar({ category }: { category: string }) {
  return (
    <div className="flex w-full mb-10 items-center">
      {/* Left Title with vertical line */}
      <SectionTitle category={category} />
      {/* Right View All Link */}
      <ViewAll/>
    </div>
  );
}

export default WorldTopBar;
