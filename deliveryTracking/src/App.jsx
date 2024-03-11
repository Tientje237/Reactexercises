import './App.css';
import Package from './components/PackageList';
import Sidebar from './components/Sidebar';

function App() {


    return (
        <>
            <Sidebar/>
            <h1>Delivery Tracking</h1>
            <Package/>
        </>
    )
} 

export default App