import TabButton from '../TabButton/TabButton';

export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
  return (
    <>
      <ButtonsContainer>
        { buttons }
      </ButtonsContainer>
      <div>
        { children }
      </div>
    </>
  )
}