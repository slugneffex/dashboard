
import './App.css';
import SideBar from "./components/SideBar/SideBar"
import DashBoard from "./components/DashBoard/DashBoard";

function App() {
  return (
    <div className='container'>
      <div className='flex flex-row'>
        <SideBar />
        <DashBoard />
      </div>
    </div>
  );
}

export default App;
