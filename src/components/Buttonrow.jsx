
import { Drawer, DrawerHeader, DrawerItems } from 'flowbite-react';
import React from 'react'
import { useState } from 'react'
import Note from './Note';
import NoteForm from './NoteForm';

const Buttonrow = () => {
  const [visible, setVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const handleClick = ()=> setShowForm(false);
  return (
    <div className='flex gap-2 mt-[30px] overflow-y-auto'>
      <button className='py-2 px-4 text-sm text-nowrap bg-blue-600 hover:bg-blue-500 transition-all rounded text-white'>Case Options <span>|</span> <i className="bi bi-chevron-down"></i></button>
      <button className='py-2 px-4 text-sm text-nowrap bg-white rounded border hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500 transition-all'><i className="bi bi-person mr-2"></i>Users</button>
      <button onClick={() => setVisible(true)} className='py-2 px-4 text-sm text-nowrap bg-white rounded border hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500 transition-all'><i className="bi bi-clipboard mr-2"></i>Notes</button>
      <button className='py-2 px-4 text-sm text-nowrap bg-white rounded border hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500 transition-all'><i className="bi bi-clipboard mr-2"></i>Activities</button>
      <button className='py-2 px-4 text-sm text-nowrap bg-white rounded border hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500 transition-all'><i className="bi bi-clock mr-2"></i>Time Entries</button>
      <button className='py-2 px-4 text-sm text-nowrap bg-white rounded border hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500 transition-all'><i className="bi bi-file-earmark-spreadsheet mr-2"></i>Statement of Account</button>
      <button className='py-2 px-4 text-sm text-nowrap bg-white rounded border hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500 transition-all'><i className="bi bi-shuffle mr-2"></i>Workflow</button>
      <Drawer open={visible} onClose={() => setVisible(false)} position='right' className='w-[450px]' >
        <DrawerHeader title='Notes' titleIcon={() => <></>} />
        <DrawerItems>
          <div className='mt-5'>
            {
              showForm === true ?
                (
                  <NoteForm handleClick={handleClick} />
                )
                :
                (
                  <button onClick={() => setShowForm(true)} className='bg-blue-600 text-white p-2 rounded text-sm transition-all hover:bg-blue-500'>+ Add Note</button>
                )
            }

          </div>
          <div className='mt-5'>
            <Note />
          </div>
        </DrawerItems>
      </Drawer>
    </div>
  )
}

export default Buttonrow
