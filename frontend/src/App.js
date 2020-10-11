import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import StudentHomePage from "./container/StudentHomePage/StudentHomePage";
import LandingPage from "./container/LandingPage/LandingPage";
import SignupPage from "./container/Login/SignupPage";
import LoginPage from "./container/Login/LoginPage";
import StudentProfilePage from "./container/StudentProfilePage/StudentProfilePage";
import CreatePost from "./container/CreatePost/CreatePost";
import ForumPage from "./container/ForumPage/ForumPage";
import SubforumPage from "./container/SubforumPage/SubforumPage";
import ReviewQuizPage from "./container/ReviewQuizPage/ReviewQuizPage";
import TakeQuizPage from "./container/TakeQuizPage/TakeQuizPage";
import TeacherHomePage from "./container/TeacherHomePage/TeacherHomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/homepage" exact component={StudentHomePage} />
        <Route path="/profilepage" exact component={StudentProfilePage} />
        <Route path="/createpost" exact component={CreatePost} />
        <Route path="/forumpage" exact component={ForumPage} />
        <Route path="/subforumpage" exact component={SubforumPage} />
        <Route path="/reviewquizpage" exact component={ReviewQuizPage} />
        <Route path="/takequizpage" exact component={TakeQuizPage} />
        <Route path="/teacherhomepage" exact component={TeacherHomePage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
