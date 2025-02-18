import React, { useState } from 'react';
import { View } from 'react-native';
import { Header } from './components/Header';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<number>(1);

  const navigateTo = (screen: number) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 1:
        return <Screen1 onNext={() => navigateTo(2)} />;
      case 2:
        return <Screen2 onNext={() => navigateTo(3)} onReturn={() => navigateTo(1)} />;
      case 3:
        return <Screen3 onNext={() => navigateTo(4)} onReturn={() => navigateTo(2)} />;
      case 4:
        return <Screen4 onReturn={() => navigateTo(3)} />;
      default:
        return <Screen1 onNext={() => navigateTo(2)} />;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {renderScreen()}
      </View>
    </View>
  );
};

export default App;
