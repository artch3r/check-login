import { Container, Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { selectLogin, setLogin } from '../../slices/loginSlice';

const handleLogOut = (dispatch) => () => {
  dispatch(setLogin(null));
  localStorage.removeItem('login');
};

const ProfilePage = () => {
  const dispatch = useDispatch();
  const login = useSelector(selectLogin);

  return (
    <Container className="vh-100 vw-100 d-flex justify-content-center align-items-center">
      <Card className="h-25 w-25 bg-light d-flex justify-content-center align-items-center">
        <h1 className="text-center mb-3">{`Your login is ${login}`}</h1>
        <Button onClick={handleLogOut(dispatch)}>Log Out</Button>
      </Card>
    </Container>
  );
};

export default ProfilePage;
