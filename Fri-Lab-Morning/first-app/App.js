import { Linking, SafeAreaView, Text, View } from 'react-native';
import { styles } from './App.style';
import { ProfileCard } from './components/Profile/Profile';

export default function App() {

  const redirectMedia = (socialMedia) => {
    let url;
    switch (socialMedia) {
      case "twitter":
        url = "http://x.com/"
        break;
      case "linkedin":
        url = "https://www.linkedin.com/"
        break;
      case "github":
        url = "https://github.com/sqb-codes"
        break;
      case "facebook":
        url = "https://www.facebook.com/"
        break;
      default:
        break;
    }
    Linking.openURL(url);
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.title}>Hello</Text>
      <Text style={styles.title}>Hello</Text> */}

      {/* <View style={styles.box}>
        <Text style={styles.innerText}>This is box-1</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.innerText}>This is box-2</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.innerText}>This is box-3</Text>
      </View> */}

      <ProfileCard
        username={"Virat Kohli"}
        description={"I am a Full Stack Developer"}
        pic={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Virat_Kohli_in_PMO_New_Delhi.jpg/220px-Virat_Kohli_in_PMO_New_Delhi.jpg"}
        onPressSocialMedia={redirectMedia}
      />

      <ProfileCard
        username={"Rohit Sharma"}
        description={"I am a Java Developer"}
        pic={"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202409/rohit-sharma-131403807-3x4.jpg?VersionId=uHOQBfk6MbnllU1c5OVTlYa0kAKEsDSV"}
        onPressSocialMedia={redirectMedia}
      />
    </SafeAreaView>  
  );
}

