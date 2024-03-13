import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome, FaUser } from "react-icons/fa";
import { MdMessage, MdLogout, MdEdit } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import { SiCashapp } from "react-icons/si";
import mainlogo from "../../../assets/logo.png";
import Swal from "sweetalert2";

const handleLogout = () => {
  // Display a combined confirmation dialog using SweetAlert
  Swal.fire({
    title: "Confirm Logout",
    text: "Do you really want to log out?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      // User confirmed, proceed with logout
      localStorage.removeItem("auth");
      navigate("/login"); // Assuming your login page is at "/login"
    }
  });
};

const routes = [
  {
    path: "/admin/profile",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/admin/manageUsers",
    name: "Users",
    icon: <FaUser />,
  },
  {
    path: "/admin/managePayment",
    name: "Payment",
    icon: <SiCashapp />,
  },
  {
    path: "/admin/manageMessage",
    name: "Message",
    icon: <MdMessage />,
  },
  {
    path: "/admin/editProfile",
    name: "Edit Profile",
    icon: <MdEdit />,
  },
  {
    path: "/admin/editPassword",
    name: "Change Password",
    icon: <RiLockPasswordFill />,
  },
  {
    name: "Log out",
    icon: <MdLogout />,
    handleLogout: true,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    // Display a combined confirmation dialog using SweetAlert
    Swal.fire({
      title: "Confirm Logout",
      text: "Do you really want to log out?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        // User confirmed, proceed with logout
        localStorage.removeItem("auth");
        navigate("/admin/login");
      }
    });
  };

  return (
    <>
      <div className="main-container">
        <div className={`sidebar fixed-left`}>
          <img
            className="admin-logo "
            alt="Parking"
            src={mainlogo}
            style={{
              width: 80,
              padding: 10,
              marginLeft: 0,
              borderRadius: "16px",
            }}
          />
          <span style={{ fontWeight: "bold", fontSize: "36px" }}>Parking</span>
          <hr
            className="my-1  border-3 opacity-3"
            style={{ paddingBottom: 10 }}
          />

          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    route={route}
                    isOpen={isOpen}
                    key={index}
                    setIsOpen={setIsOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeclassname="active"
                  onClick={
                    route.handleLogout
                      ? handleLogout
                      : () => navigate(route.path)
                  }
                  style={{ cursor: "pointer" }}
                >
                  <div className="icon">{route.icon}</div>
                  <div className="link_text">{route.name}</div>
                </NavLink>
              );
            })}
          </section>
        </div>

        <main className="sidebar-content">{<Outlet />}</main>
      </div>
    </>
  );
};

export default SideBar;
