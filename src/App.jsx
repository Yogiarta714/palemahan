import { lazy } from "react";
import { Routes, Route } from "react-router";
import Layout from "./components/layout/Layout.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Explore = lazy(() => import("./pages/Explore.jsx"));
const ArticleDetail = lazy(() => import("./pages/ArticleDetail.jsx"));
const PetaBali = lazy(() => import("./pages/PetaBali.jsx"));
const QuizList = lazy(() => import("./pages/QuizList.jsx"));
const QuizSession = lazy(() => import("./pages/QuizSession.jsx"));
const Action = lazy(() => import("./pages/Action.jsx"));
const Story = lazy(() => import("./pages/Story.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/tentang" element={<About />} />
                <Route path="/jelajahi" element={<Explore />} />
                <Route path="/jelajahi/:slug" element={<ArticleDetail />} />
                <Route path="/peta-bali" element={<PetaBali />} />
                <Route path="/kuis" element={<QuizList />} />
                <Route path="/kuis/:kategori" element={<QuizSession />} />
                <Route path="/aksi" element={<Action />} />
                <Route path="/cerita/jejak-botol" element={<Story />} />
                <Route path="/kontak" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}
