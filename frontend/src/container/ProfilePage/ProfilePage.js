import React, { Component } from "react";
import Post from "../../components/Post/Post";
import "./ProfilePage.css";
import ProfilePic from "../../assets/profile_placeholder.png";
import Button from "@material-ui/core/Button";
import QuizButton from "../../components/ForumButtons/QuizButton";
import { Redirect } from "react-router-dom";

import usersService from "../../services/users";

class StudentProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      posts: [],
      grades: [],
    };
  }

  componentDidMount() {
    usersService.getUser().then((userData) => {
      console.log(userData);
      this.setState({
        ...this.state,
        ...{
          username: userData.username,
          posts: userData._posts,
          grades: userData._attempts,
        },
      });
    });
  }

  state = {
    navigate: false,
  };

  logout = () => {
    usersService.logout();
    localStorage.clear("token");
    this.setState({ navigate: true });
  };

  render() {
    const { username, posts, grades } = this.state;
    const { navigate } = this.state;
    if (navigate) {
      return <Redirect to="/" push={true} />;
    }

    const ColoredLine = ({ color }) => (
      <hr
        style={{
          color: color,
          backgroundColor: color,
          height: 1,
          width: "100%",
        }}
      />
    );

    return (
      <div className="container">
        <img className="profilepic" src={ProfilePic} alt="Logo" />
        <h1>{username}</h1>

        <Button variant="contained" onClick={this.logout}>
          Logout
        </Button>
        <ColoredLine color="grey" />

        <div className="row_container">
          <div className="profile_post">
            <p1 className="profile_post_header">
              <b>My Posts</b>
            </p1>
            {posts &&
              posts.map((post, index) => (
                <Post
                  id={post._id}
                  username={post._poster.username}
                  content={post.description}
                  numLikes={post.votes}
                  tags={post._forum} //{post.tags}
                  title={post.title}
                  userVote={post.userVote}
                  isPoster={true} //{post._poster._id == localStorage.getItem("userID")}
                  numComments={post._comments.length}
                />
              ))}
          </div>
          <div className="profile_grades">
            <p1 className="profile_post_header">
              <b>Grades</b>
            </p1>
            {grades &&
              grades.map((grade) => (
                <QuizButton
                  quizTitle={grade._quiz.title}
                  id={grade._quiz._id}
                  scoredMarks={grade.marks}
                  totalMarks={grade.total}
                  quizAttempt={grade._id}
                  isAdmin={false} //grades only for students
                  completed={true}
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default StudentProfilePage;
