
import { ReactElement, ReactNode } from "react";
import { Routes, Route } from 'react-router-dom';
import * as View from '../view/view'

const RouteConfig = (): ReactElement<ReactNode> => {
    return (
        <Routes>
            <Route path="/" element={<View.LandingIndex />}>
            </Route>
        </Routes>
    )
};

export default RouteConfig;