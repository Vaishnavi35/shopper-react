import heart  from "../images/heart_icon.png";
import cart  from "../images/Cart icon.png";
import {motion } from "framer-motion";
import LoginModal from "../Modal/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { showLoginModal, showRegisterModal } from "../slices/LoginReducer";
import { useState } from "react";
import SubMenu from "../Modal/SubMenu";
import {hoverOnSubMenu} from "../slices/SubMenuReducer";

const nav_list = ['Home Decor', 'Furniture', 'Lighting', 'Home Accents', 'Rugs', 'Outdoors', 'Holidays', 'Gifts', 'Events'];

export default function Header() {
    const login = useSelector((state) => state.login.showLoginModal);
    const signup = useSelector((state) => state.login.showRegisterModal);
    const forgot_password = useSelector((state) => state.login.showForgotPassword);
    const reset_password = useSelector((state) => state.login.showResetPassword);
    const hover_sub_menu = useSelector((state) => state.subMenuHover.hoverSubMenu);
    const sub_menu_hover_state = useSelector((state) => state.subMenuHover.hoverType);

    const dispatch = useDispatch();
    const [subMenu, setSubMenu] = useState("Home Decor"); // testing
    const [rect, setRect] = useState("") ;

    // const subMenuStyle = () => {
    //     return{
    //         color : 
    //     }
    // }

    const hoverSubmenu = (param,event) =>  {
        setSubMenu(param);
        let sub_menu_state = {
            hoverSubMenu : param,
            // hoverType : "hover"
        }
        dispatch(hoverOnSubMenu(sub_menu_state));
        console.log("submenu hoverSubmenu : ",param);
        let rect_val = event.target.getBoundingClientRect();
        setRect(rect_val);
        console.log("ref's positon : ", rect_val.top, "left : ", rect_val.left);
    }

    function leaveSubmenu() {
        setSubMenu((val) => val = "");
        console.log("submenu leaveSubmenu : ");
    }

    return(
        <>
            <nav className="flex items-center flex-col gap-y-4 fixed top-0 w-full z-[9] bg-white">
                <div className="flex items-center justify-between w-full pt-6"  style={{paddingInline: '25px'}}>
                    <div>
                        <div className="font-bold text-[34px]">SH<span className="shopper-color text-[50px]">o</span>PPER</div>
                        <div className="text-center font-semibold text-xs mt-2">Smart Marketplace</div>
                    </div>
                    <div className="h-10 text-xs">
                        <input type="text" placeholder="Search for Products" className="h-full search_border w-72 px-5"/>
                        <motion.button whileTap={{scale: 0.95}} className="text-white shopper-bgcolor h-full w-20 font-semibold rounded-r-md">Search</motion.button>
                    </div>
                    <div className="flex gap-x-2.5 h-full items-center">
                        <div className="">
                            <motion.button whileTap={{scale: 0.85}} className="login_btn w-24 h-10 font-semibold rounded-md text-xs mr-5"  onClick={() => dispatch(showLoginModal())}>Log in</motion.button>
                            <motion.button whileTap={{scale: 0.85}} className="login_btn w-24 h-10 font-semibold rounded-md text-xs mr-5"  onClick={() => dispatch(showRegisterModal())}>Sign up</motion.button>
                        </div>
                        <div className="flex gap-x-6 items-center h-full">
                            <img src={heart} className="w-6 h-6" alt="wishList"/>
                            <img src={cart} className="w-6 h-6" alt="cart"/>
                        </div>
                    </div>
                </div>
                <div className="flex gap-6  w-full bg-[#f3f3f3] h-10 items-center text-[#737270]"  style={{paddingInline: '25px'}}>
                <ol className="tab_menu h-10 flex items-center gap-x-5" >
                    {
                        nav_list.map((v,i) => {
                            return(
                                    <li className={`cursor-pointer h-10 flex items-center ${(hover_sub_menu == v) ? 'shopper-color' : null}`}  key={i}  onMouseEnter={(e) => hoverSubmenu(v,e)} onMouseLeave={leaveSubmenu}>
                                        {v}
                                    </li>
                            )
                        })
                    }
                    </ol>
                </div>
            </nav>
            {
               (login || signup || forgot_password || reset_password) && <LoginModal />
            }
            {
                hover_sub_menu && (sub_menu_hover_state === "hover" || subMenu)  && <SubMenu rect={rect} />
            }
        </>
    )
}

