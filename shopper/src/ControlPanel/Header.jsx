import heart  from "../images/heart_icon.png";
import cart  from "../images/Cart icon.png";


export function Header() {
    return(
        <>
            <nav className="flex bg-white items-center justify-between" style={{padding: '25px 70px'}}>
                <div >
                    <div className="font-bold" style={{fontSize: '34px'}}>SH<span className="shopper-color" style={{fontSize: '50px'}}>o</span>PPER</div>
                    <div className="text-center font-semibold text-xs mt-2">Smart Marketplace</div>
                </div>
                <div className="h-10 text-xs">
                    <input type="text" placeholder="Search for Products" className="h-full search_border w-72 px-5"/>
                    <button className="text-white shopper-bgcolor h-full w-20 font-semibold rounded-r-md">Search</button>
                </div>
                <div className="flex gap-x-2.5 h-full items-center">
                    <div className="">
                        <button className="login_btn w-24 h-10 font-semibold rounded-md text-xs mr-5">Log in</button>
                        <button className="login_btn w-24 h-10 font-semibold rounded-md text-xs mr-5">Sign up</button>
                    </div>
                    <div className="flex gap-x-6 items-center h-full">
                        <img src={heart} className="w-6 h-6"/>
                        <img src={cart} className="w-6 h-6"/>
                    </div>
                </div>
                
            </nav>
        </>
        
    )
}

