import SectionTitle from "../shared/SectionTitle"
import ViewAll from "../shared/ViewAll"

function Topbar() {
  return (
    <div className="md:grid lg:grid grid-cols-2 w-full gap-5 items-center">
        <div className="flex items-center">
            <SectionTitle category="Science"/>
            <ViewAll/>
        </div>
        <div className="flex items-center">
            <SectionTitle category="Politics"/>
            <ViewAll/>
        </div>
    </div>
  )
}

export default Topbar