import React from 'react'
import Employee from './employeeApi'


const EmployeeCard = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    {

                Employee.map((curElmen)=>{
                    const {id,itemImage,designation,vertical,description} = curElmen;
                    return (
                        <div className="col-md-4 mb-3" >
                        <div className="card" >
      
        <div className="card-body">
        <img src={itemImage} className="card-img-top" alt="..." />
            <div><span className="badge rounded-pill bg-info text-dark">{id}</span></div>
          <h5 className="card-title">{designation}</h5>
          <h6 className="card-category">{vertical}</h6>
          <p className="card-text">{description}</p>
      
          <a href="#" className="btn btn-info">Go somewhere</a>
        </div>
      </div>
                    </div>

        

                    )

                })
            }
                
       
                </div>
        </div>
            </div>
    )
}

export default EmployeeCard
