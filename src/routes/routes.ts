import { lazy, LazyExoticComponent } from "react";

import { NoLazy } from "../lazyLoad/pages/NoLazy";
/* import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyLoad/pages"; */

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> |JSXComponent;
    name: string;
}


const LazyLayout = lazy(() => import(/* webpackChunkNameL: "LazyLayout" */"../lazyLoad/layout/LazyLayout"))



export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'LazyLayout-Dash'
    },
    {
        path: '/no-lazy',
        to: 'no-lazy',
        Component: NoLazy,
        name: 'No lazy'
    },

];