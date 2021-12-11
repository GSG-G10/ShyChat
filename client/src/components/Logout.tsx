import { useHistory } from 'react-router-dom';
import http from '../service/httpService'
import { Button } from 'react-bootstrap';
const  Logout = () => {
    const history = useHistory();
    const handleLogout = async () => {
        localStorage.removeItem('loginStatus')
        await http.get('user/logout')
        history.push("/");
    }

    return (
        <Button variant="danger"onClick={handleLogout}>Logout</Button> 
    )
}

export default Logout
