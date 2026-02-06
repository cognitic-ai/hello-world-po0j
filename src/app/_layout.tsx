import { ThemeProvider } from "@/components/theme-provider";
import Stack from "expo-router/stack";
import * as AC from "@bacons/apple-colors";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { Alert, Pressable } from "react-native";

const stackPreset: NativeStackNavigationOptions =
  process.env.EXPO_OS !== "ios"
    ? {}
    : {
        headerTransparent: true,
        headerShadowVisible: true,
        headerLargeTitleShadowVisible: false,
        headerLargeStyle: { backgroundColor: "transparent" },
        headerBlurEffect: "systemChromeMaterial",
        headerBackButtonDisplayMode: "default",
      };

function HeaderMenuButton() {
  return (
    <Pressable
      onPress={() => Alert.alert("Menu", "You tapped the menu button!")}
      hitSlop={8}
    >
      {process.env.EXPO_OS === "web" ? (
        <Ionicons name="ellipsis-horizontal-circle" size={22} color={AC.systemBlue as any} />
      ) : (
        <Image
          source="sf:ellipsis.circle"
          style={{ width: 22, height: 22, color: AC.systemBlue as any }}
        />
      )}
    </Pressable>
  );
}

export default function Layout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={stackPreset}>
        <Stack.Screen
          name="index"
          options={{
            title: "Hello World",
            headerRight: () => <HeaderMenuButton />,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
