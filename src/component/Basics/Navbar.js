import React from 'react'

const Navbar = ({filterItem, menuList}) => {
    return (
        <>
        <div className="text-center mt-4">
               <div className="btn-group " role="group" aria-label="Basic example">
                   {
                       menuList.map((curElem)=>{
                           return (
                            <button type="button" className="btn btn-outline-primary" onClick={() =>filterItem(curElem)}>{curElem}</button>
                           )

                       })
                   }


  
</div>
</div>
        </>
    )
}

export default Navbar
