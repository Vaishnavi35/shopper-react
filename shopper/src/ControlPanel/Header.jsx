import { heart } from "../images/heart_icon.png";

export function Header() {
    return(
        <>
            <nav className="flex bg-white h-20 justify-between" style={{padding: '15px 70px'}}>
                <div >
                    <div className="font-bold" style={{fontSize: '34px'}}>SH<span className="shopper-color" style={{fontSize: '50px'}}>o</span>PPER</div>
                    <div className="text-center font-semibold text-xs mt-2">Smart Marketplace</div>
                </div>
                <div className="h-10">
                    <input type="text" placeholder="Search for Products" className="h-full search_border"/>
                    <button className="text-white shopper-bgcolor h-full">Search</button>
                </div>
                <div className="flex gap-x-2.5">
                    <div className="">
                        <button>Log in</button>
                        <button>Sign up</button>
                    </div>
                    <div>
                        <img src="heart"/>
                        <img />
                    </div>
                </div>
                
            </nav>
        </>
        
    )
}

