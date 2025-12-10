import {Outlet} from 'react-router';
import Header from '../components/Header.jsx';

const HomeLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default HomeLayout;