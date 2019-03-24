import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Portal, absolute } from "Utilities";
import { Card } from "./Cards";
import Icon from "./Icon";

class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;

    return (
      <Portal>
        {on && (
          <ModalWrapper>
            <ModalCard>
              <CloseButton onClick={toggle}>
                <Icon color="#000" name="close" />
              </CloseButton>
              <div>{children}</div>
            </ModalCard>
            <Background onClick={toggle} />
          </ModalWrapper>
        )}
      </Portal>
    );
  }
}

const ModalWrapper = styled.div`
  ${absolute({})};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Background = styled.div`
  ${absolute({})}
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ModalCard = styled(Card)`
  min-width: 320px;
  position: relative;
  margin-bottom: 200px;
  text-align: center;
  z-index: 10;
`;

const CloseButton = styled.button`
  ${absolute({ y: "top", x: "right" })};
  cursor: pointer;
  border: none;
  background: transparent;
  padding: 10px;
`;

export default Modal;
