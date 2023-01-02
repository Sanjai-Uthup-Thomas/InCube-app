import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import adminContext from "../../context/adminContext";





function Sidebar() {
  const [open, setOpen] = useState(true)
  const { setAdminData } = useContext(adminContext)
  const history = useNavigate()
  const logout = () => {
    setAdminData({
      token: undefined,
      user: undefined
    })
    localStorage.setItem('admin-token', "")
    history('/admin')

  }
  const Menus = [
    { title: "Application List", src: "https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/User.png", path: "/admin/applications", number: 0 },
    { title: "Approved List", src: "https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/User.png", path: "/admin/approved", number: 1 },
    { title: "Declined List ", src: "https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/User.png", gap: true, path: "/admin/declined", number: 3 },
    { title: "Book Slots", src: "https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/User.png", path: "/admin/booking", number: 2 },
    { title: "Application Status", src: "https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/User.png", gap: true, path: "/admin/allocated", number: 4 },
  ];

  return (
    <div className={`${open ? "w-72" : "w-20"} h-screen p-5 pt-8  relative `}>
        <div className={`fixed left-0 top-0 ${open ? "w-[15rem]" : "w-20"} h-screen p-5 pt-8 bg-blue-900 `}>
      < img src="https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/control.png" alt="control"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-blue-900
    border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)} /> 
      <div className="flex gap-x-4 items-center">
        <img src="https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/logo.png" alt="logo"
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
            }`} />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
            }`}>InCube</h1>

      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (


          <NavLink to={Menu.path} key={index} className="link">
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-blue-500 text-white text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === { index } && "bg-blue-500"
                } `}
            >
              <img src={`${Menu.src}`} alt="menu" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          </NavLink>
        ))}
        <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-blue-500 text-white text-sm items-center gap-x-4 
                "bg-blue-500"
               `} onClick={logout}>
          <img src="https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/User.png" alt="menu" />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Logout
          </span>

        </li>
      </ul>
    </div>
    </div>
  );
}
export default Sidebar;