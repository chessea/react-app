
import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";

import logo from '../logo.svg';


export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo}></img>


                    <ul>
                        <li>
                            <NavLink to="/home"

                                className={({ isActive, isPending }) =>
                                    isPending ? "" : isActive ? "nav-active" : ""
                                }


                            >Shopping</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about"
                                className={({ isActive, isPending }) =>
                                    isPending ? "" : isActive ? "nav-active" : ""
                                }

                            >About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/user"

                                className={({ isActive, isPending }) =>
                                    isPending ? "" : isActive ? "nav-active" : ""
                                }

                            >Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="about" element={<h1>About Page</h1>}></Route>
                    <Route path="user" element={<h1>User page</h1>}></Route>
                    <Route path="home" element={<ShoppingPage/>}></Route>
                    <Route path="/*" element={<Navigate to="/home" replace />}></Route>
                </Routes>

            </div>
        </BrowserRouter>
    )
}
