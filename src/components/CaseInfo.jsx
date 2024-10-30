import React from 'react'
import { useState } from 'react'

const CaseInfo = () => {
    const [status, setStatus] = useState("Client");
    return (
        <>
            <div className='flex justify-between border-b'>
                <div className='font-bold text-lg'>Case Information</div>
                <div className='cursor-pointer text-blue-600 text-sm'>Edit</div>
            </div>
            <div className="mb-2 mt-3">
                <div className='text-slate-500 uppercase text-xs font-semibold '>Case Number</div>
                <div className='text-sm'>00002-Perry</div>
            </div>
            <div className="my-2">
                <div className='text-slate-500 uppercase text-xs font-semibold '>Case Type</div>
                <div className='text-sm'>Humanitarian and Compassionate</div>
            </div>
            <div className="my-2">
                <div className='text-slate-500 uppercase text-xs font-semibold '>Status <i className="bi bi-clock-history"></i></div>
                <div><span className='text-xs bg-blue-600 text-white rounded p-1'>Active</span></div>
            </div>
            <div className="my-2">
                <div className='text-slate-500 uppercase text-xs font-semibold '>Referral Source</div>
            </div>
            <div className="my-2">
                <div className='text-slate-500 uppercase text-xs font-semibold '>Opened</div>
                <div className="text-sm">Oct 11, 2024</div>
            </div>
            <div className="mt-2">
                <div className='text-slate-500 uppercase text-xs font-semibold '>Office Location</div>
                <div className="text-xl"><div className='text-xl'><i className="bi bi-dash-lg"></i></div></div>
            </div>
            <div className='w-[200px] mt-3'>
                <div className='flex rounded'>
                    <div className={`w-1/2 text-center p-2 rounded-s-full border-e-0 cursor-pointer border text-sm ${status === "Prospect" ? "bg-blue-600 text-white" : ""}`} onClick={()=>setStatus("Prospect")}>Prospect</div>
                    <div className={`w-1/2 text-center p-2 border border-s-0 text-sm cursor-pointer rounded-e-full ${status === "Client" ? "bg-blue-600 p-2 text-white" : ""}`} onClick={()=>setStatus("Client")}>Client</div>
                </div>
            </div>


        </>
    )
}

export default CaseInfo