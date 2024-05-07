import React from 'react';
import { submenu_list } from "../util";
import { useDispatch, useSelector } from "react-redux";
import {hoverOnSubMenu,leaveSubMenu} from "../slices/SubMenuReducer";

const SubMenu = ({rect}) => {
    const dispatch = useDispatch();
    const hover_sub_menu = useSelector((state) => state.subMenuHover.hoverSubMenu);
    const hovered_sub_menu = submenu_list.find((v,i) => v.name == hover_sub_menu);
    console.log("hovered_sub_menu : ",hovered_sub_menu);

    console.log("rect : ", rect);

const submenuStyle = () => {
    if(rect){
        let top = (rect.top + 35 ).toFixed()+'px';
        let left = (rect.left).toFixed() + 'px';
        return{
            top : top,
            left : left
        }
    }
    return {}; // Return an empty object if rect is falsy
};

function leaveSubmenu() {
    console.log("submenu popup leave : ");
    dispatch(leaveSubMenu())
}

function hoverSubmenu() {
    let sub_menu_state = {
        // hoverSubMenu : param,
        hoverType : "hover"
    }
    dispatch(hoverOnSubMenu(sub_menu_state));
}

  return (
    <div className='fixed z-30 bg-white px-7 pt-10 pb-10 shadow-[0_2px_7px_0px_rgba(181,181,181,.5)] rounded-md min-w-[550px]' style={submenuStyle()} onMouseEnter={hoverSubmenu} onMouseLeave={leaveSubmenu} >
        <div key={`submenu_${hovered_sub_menu.name}`}>
            <div className='flex justify-between'>
                <div className='font-bold text-xl'>{hovered_sub_menu.name}</div>
                <div className='text-[#878786] text-xs font-medium'>{hovered_sub_menu.total} items</div>
            </div>
            <div className='shopper-color'>Create & live your unique style</div>
            <div className='shopper-border border-4  mt-5  mb-5'></div>
                <ol className='grid grid-cols-3 gap-y-2 text-[#878786] submenu_list'>   
                    {
                        hovered_sub_menu.list.map((v) => {
                            return(
                                <li key={`submenu_category_${v}`} className='cursor-pointer'>
                                    <a>{v}</a>
                                </li>
                            )
                        })
                    }
                </ol>
        </div>
    </div>
  )
}

export default SubMenu