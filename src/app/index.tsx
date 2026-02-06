import { ScrollView, Text, View, Pressable } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";
import * as AC from "@bacons/apple-colors";

export default function IndexRoute() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        gap: 32,
      }}
    >
      <View style={{ alignItems: "center", gap: 8 }}>
        <Text
          selectable
          style={{ fontSize: 32, fontWeight: "700", color: AC.label }}
        >
          Hello World
        </Text>
        <Text
          selectable
          style={{ fontSize: 17, color: AC.secondaryLabel }}
        >
          Welcome to Expo
        </Text>
      </View>

      <Link href="/detail" asChild>
        <Link.Trigger withAppleZoom>
          <Pressable
            style={{
              width: 280,
              borderRadius: 20,
              borderCurve: "continuous",
              overflow: "hidden",
              backgroundColor: AC.secondarySystemBackground as any,
              boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
            }}
          >
            <Image
              source="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80"
              style={{ width: "100%", aspectRatio: 4 / 3 }}
            />
            <View style={{ padding: 16, gap: 4 }}>
              <Text
                style={{ fontSize: 17, fontWeight: "600", color: AC.label }}
              >
                Explore Nature
              </Text>
              <Text style={{ fontSize: 14, color: AC.secondaryLabel }}>
                Tap to zoom into the detail page
              </Text>
            </View>
          </Pressable>
        </Link.Trigger>
        <Link.Preview />
      </Link>
    </ScrollView>
  );
}
