import React from 'react'
import Card from './Card'

function Dashboard() {
    let data = [{
    title:"10th overall percentage",
        value:"99.8%",
        color:"danger",
        icon:"fa-solid fa-percent",
        isProgress:false
    },
    {
        title:" 12th overall percentage",
        value:"100%",
        color:"success",
        icon:"fa-solid fa-percent",
        isProgress:false
    },
    {
        title:"School Rating",
        value:"95",
        color:"info",
        icon:"fa-regular fa-star fa-spin",  
        isProgress:true
    },
    {
        title:"Awared",
        value:"2993",
        color:"warning",
        icon:"fa-solid fa-award",
        isProgress:false
    }
]
  return <>
         <div id="content-wrapper" className="d-flex flex-column">
<div id="content">
    <div className="container-fluid">

        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>

        <div className="row">
            {
                data.map((e,i)=>{
                    return <Card key={i}
                    input={e}
                    value={10}
                    />
                })
            }
        </div>

     
    </div>

</div>
</div>
  </>
}

export default Dashboard