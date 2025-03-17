var posts=["2025/03/17/这是一篇HTML/","2025/03/17/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };