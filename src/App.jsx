import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import CourseRegister from "./pages/CourseRegister";
import Course from "./pages/Course";
import CourseDetail from "./pages/CourseDetail";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Team from "./pages/Team";
import Payment from "./pages/Payment";
import Error404 from "./pages/Error404";
import Coin from "./pages/Coin";
import Profile from "./pages/Profile";
import ProfileInformation from "./pages/Profile/Information";
import ProfileCourse from "./pages/Profile/Course";
import ProfileCoin from "./pages/Profile/Coin";
import ProfilePayment from "./pages/Profile/Payment";
import ProfileProject from "./pages/Profile/Project";
import style from "./assets/style/style.scss";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { COURSE_DETAIL_PATH, COURSE_REGISTER_PATH, HOME_PATH } from "./constants/path";

function App() {
    return (
        <div className="App">
            {/* <MainLayout>
                <Register />
            </MainLayout> */}
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path={HOME_PATH} element={<Home />} />
                    <Route path={COURSE_REGISTER_PATH} element={<CourseRegister />} />
                    <Route path="/khoa-hoc" element={<Course />} />
                    <Route path={COURSE_DETAIL_PATH} element={<CourseDetail />} />
                    <Route path="/lien-he" element={<Contact />} />
                    <Route path="/doi-ngu" element={<Team />} />
                    <Route path="/thanh-toan" element={<Payment />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/coin" element={<Coin />} />
                    <Route path="/ca-nhan" element={<Profile path="/ca-nhan" />}>
                        <Route index element={<ProfileInformation />} />
                        <Route path="khoa-hoc" element={<ProfileCourse />} />
                        <Route path="du-an" element={<ProfileProject />} />
                        <Route path="thanh-toan" element={<ProfilePayment />} />
                        <Route path="coin" element={<ProfileCoin />} />
                    </Route>
                </Route>
                <Route path="*" element={<Error404 />}></Route>
            </Routes>
        </div>
    );
}

export default App;

// // axios.get("http://cfd-reactjs.herokuapp.com/elearning/v4/courses")
// //     .then(res => {
// //         console.log(res);
// //     })

// axios.get("http://cfd-reactjs.herokuapp.com/elearning/v4/courses")
//     .then(res => {
//         console.log(res);
//     })
