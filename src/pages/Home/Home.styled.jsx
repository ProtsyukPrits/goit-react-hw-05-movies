import { Link} from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
display: grid;
`;

export const Title = styled.h2`
margin: 8px 0;
`;

export const Item = styled(Link)`
  color: blue;
  font-family: 'Oxygen';
`;

