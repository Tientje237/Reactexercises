import './App.css';
import BirthdayList from './components/birthday';
import Layout from './components/layout';
import Today from './components/today';
import Clear from './components/clear';


function App() {

    return (
        <>
            <Layout>
                <Today/>
                <BirthdayList/>
                <Clear/>
            </Layout>
        </>
    )
} 

export default App
