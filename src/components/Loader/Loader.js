import {Loading,Wave} from './Loader.styled'
import { Container } from 'components/Container.styled';

export const Loader = () => {
  return (
    <Container>
      <Loading>
        <Wave></Wave>
        <Wave></Wave>
        <Wave></Wave>
        <Wave></Wave>
        <Wave></Wave>
        <Wave></Wave>
        <Wave></Wave>
        <Wave></Wave>
        <Wave></Wave>
        <Wave></Wave>
      </Loading>
    </Container>
  );
}