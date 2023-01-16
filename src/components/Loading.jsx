import { Vortex } from 'react-loader-spinner';
import { VortexStyled } from 'components/GlobalStyles';

export const Loading = () => {
  return (
    <div style={{ justifyContent: 'center', display: 'flex' }}>
      <Vortex {...VortexStyled} />
    </div>
  );
};