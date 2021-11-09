import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  width: 100%;
  margin: 1em 0;
`

const BarWrapper = styled.div`
  background-color: var(--color-light);
  left: 50%;
  padding: 0 8px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`

const Bar = styled.div`
  background-color: rgba(0, 0, 0, .2);
  border-radius: .25rem;
  height: 16px;
  width: 128px;
`

const Line = styled.span`
  border-bottom: 1px solid rgba(0, 0, 0, .2);
  height: 1px;
  width: 100%;
`

const Divider = (props) => {
  return (
    <Wrapper {...props}>
      <BarWrapper>
        <Bar/>
      </BarWrapper>
      <Line/>
    </Wrapper>
  );
};

export default Divider;
