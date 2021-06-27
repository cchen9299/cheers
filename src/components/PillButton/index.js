import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import dispatchPills from '../../actions/dispatchPills';

function PillButton({ negateMargin, ingredient, pillList, dispatchPills, measurement, highlighted }) {
  const handleOnClick = (event) => {
    pillList.includes(ingredient)
      ? dispatchPills(pillList.filter((pillList) => pillList !== ingredient))
      : dispatchPills(pillList.concat(ingredient));
    event.stopPropagation();
  };

  return (
    <Button
      negateMargin={negateMargin}
      highlighted={highlighted || pillList.includes(ingredient)}
      onClick={(event) => handleOnClick(event)}
    >
      {ingredient} {measurement && `- ${measurement}`}
    </Button>
  );
}
const mapStateToProps = (state) => ({
  pillList: state.pillData.pillList,
});

export default connect(mapStateToProps, { dispatchPills })(PillButton);

const Button = styled.button`
  font-size: 12px;
  margin-right: 4px;
  margin-bottom: 8px;
  :last-child {
    margin-bottom: ${(props) => (props.negateMargin ? '8px' : '0')};
  }
  padding: 4px 12px;
  border-radius: 100px;
  font-weight: 900;
  cursor: pointer;
  border-width: 2;
  border-style: solid;
  transition: 0.2s box-shadow, 0.2s text-shadow, 0.2s color;

  background-color: transparent;
  border-color: ${(props) => (props.highlighted ? '#0ff' : '#999')};
  color: ${(props) => (props.highlighted ? '#bbffff' : '#999')};
  box-shadow: ${(props) => props.highlighted && '0 0 10px #0ff, inset 0 0 10px #0ff'};
  text-shadow: ${(props) => props.highlighted && '0 0 5px #0ff,  0 0 10px #0ff'};

  :hover {
    border-color: #bbffff;
    color: #bbffff;
    box-shadow: 0 0 20px #0ff, inset 0 0 20px #0ff;
  }
  :active {
    box-shadow: none;
    text-shadow: 0 0 10px white, 0 0 20px white;
    color: white;
  }
`;
