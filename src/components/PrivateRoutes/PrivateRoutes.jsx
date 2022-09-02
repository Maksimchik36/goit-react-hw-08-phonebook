import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

// позволяет ограничиваать доступ к маршрутам в зависимости от наличия token-а
const PrivateRoutes = () => {
    const {token} = useSelector(state => state.user)  

    return token ? <Outlet /> : <Navigate to="/" replace />;
}


export default PrivateRoutes;