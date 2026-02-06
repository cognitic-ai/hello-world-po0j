import { ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";
import * as AC from "@bacons/apple-colors";

export default function DetailRoute() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <Link.AppleZoomTarget>
        <Image
          source="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80"
          style={{ width: "100%", aspectRatio: 4 / 3 }}
        />
      </Link.AppleZoomTarget>

      <View style={{ padding: 20, gap: 12 }}>
        <Text
          selectable
          style={{ fontSize: 28, fontWeight: "700", color: AC.label }}
        >
          Explore Nature
        </Text>
        <Text
          selectable
          style={{ fontSize: 17, lineHeight: 24, color: AC.secondaryLabel }}
        >
          Discover the beauty of untouched landscapes and breathtaking vistas.
          From towering mountain peaks to serene lakeside views, nature offers
          an endless source of wonder and inspiration.
        </Text>
        <Text
          selectable
          style={{ fontSize: 17, lineHeight: 24, color: AC.secondaryLabel }}
        >
          This page uses Apple's fluid zoom transition — the card on the
          previous screen seamlessly expands into this detail view, and you can
          swipe back to collapse it.
        </Text>
      </View>
    </ScrollView>
  );
}
