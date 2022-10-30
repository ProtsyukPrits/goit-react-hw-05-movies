import { HiArrowLeft } from 'react-icons/hi';
import { StyledLink } from './LinkGoBack.styled';
import {PropTypes} from 'prop-types'

const LinkGoBack = ({ to, children }) => {
  return (
    <>
      <StyledLink to={to}>
        <HiArrowLeft size="12" />
        {children}
      </StyledLink>
    </>
  );
};



LinkGoBack.propTypes = {
  children: PropTypes.string.isRequired,
}

export default LinkGoBack