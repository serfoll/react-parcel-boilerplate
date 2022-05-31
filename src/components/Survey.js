import { useState } from 'react';
import styled from 'styled-components';

//custom components
import Card from './Card';

//styling
import Colors from './Colors';
import ThankYou from './ThankYou';

//images
import starIcon from '../images/icon-star.svg';

const StarIcon = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: ${Colors['dark-blue']};
  border: none;
`;

const Points = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  button {
    width: 45px;
    height: 44px;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${Colors['dark-blue']};
    border: none;
    margin-left: 5px;
    color: ${Colors.white};

    :hover {
      background-color: ${Colors.orange};
    }

    &.current {
      background-color: ${Colors['light-grey']};
    }
  }
`;

const Submit = styled.button`
  width: 100%;
  padding: 12px 0;
  border-radius: 40px;
  border: none;
  background-color: ${Colors.orange};
  color: ${Colors.white};
  cursor: pointer;
  text-transform: uppercase;
  bottom: 30px;

  :hover {
    background-color: ${Colors.white};
    color: ${Colors.orange};
  }
`;

const Survey = () => {
  const [hideBox, setHideBox] = useState(null);
  const [rating, setRating] = useState(null);
  const [viewIndex, setViewIndex] = useState(-1);

  const selected = (e) => {
    e.preventDefault();
    const currChoice = e.target;
    const btns = document.querySelectorAll('.choice');

    for (let i = 0; i < btns.length; i++) {
      if (btns[i] !== currChoice) btns[i].className = 'choice';
      else {
        e.target.className = 'choice current';
      }
    }

    setRating(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault;

    if (rating === null) return;

    setHideBox('none');
    setViewIndex(3);
  };

  return (
    <>
      <Card className="survey" submited={hideBox}>
        <StarIcon>
          <img src={starIcon} alt="star icon" />
        </StarIcon>
        <h2>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <Points>
          <button className="choice" value="1" onClick={(e) => selected(e)}>
            1
          </button>
          <button className="choice" value="2" onClick={(e) => selected(e)}>
            2
          </button>
          <button className="choice" value="3" onClick={(e) => selected(e)}>
            3
          </button>
          <button className="choice" value="4" onClick={(e) => selected(e)}>
            4
          </button>
          <button className="choice" value="5" onClick={(e) => selected(e)}>
            5
          </button>
        </Points>
        <Submit onClick={(e) => submit(e)}>Submit</Submit>
      </Card>

      <ThankYou viewIndex={viewIndex} rating={rating} />
    </>
  );
};

export default Survey;
