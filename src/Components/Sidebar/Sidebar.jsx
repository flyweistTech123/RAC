import React from 'react'
import './Sidebar.css'
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { FaRegHandshake } from "react-icons/fa6";
import { SlHandbag } from "react-icons/sl";
import { MdAttachMoney } from "react-icons/md";




const Sidebar = () => {

    const sidebarItems = [
        { icon: <MdOutlineDashboardCustomize />, text: 'Dashboard' },
        { icon: <FiUsers />, text: 'Total Users' },
        { icon: <FaRegHandshake />, text: 'Total Partners' },
        { icon: <SlHandbag /> , text: 'Total Orders' },
        { icon: <MdAttachMoney />, text: 'Refers/Coupon' },
        { icon: <MdOutlineDashboardCustomize />, text: 'Total Bookings' },
        { icon: <MdOutlineDashboardCustomize />, text: 'Jobs Info' },
        { icon: <MdOutlineDashboardCustomize />, text: 'All Services' },
        { icon: <MdOutlineDashboardCustomize />, text: 'Notification' },
        { icon: <MdOutlineDashboardCustomize />, text: 'All Products' },
        { icon: <MdOutlineDashboardCustomize />, text: 'Banners' },
        { icon: <MdOutlineDashboardCustomize />, text: 'To-Do List' },
        { icon: <MdOutlineDashboardCustomize />, text: 'All Files' },
        { icon: <MdOutlineDashboardCustomize />, text: 'Permissions' },
        { icon: <MdOutlineDashboardCustomize />, text: 'Rac Repair Centers' },
    ];

    return (
        <>
            <div className='sidebar'>
                <div className='sidebar1'>
                    <div className='sidebar2'>
                        <h3>Admin</h3>
                    </div>

                    <div className='sidebar3'>
                        {sidebarItems.map((item, index) => (
                            <div className='sidebar4' key={index}>
                                <div className='sidebar5'>{item.icon}</div>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar