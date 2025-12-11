const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res) => {
  const blogs = fs.readFileSync('data/blog.json');
  res.json(JSON.parse(blogs));
});

router.get("/:id", (req, res) => {
  const blogs = fs.readFileSync('data/blog.json');
  const blogList = JSON.parse(blogs);
  const blog = blogList.find((b) => {
    return b.id === parseInt(req.params.id);
  });
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ error: "Blog not found" });
  }
});

router.delete("/:id", (req, res) => {
  const blogs = fs.readFileSync('data/blog.json');
  const updatedBlogs = JSON.parse(blogs).filter((b) => {
    return b.id !== parseInt(req.params.id);
  });
  fs.writeFileSync('data/blog.json', JSON.stringify(updatedBlogs , null , 2));
  res.status(200).json({ message: "Blog deleted successfully" });
});

router.post("/", (req, res) => {
  const blogs = JSON.parse(fs.readFileSync('data/blog.json'));
  const newBlog = {
    id: blogs[blogs.length - 1].id + 1,
    title: req.body.title,
    content: req.body.content,
    img: req.body.img
  }
  const updatedBlogs = [...blogs, newBlog];
  fs.writeFileSync("data/blog.json",JSON.stringify(updatedBlogs,null,2));
  res.status(201).json({message:"Blog Created successfully"});
});

module.exports = router;