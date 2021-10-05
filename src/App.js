import { Fragment, useEffect } from 'react';
import GlobalStyle from './styles/Global'

//Components
import Header from './components/Header'
import FirstAndSecond from './components/FirstAndSecond';

//Style
import { ContainerHome, SectionContainer, Sticky } from './styles/index'

function App() {

  useEffect(() => {
    window.scrollTo({ top: 0 })
  })
  return (
    <Fragment>
      <GlobalStyle />

      <Header />
      <ContainerHome>

        <SectionContainer style={{ height: '72.7%' }}>
          <FirstAndSecond />
        </SectionContainer>

        <SectionContainer style={{ height: '9.7%' }}>
          <Sticky className="third" />
        </SectionContainer>

        <SectionContainer style={{ height: '10.1%' }}>
          <Sticky className="fourth" />
        </SectionContainer>


      </ContainerHome>

    </Fragment>
  );
}

export default App;
