import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { useUserInfo } from '../shared/constants';

const PrivateRoutes = () => {

    // const {email,password} = useSelector((store) => store.user)
    const user = useUserInfo(state => state.user)
    if(user.email, user.password) return <Outlet/>;

    // console.log(user);

    return <Navigate to="/" />;
}

export default PrivateRoutes;