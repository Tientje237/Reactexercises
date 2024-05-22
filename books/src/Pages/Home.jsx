import Booklist from '../components/BookList';
import Header from '../components/Header';
import Layout from '../components/Layout';

const Home = () => {
    return (
        <>
            <Header/>
            <Layout>
            <Booklist/>
            </Layout>
        </>
    )
    
    }

export default Home;