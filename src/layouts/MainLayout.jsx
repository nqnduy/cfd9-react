import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            <Navigation />
            <Outlet />
            <Footer />
        </>
    );
}
