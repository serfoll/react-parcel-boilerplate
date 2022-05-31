/** @format */
import styled from 'styled-components';
import Colors from './Colors';

export default styled.div`
  padding: 30px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${Colors['dark-blue']};
  background: radial-gradient(circle at 50% 0%, #323747 -90%, #171e28 50%);

  position: absolute;

  &.survey {
    z-index: 1;
    height: 330px;
    display: ${(props) => props.submited};
  }

  &.thank-you {
    z-index: ${(props) => props.unsubmited || -1};
    align-items: center;
    justify-content: space-around;

    p {
      text-align: center;
    }
    height: 300px;
  }
`;
