
import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";
import { LazyPage1,LazyPage2, LazyPage3 } from "../lazyLoad/pages/";

import logo from '../logo.svg';


export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo}></img>


                    <ul>
                        <li>
                            <NavLink to="/lazy1"

                                className={({ isActive, isPending }) =>
                                    isPending ? "" : isActive ? "nav-active" : ""
                                }


                            >lazy1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy2"
                                className={({ isActive, isPending }) =>
                                    isPending ? "" : isActive ? "nav-active" : ""
                                }

                            >lazy2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy3"

                                className={({ isActive, isPending }) =>
                                    isPending ? "" : isActive ? "nav-active" : ""
                                }

                            >lazy3</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="lazy1" element={<LazyPage1/>}></Route>
                    <Route path="lazy2" element={<LazyPage2/>}></Route>
                    <Route path="lazy3" element={<LazyPage3/>}></Route>
                    <Route path="/*" element={<Navigate to="/lazy1" replace />}></Route>
                </Routes>

            </div>
        </BrowserRouter>
    )
}
