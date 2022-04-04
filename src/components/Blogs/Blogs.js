import React from "react";

const Blogs = () => {
  return (
    <div className="md:grid grid-cols-2 gap-10 px-6">
      <div className="shadow-xl mt-16 p-4 rounded">
        <h1 className="text-4xl mb-2 text-center ">Context api</h1>
        <p>
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using React.
        </p>
      </div>
      <div className="shadow-xl mt-16 p-4 rounded">
        <h1 className="text-4xl mb-2 text-center ">simantic tag</h1>
        <p>
          A semantic element clearly describes its meaning to both the browser
          and the developer HTML was originally created as a markup language to
          describe documents on the early internet. As the internet grew and was
          adopted by more people, its needs changed.
        </p>
      </div>
      <div className="shadow-xl mt-16 p-4 rounded">
        <h1 className="text-4xl mb-2 text-center ">Inline block</h1>
        Alright, let's move on to inline-block. It’s essentially the same thing
        as inline, except that you can set height and width values.
        <h1 className="text-4xl mb-2 text-center ">Inline</h1>
        <p>
          Displays an element as an inline element. Any height and width
          properties will have no effect.
        </p>
        <h1 className="text-4xl mb-2 text-center ">Block</h1>
        <p>
          Display an element as block element it start on a new line and takes
          up the whole width
        </p>
      </div>
    </div>
  );
};

export default Blogs;
