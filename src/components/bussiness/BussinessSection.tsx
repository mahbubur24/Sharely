import BusinessCard from "./BusinessCard"
import BussinessTopBar from "./Bussiness"

function BussinessSection() {
  return (
    <div className="px-10 pb-10">
        <BussinessTopBar category={"Business"}/>
        <BusinessCard/>
    </div>
  )
}

export default BussinessSection