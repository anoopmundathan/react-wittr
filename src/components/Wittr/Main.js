import React from 'react';

export const Main = () => {
  return(
    <main className="main">
      <article className="post">
        <img src="/imgs/dr-evil.gif" alt="" className="post-main-img" />
        <div className="post-content">
          <img src="/imgs/dr-evil.gif" alt="" className="post-avatar" width="40" height="40" />
          <div className="post-text-content">
            <div className="post-title">
              <h1 className="post-heading">Jake Archibald</h1>
              <time datetime="2015-08-24T10:34:17.777Z" className="post-time">43s</time>
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
