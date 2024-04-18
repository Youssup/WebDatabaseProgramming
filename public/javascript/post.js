class Post {
    constructor(post) {
      this.post = post
    }
  }
  function createPost(event) {
    event.preventDefault()
    const post = document.getElementById('post').value
    const newPost = new Post(post)
    console.log(newPost)
  }
  document.getElementById('postForm').addEventListener('submit', createPost)