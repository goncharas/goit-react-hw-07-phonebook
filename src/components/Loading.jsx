import { Circles } from 'react-loader-spinner';
import { CirclesStyled } from 'components/GlobalStyles';

export const Loading = () => {
  return (
    <div style={{ justifyContent: 'center', display: 'flex' }}>
      <Circles {...CirclesStyled} />
    </div>
  );
};