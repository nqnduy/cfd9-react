import React, { useState, useEffect } from "react";
import { courseService } from "../../services/course";
import Banner from "./components/Banner";
import OfflineCourse from "./components/OfflineCourse";
import OnlineCourse from "./components/OnlineCourse";
import Special from "./components/Special";
import Testimonial from "./components/Testimonial";
import Gallery from "./components/Gallery";
import CTA from "./components/CTA";
import useQuery from "../../hooks/useQuery";
import { homeService } from "../../services/home";
export default function Home() {
    const { data: courses } = useQuery(() => courseService.getList(), []);

    const { data: gallary } = useQuery(() => homeService.gallery(), []);
    const { data: review } = useQuery(() => homeService.review(), []);
    return (
        <main className="homepage" id="main">
            <Banner />
            <OfflineCourse courses={courses} />
            <OnlineCourse />
            <Special />
            <Testimonial />
            <Gallery />
            <CTA />
        </main>
    );
}
