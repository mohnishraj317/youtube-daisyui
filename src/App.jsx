import { useState } from "react";
import Header from "./components/Header.jsx/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import TagsSection from "./components/TagsSection/TagsSection";
import VideoesSection from "./components/VideosSection/VideosSection";

function App() {
  const [sidebarActive, setSidebarActive] = useState(false);

  const tags = [
    { id: 1, text: "All", active: true },
    { id: 2, text: "ipsum" },
    { id: 3, text: "dolor" },
    { id: 4, text: "sit" },
    { id: 5, text: "amet" },
    { id: 6, text: "consectetur" },
    { id: 7, text: "adipisicing" },
    { id: 8, text: "elit" },
    { id: 9, text: "Asperiores" },
    { id: 10, text: "sint" },
    { id: 11, text: "sequi" },
    { id: 12, text: "blanditiis" },
    { id: 13, text: "doloremque" },
    { id: 14, text: "Magni" },
  ];

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header sidebarToggler={setSidebarActive} />
      <Sidebar active={sidebarActive}>
        <TagsSection tags={tags} />
        <VideoesSection />
      </Sidebar>
    </div>
  );
}

export default App;
