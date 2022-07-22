import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="home">
      {/* <Navbar /> */}
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        Home Container
      </div>
    </div>
  );
}
