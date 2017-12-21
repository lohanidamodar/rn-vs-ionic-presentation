// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Fill,
  Layout
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

const images = {
  ionicLogo: require('../assets/ionic.png'),
  reactNativeLogo: require('../assets/react-native.svg')
}

// Require CSS
require("normalize.css");
require("./styles.css");

const theme = createTheme({
  primary: '#ff4081'
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck controls={false} transition={["slide"]} progress="bar" contentHeight={800} transitionDuration={500} theme={theme}>
        <Slide bgColor="tertiary">
          <Heading size={1} fit caps textColor="primary" lineHeight={1} >
            React Native <span style={{color: "#444"}}>VS</span> Ionic
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={6}>
            JS On Mobile
          </Text>
          <Layout>
            <Fill>
              <img src={images.reactNativeLogo} />
            </Fill>
            <Fill>
              <img src={images.ionicLogo} />
            </Fill>
          </Layout>
          <Text margin="40px" bold>by Damodar Lohani</Text>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={2} fit caps textColor="primary">Why they Matter?</Heading>
          <Text size={6} margin="30px 0 0" textColor="tertiary">
            Want to develop mobile applications for both Android and iOS but don't want to spend huge amount on each specific platform.
          </Text>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary" bgDarken={0.2}>
          <Heading size={2} fit caps textColor="secondary">How Do They Run?</Heading>
              <Heading size={6}>React Native</Heading>
              <List>
                <ListItem>
                  Native app, JS code for UI compiles to Native code with JS logic running on a JS thread hosted by React Native App.
                </ListItem>
                <ListItem>
                  Uses React for development.
                </ListItem>
              </List>
              <Heading size={6}>Ionic</Heading>
              <List>
                <ListItem>
                  Web app running on a web view wrapped by Native app that cccess native features via cordova using cordova plugins.
                </ListItem>
                <ListItem>
                  Uses Angular for development.
                </ListItem>
              </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="tertiary">
          <Heading size={2} fit caps textColor="primary">Cross Platform Compatibility</Heading>
          <Layout>
            <Fill>
              <Heading size={6}>React Native</Heading>
              <Text>Learn once, Write Everywhere</Text>
            </Fill>
            <Fill>
              <Heading size={6}>Ionic</Heading>
              <Text>Write Once, Run Everywhere</Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="tertiary">
          <Heading size={2} fit caps textColor="primary">Cross Platform Styling</Heading>
          <Layout>
            <Fill>
              <Heading size={6}>React Native</Heading>
              <Text>Build own styling</Text>
              <Text>However there are third party libraries that provide components styled for specific platforms like nativebase, react native elements..</Text>
            </Fill>
            <Fill>
              <Heading size={6}>Ionic</Heading>
              <Text>Provides a large set of components that are already styled for each platform. The components are styled with platform specific styles.</Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={2} fit caps>Components Library</Heading>
          <Layout>
            <Fill>
              <Heading size={6}>React Native</Heading>
              <Text>Only basic set of  prebuilt components like View, Text, TextInput</Text>
              <Text>More advance components we can build using basic components or use third party open source libraries like nativebase, react-native-elements</Text>
            </Fill>
            <Fill>
              <Heading size={6}>Ionic</Heading>
              <Text>Large collection of prebuilt components including most frequently used advance components like card, action sheets, FABs, Menus, Navigation and so on</Text>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
