
import  LandscapeTheme  from "../images/LandscapeTheme.png";

export default function Main() {
  return (
    <main>
        <div className="h-[600px] w-full">
            <img src={LandscapeTheme} className="h-[600px] w-full"/>
            <div className="absol-center  w-3/4  text-center text-white">
                <p className="text-5xl font-normal">We have dream to connect wholesalers to independent Customers</p>
                <button className="shopper-bgcolor mt-7 w-32 h-12 rounded-md font-semibold">Explore</button>
            </div>
            
        </div>
    </main>
  )
}
