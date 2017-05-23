import React from 'react';

export const Main = () => {
  return(
    <main class="main">
      <article class="post">
        <div class="post-content">
          <img src="/imgs/avatar.jpg" alt="" class="post-avatar" width="40" height="40" />
          <div class="post-text-content">
            <div class="post-title">
              <h1 class="post-heading">Jake Archibald</h1>
              <time datetime="2015-08-24T10:34:17.777Z" class="post-time">43s</time>
            </div>
            <p>
              A team somewhere spent a long time ensuring Southern Rail ticket machines are as fustrating as possible.
            </p>
          </div>
        </div>
      </article>
      <article class="post">
        <img src="/imgs/wolff.jpg" alt="" class="post-main-img" />
        <div class="post-content">
          <img src="/imgs/avatar.jpg" alt="" class="post-avatar" width="40" height="40" />
          <div class="post-text-content">
            <div class="post-title">
              <h1 class="post-heading">Jake Archibald</h1>
              <time datetime="2015-08-24T10:34:17.777Z" class="post-time">43s</time>
            </div>
            <p>
              A team somewhere spent a long time ensuring Southern Rail ticket machines are as fustrating as possible.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
