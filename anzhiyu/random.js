var posts=["2025/07/26/hello-world/","2025/07/26/Linux/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };