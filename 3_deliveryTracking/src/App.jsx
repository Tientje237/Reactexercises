import './App.css';
import Package from './components/PackageList';
import Layout from './components/layout';
import Nav from './components/nav'

function App() {


    return (
        <>
            <Layout>
            <Nav/>
            <Package/>
            </Layout>
        </>
    )
} 

export default App