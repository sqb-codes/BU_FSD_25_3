import { Linking, SafeAreaView, Text, View } from 'react-native';
import { ProfileCard } from './components/profile/Profile';

export default function App() {

  const onPressRedirectTo = (socialMedia) => {
    let url = "";
    switch (socialMedia) {
      case "twitter":
        url = "https://www.x.com"
        break;
      case "linkedin":
        url = "https://www.linkedin.com/in/ravikant-tyagi-89309b1a0/"
        break;
      case "youtube":
        url = "https://www.youtube.com"
        break;
      case "github":
        url = "https://www.github.com/sqb-codes"
        break;
      default:
        break;
    }
    Linking.openURL(url);
  }

  return (
    <SafeAreaView>
      <ProfileCard
        name={"Ravi"}
        desc={"Developer | Trainer | Xebia"}
        onPressRedirect={onPressRedirectTo}
        imgUrl={"https://media.licdn.com/dms/image/v2/C4E03AQFwP-pXEcbDqg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1663167951336?e=2147483647&v=beta&t=y7xpZWdwhegvz5rHQ0slADjUN8eBfvZ5wYdxaifz9Wc"}
      />

      <ProfileCard
        name={"John"}
        desc={"Developer | Trainer | Xebia"}
        onPressRedirect={onPressRedirectTo}
        imgUrl={"https://ntvb.tmsimg.com/assets/assets/487578_v9_bb.jpg?w=360&h=480"}
      />

      <ProfileCard
        name={"Max"}
        desc={"Developer | Trainer | Xebia"}
        onPressRedirect={onPressRedirectTo}
        imgUrl={"https://resources.cricket-australia.pulselive.com/photo-resources/2023/05/05/221e8063-d125-46d7-8034-4e233101d59c/VMP3Kwgj.ashx?width=950&height=535"}
      />
    </SafeAreaView>
  );
}

