import React, { useState, useEffect } from "react";
import "./CreatePost.css";
import { Button } from "../../components/Button/Button";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import postService from "./../../services/post";

export default function CreateForum(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [forumID, setID] = useState("");
  const history = useHistory();

  useEffect(() => {
    setID(props.location.state.forum_id);
  }, []);

  function validateForm() {
    return title.length > 0 && content.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    try {
      const post = {
        title: title,
        description: content,
      };
      postService.create(post, forumID).then((newPost) => {
        history.push(`/postdetailpage/${newPost._id}`);
      });
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className="forumpage">
      <div className="leftsection_createpost"></div>

      <div className="rightsection_createpost">
        <div className="NewPost">
          <h1>Add a Post</h1>
          <form onSubmit={handleSubmit}>
            <FormGroup controlId="text" bsSize="large">
              <FormLabel>Title</FormLabel>
              <FormControl
                autoFocus
                type="text"
                placeholder="Enter post title"
                value={title}
                style={{ minWidth: "400px" }}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormGroup>
            <FormGroup controlId="text" bsSize="large">
              <FormLabel>Content</FormLabel>
              <FormControl
                as="textarea"
                rows={8}
                autoFocus
                type="text"
                placeholder="Enter post content"
                value={content}
                style={{ minWidth: "400px" }}
                onChange={(e) => setContent(e.target.value)}
              />
            </FormGroup>
            <Button disabled={!validateForm()} type="submit">
              Add Post
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
