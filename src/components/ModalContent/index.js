import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PillButton from '../PillButton';
import { subtitleStyle } from '../../appTheme';

export default function ModalContent({ showModal, handleHideModal, modalCocktail }) {
  return (
    <Modal showModal={showModal} onHideModal={handleHideModal}>
      <CloseButton onClick={handleHideModal}>CLOSE</CloseButton>
      <Wrapper
        onDrag={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      >
        <LeftColumn style={styles.leftColumn}>
          <MobileImage src={modalCocktail.strDrinkThumb} width="100%" height="100%" alt={modalCocktail.strDrink} />
          <p style={styles.drinkID}>{modalCocktail?.idDrink}</p>
          <p style={styles.drinkTitle}>{modalCocktail?.strDrink}</p>
          <p style={styles.drinkType}>
            {'//'} {modalCocktail?.strAlcoholic}
          </p>
          <Spacer height={20}></Spacer>
          <SectionContainer style={{ display: 'flex' }}>
            <p style={{ flex: 0.4, ...subtitleStyle }}>
              Primary <Br /> Ingredient
            </p>
            <Spacer width={10}></Spacer>
            <SectionContentContainer>
              <PillButton
                highlighted
                ingredient={modalCocktail?.ingredients[0]}
                measurement={modalCocktail?.measurements[0]}
              />
            </SectionContentContainer>
          </SectionContainer>
          <Spacer height={15}></Spacer>
          <SectionContainer style={{ display: 'flex' }}>
            <p style={{ flex: 0.4, ...subtitleStyle }}>
              Secondary <Br />
              Ingredient
            </p>
            <Spacer width={10}></Spacer>
            <SectionContentContainer
              style={{
                alignItems: 'flex-start',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {modalCocktail?.ingredients.map((ingredient, index) => {
                if (ingredient !== null && index !== 0) {
                  return (
                    <PillButton
                      highlighted
                      key={index}
                      ingredient={ingredient}
                      measurement={modalCocktail?.measurements[index]}
                    />
                  );
                } else return null;
              })}
            </SectionContentContainer>
          </SectionContainer>
          <Spacer height={15} />
          <SectionContainer style={{ display: 'flex' }}>
            <p style={{ flex: 0.4, ...subtitleStyle }}>Instructions</p>
            <Spacer width={10}></Spacer>
            <SectionContentContainer>
              <p style={styles.drinkInstructions}>{modalCocktail.strInstructions}</p>
            </SectionContentContainer>
          </SectionContainer>
          <Spacer height={100}></Spacer>
        </LeftColumn>
        <Spacer width={20}></Spacer>
        <DesktopImage src={modalCocktail.strDrinkThumb} width="100%" height="100%" alt={modalCocktail.strDrink} />
      </Wrapper>
    </Modal>
  );
}

function Modal({ showModal, children, onHideModal }) {
  const [isOpen, setIsOpen] = useState(false);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      onHideModal();
    }
  });

  document.onclick = (event) => {
    if (
      !event.path.some((element) => {
        return element.id?.includes('modal') || element.id?.includes('cocktailCard');
      }) &&
      isOpen
    ) {
      onHideModal();
    }
  };
  useEffect(() => {
    setIsOpen(true);
  }, [showModal]);

  if (!showModal) {
    return null;
  }

  return (
    <ModalWrapper
      onDrag={(event) => {
        event.preventDefault();
        event.stopPropagation();
      }}
      id={'modal'}
    >
      <ModalBorder />
      {children}
    </ModalWrapper>
  );
}

const styles = {
  drinkID: {
    color: '#009999',
    fontWeight: '900',
    fontSize: 160,
    bottom: '15%',
    right: '5%',
    position: 'absolute',
    opacity: 0.1,
  },
  drinkTitle: {
    color: '#00cccc',
    fontWeight: '900',
    fontSize: 64,
    lineHeight: '64px',
  },
  drinkType: {
    color: '#00cccc',
    fontWeight: '300',
    fontSize: 16,
    lineHeight: '24px',
    paddingBottom: 15,
    textTransform: 'uppercase',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: 'rgb(80,100,100)',
    borderStyle: 'dotted',
  },
  drinkInstructions: {
    color: '#bbffff',
    fontWeight: 'bold',
    fontSize: 12,
    textShadow: '0 0 5px #0ff,  0 0 10px #0ff',
  },
};

const Spacer = styled.div`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
`;

const Br = styled.br`
  @media (max-width: 799px) {
    display: none;
  }
`;

const CloseButton = styled.div`
  font-weight: bold;
  color: #0ff;
  font-size: 12px;
  padding: 16px;
  padding-bottom: 0;
  z-index: 1000;
  align-self: flex-end;
  @media (min-width: 800px) {
    display: none;
  }
`;

const ModalBorder = styled.div`
  position: fixed;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  opacity: 0.5;
  border-color: rgb(150, 255, 255);
  border-radius: 12px;
  border-style: solid;
  border-width: 4px;
`;

const ModalWrapper = styled.div`
  display: flex;
  align-self: center;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 10px whitesmoke, 0 0 40px rgb(0, 255, 255), inset 0 0 20px rgb(0, 255, 255);
  backdrop-filter: blur(30px);
  justify-content: center;
  border-radius: 5px;
  z-index: 100;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -55%);
  @media (max-width: 799px) {
    height: calc(100vh - 30px);
    width: calc(100vw - 30px);
    left: 0%;
    top: 0%;
    transform: translate(0%, 0%);
    margin: 15px;
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px;
  @media (max-width: 799px) {
    flex-direction: column;
    margin: 15px;
    overflow: scroll;
    z-index: 100;
  }
`;

const DesktopImage = styled.img`
  opacity: 0.8;
  width: 300px;
  height: 300px;
  filter: contrast(1.5) brightness(1.2) saturate(1);
  border-width: 3px;
  border-color: white;
  border-style: double;
  padding: 3px;
  @media (max-width: 799px) {
    display: none;
  }
`;

const MobileImage = styled.img`
  opacity: 0.8;
  width: 200px;
  height: 200px;
  filter: contrast(1.5) brightness(1.2) saturate(1);
  border-width: 3px;
  border-color: white;
  border-style: double;
  padding: 3px;
  margin-bottom: 15px;
  display: flex;
  align-self: center;
  @media (min-width: 800px) {
    display: none;
  }
`;

const LeftColumn = styled.div`
  padding: 15px;
  background-color: rgba(0, 50, 50, 0.3);
  flex: 1;
  border-width: 0;
  border-top-width: 5;
  border-color: 'rgb(0,250,250)';
  border-style: 'solid';
  display: 'flex';
  flex-direction: 'column';
  flex-shrink: 1;
  min-width: 400px;
  @media (max-width: 799px) {
    min-width: auto;
  }
`;

const SectionContainer = styled.div`
  @media (max-width: 799px) {
    flex-direction: column;
  }
`;

const SectionContentContainer = styled.div`
  flex: 1;
  background-color: rgba(150, 255, 255, 0.1);
  padding: 10px;
  border-width: 1px;
  border-color: rgba(80, 80, 80);
  border-style: solid;
  text-shadow: 0 0 5px #0ff, 0 0 10px #0ff;
`;
