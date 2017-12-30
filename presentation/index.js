// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
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
  reactNativeLogo: require('../assets/react-native.svg'),
  timeSpentOnDevices: require('../assets/time-spent-on-mobile-devices.jpg')
}

// Require CSS
require("normalize.css");
require("./styles.css");

const theme = createTheme({
  primary: '#C62828',
  secondary: '#4A148C',
  tertiary: 'white',
  quarternary: '#2196F3'
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck controls={false} transition={["slide"]} progress="bar" contentHeight={800} transitionDuration={500} theme={theme}>
        {/* SLIDE 1 */}
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
          <Text margin="40px" textColor="primary">by <b>Damodar Lohani</b></Text>
          <Text margin="40px" textSize="30" textColor="quarternary"><u>
            fb.me/lohanidamodar <br />
            twitter.com/lohanidamodar <br />
            dlohani48@gmail.com <br />
          </u></Text>
        </Slide>
        {/* SLIDE 2 */}
        <Slide bgColor="primary">
          <Heading size={1} fit caps textColor="tertiary" lineHeight={1} >
            About Me
          </Heading>
          <List textColor="tertiary">
            <Appear>
                <ListItem>
                  I started as a designer
                </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Web Developer
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Android Native Developer
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Ionic Framework and Angular 2
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                iOS Native Developer (Swift)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                React and React Native
              </ListItem>
            </Appear>
          </List>
        </Slide>
        {/* SLIDE 3*/}

        <Slide bgColor="primary">
          <Heading size={2} fit caps textColor="tertiary">Why they Matter?</Heading>
          <img style={{width: 800, marginTop: 20}} src={images.timeSpentOnDevices} />
        </Slide>

        {/* SLIDE 4 */}
        <Slide bgColor="secondary">
          <Heading size={2} fit caps textColor="quarternary">Why they Matter?</Heading>
          <Appear>
            <Text size={6} margin="30px 0 0" textColor="tertiary">
              Want to develop mobile applications for both Android and iOS but don't want to spend huge amount on each specific platform.
            </Text>  
          </Appear>
        </Slide>

        {/* SLIDE 5 */}
        <Slide bgColor="primary" textColor="tertiary" bgDarken={0.2}>
          <Heading size={2} fit caps textColor="quarternary">How Do They Run?</Heading>
              <Appear>
                <Heading size={6}>React Native</Heading>
              </Appear>
              <List>
                <Appear>
                  <ListItem>
                    Native app, JS code for UI compiles to Native code with JS logic running on a JS thread hosted by React Native App.
                  </ListItem>
                </Appear>
                <Appear>
                  <ListItem>
                    Uses React for development.
                  </ListItem>
                </Appear>
              </List>
              <Appear>
                <Heading size={6}>Ionic</Heading>
              </Appear>
              <List>
                <Appear>
                  <ListItem>
                    Web app running on a web view wrapped by Native app that cccess native features via cordova using cordova plugins.
                  </ListItem>
                </Appear>
                <Appear>
                  <ListItem>
                    Uses Angular for development.
                  </ListItem>
                </Appear>
              </List>
        </Slide>

        {/* SLIDE 6 */}
        <Slide transition={["fade"]} bgColor="quarternary" textColor="tertiary">
          <Heading size={2} fit caps textColor="tertiary">Cross Platform Compatibility</Heading>
          <Layout>
            <Fill>
              <Appear>
                <Heading size={6}>React Native</Heading>
              </Appear>
              <Appear>
                <Text>Learn once, Write Everywhere</Text>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <Heading size={6}>Ionic</Heading>
              </Appear>
              <Appear>
                <Text>Write Once, Run Everywhere</Text>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        {/* SLIDE 7 */}
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} fit caps textColor="quarternary">Components Library</Heading>
          <Layout>
            <Fill>
              <Heading size={6}>React Native</Heading>
              <List padding="0 20px 0 0">
                <ListItem textColor="tertiary" textSize="30">
                  Only basic set of  prebuilt components like View, Text, TextInput
                </ListItem>
                <ListItem textColor="tertiary" textSize="30">For advance build your own or use third party library</ListItem>
              </List>
            </Fill>
            <Fill>
              <Heading size={6}>Ionic</Heading>
              <List  padding="0 0 0 20px">
                <ListItem textSize="30" textColor="tertiary">Comes with large collection of prebuilt components including most frequently used advance components like card, action sheets, FABs, Menus, Navigation and so on</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        {/* SLIDE 8 */}
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={2} fit caps textColor="tertiary">Which Should I Start?</Heading>
          <List>
            <Appear>
              <ListItem>
                I Already know Angular 2+
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                I Already know React
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                I Only Know Javascript
              </ListItem>
            </Appear>
            
            <Appear>
              <ListItem>
                React is a small library with much less learning curve
              </ListItem>
            </Appear>

          </List>
        </Slide>

        {/* SLIDE 9 */}
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <BlockQuote>
            <Quote>Questions?</Quote>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
