import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import user from "./data/user";

function App() {
  return (
    <div>
      <NavBar />
      <Home username={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
      <ProjectList projects={user.projects} />
    </div>
  );
}

export default App;
