import { Drawer, DrawerHeader, DrawerItems, Dropdown, DropdownItem } from 'flowbite-react'
import React, { useState } from 'react'
import { Search } from 'semantic-ui-react'
import ChatMessage from './ChatMessage';

const Chat = () => {
    const [chatActive, setChatActive] = useState(false);
    const [emailActive, setEmailActive] = useState(false);
    const [smsActive, setSmsActive] = useState(false);
    const [visible, setVisible] = useState(false);

    const active = "bg-blue-600 text-white";
    return (
        <div className='p-2'>
            <div className="flex justify-between mt-3">
                <Search placeholder='Type to Filter' />
                <Dropdown label='Send Communications' color='blue' >
                    <DropdownItem onClick={()=>setVisible(true)}><i className="bi bi-chat mr-2"></i> Chat</DropdownItem>
                    <DropdownItem><i className="bi bi-envelope mr-2"></i>Email</DropdownItem>
                    <DropdownItem><i className="bi bi-phone mr-2"></i>SMS</DropdownItem>
                </Dropdown>
                <Drawer open={visible} position='right' className='w-[700px]' onClose={()=>setVisible(false)}>
                    <DrawerHeader/>
                    <DrawerItems>
                        <ChatMessage/>
                    </DrawerItems>
                </Drawer>
            </div>
            <div className="mt-3 box-shadow border h-[600px] rounded p-4">
                <div className='mb-5'>
                    <div className='flex mb-5'>
                        <div onClick={() => setEmailActive(curr => !curr)} className={`px-3 py-2 cursor-pointer border ${emailActive && active}`}><i className="bi bi-envelope mr-2"></i>Email</div>
                        <div onClick={() => setSmsActive(curr => !curr)} className={`px-3 py-2 cursor-pointer border ${smsActive && active}`}><i className="bi bi-phone mr-2"></i>SMS</div>
                        <div onClick={() => setChatActive(curr => !curr)} className={`px-3 py-2 cursor-pointer border ${chatActive && active}`}><i className="bi bi-chat mr-2"></i>Chat</div>
                    </div>
                    <div className='font-bold mb-5'>Message Timeline</div>
                    <div className='text-sm'>Now displaying 1 of your latest message</div>
                </div>
                <div className='flex p-2 gap-1'>
                    <div className='h-8 flex justify-center items-center w-8 text-blue-600 bg-blue-50 border border-blue-600 text-xs rounded-full'><i className="bi bi-chat"></i></div>
                    <div className='box-shadow rounded p-4 w-full'>
                        <div className="flex justify-between">
                            <div className='flex gap-3 items-center'>
                                <div className='p-2 text-white bg-cyan-400 rounded-full'>AA</div>
                                <div>
                                    <div><span className='font-bold'>Arunkumar A</span> chat to <span className='font-bold'>Katy Pery</span></div>
                                    <div className='text-sm text-gray-500'>Mon Oct 28, 2024 @ 8:13 AM</div>
                                </div>
                            </div>
                            <div className='text-sm'><i className="bi bi-briefcase mr-2"></i><span className='cursor-pointer font-bold text-blue-600'>00002Perry</span></div>
                        </div>
                        <div className='p-2'>Hi</div>
                        <div className='mt-2 flex gap-3 text-sm'>
                            <div className='cursor-pointer'><i className="bi bi-reply mr-1"></i>Reply</div>
                            <div className='cursor-pointer'><i className="bi text-xs bi-arrows-angle-expand mr-1"></i>Expand</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Chat