import React, {useState} from 'react'
import Menu from "./menuApi";
import MenuCard from './MenuCard';
import EmployeeCard from './EmployeeCard';
import Navbar from './Navbar';

const uniqueList = ["All",...new Set( Menu.map((curElem)=>{
    return curElem.category;
}))]

const Restaurant = () => {

    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);
    
    const filterItem = (category) => {

        if(category === "All"){
            setMenuData(Menu)
            return;
        }
        const updatedList = Menu.filter((curElmen)=>{
           return curElmen.category === category;
        })
        setMenuData(updatedList);
    }

   
   
    return (
        <>
        <Navbar filterItem={filterItem} menuList={menuList} />
        <MenuCard menuData={menuData}/>    
     
        </>
    )
}

export default Restaurant
