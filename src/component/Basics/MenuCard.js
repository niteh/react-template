import React from 'react'

const MenuCard = ({menuData}) => {
  
 return (
        <>
            <div className="container mt-3">
              <div className="row">
                  {
                      menuData.map((curElem)=>{
                        const {id,title,category,itemImage,description} = curElem;
                      return (
                     
                      <>
                        <div className="col-md-4 mb-3" key={id}>
                        <div className="card" >
        <img src={itemImage} className="card-img-top" alt="..." />
        <div className="card-body">
            <div><span className="badge rounded-pill bg-info text-dark">{id}</span></div>
          <h5 className="card-title">{title}</h5>
          <h6 className="card-category">{category}</h6>
          <p className="card-text">{description}</p>
      
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
                    </div>
                    </>
                    )
                    

                      })
                  }
           
              </div>
              </div> 
        </>
    )
}

export default MenuCard
