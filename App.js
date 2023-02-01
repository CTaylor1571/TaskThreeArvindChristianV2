import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert} from 'react-native';
import colors from "./app/config/colors";
import Constants from 'expo-constants';
import CustomButton from './app/components/Button';
import CustomIcon from './app/components/Icon';
import ImageBox from './app/components/ImageBox';

const likeAlert = () =>
    Alert.alert('You liked the image', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

const loveAlert = () =>
    Alert.alert('You loved the image', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);



export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.topBar}>

        <CustomIcon
          name="setting"
          size={30}
          color={colors.green}
        />

        <CustomIcon
          name="staro"
          size={30}
          color={colors.yellow}
        />

        <CustomIcon
          name="home"
          size={30}
          color={colors.red}
        />

      </View>

      <View style={styles.contentArea}>
        <ImageBox
          text="look at this meme"
          backColor={colors.green}
          textColor={colors.dark}
          />

        <CustomIcon style={styles.topMargin}
          name="meh"
          size={30}
          color={colors.yellow}
        />
        
      </View>

      <View style={styles.bottomArea}>

        <CustomButton
            title="Like :)"
            onPress={likeAlert}
            textColor={colors.dark}
            backColor={colors.yellow}
            highlightColor={colors.blue}
        />

        <CustomButton
            title="Love :D"
            onPress={loveAlert}
            textColor={colors.dark}
            backColor={colors.red}
            highlightColor={colors.blue}
        />


      </View>

      

      


      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
  },

  topBar: {
    paddingTop: 10,
    marginBottom: 10,
    width: '50%',
    marginLeft: '50%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  contentArea: {
    height: '72.5%',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
    marginBottom: 15,
  },

  bottomArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%'
  },
  emojiContainer: {
    marginTop: 10,
    flexDirection: 'row',
    width: 200
  }



});
