import thankYouIcon from '../images/illustration-thank-you.svg';
import styled from 'styled-components';
import Card from './Card';
import Colors from './Colors';

/* Styling */

const ThankYouIcon = styled.img`
  width: 150px;
  height: auto;
`;

const SubmitedInfo = styled.p`
  padding: 10px;
  color: ${Colors.orange};
  background-color: ${Colors['dark-blue']};
  border-radius: 30px;
`;

const ThankYou = ({ viewIndex, rating }) => {
  return (
    <Card className="thank-you" unsubmited={viewIndex}>
      <ThankYouIcon src={thankYouIcon} alt="thank you icon" />
      <SubmitedInfo>You selected {rating} out of 5</SubmitedInfo>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </Card>
  );
};

export default ThankYou;
