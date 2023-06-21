import { Container, Card } from 'react-bootstrap';
import LoginForm from './components/LoginForm';

const MainPage = () => (
  <Container className="vh-100 d-flex justify-content-center">
    <Card className="h-25 w-75 align-self-center bg-light">
      <LoginForm />
    </Card>
  </Container>
);

export default MainPage;
