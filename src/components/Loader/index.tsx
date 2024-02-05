import { PacmanLoader } from 'react-spinners'
import { Colors } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <PacmanLoader color={Colors.whiteColor} />
  </Container>
)

export default Loader
