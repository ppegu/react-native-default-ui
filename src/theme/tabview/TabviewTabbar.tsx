import React from "react";
import { Pressable } from "react-native";
import type {
  NavigationState,
  SceneRendererProps,
} from "react-native-tab-view";
import { useThemeMode } from "src/theme/ThemeSlice";
import useTheme from "src/theme/useTheme";
import { Center, Row, View } from "src/theme/views/View";
import { Text } from "../texts/Text";

export default function TabviewTabbar(
  props: SceneRendererProps & { navigationState: NavigationState<any> },
) {
  const routes = props.navigationState.routes;

  const { colors } = useTheme();

  const { dark } = useThemeMode();

  return (
    <View>
      <Row gap={10}>
        {routes.map((route, i) => {
          const active = props.navigationState.index === i;
          return (
            <View key={route.key} flex={1} padding={10}>
              <Pressable
                key={route.key}
                onPress={() => {
                  props.jumpTo(route.key);
                }}
                style={{ padding: 10 }}
              >
                <Center>
                  <View
                    key={route.key}
                    style={[
                      active && {
                        borderBottomWidth: 2,
                        borderBottomColor: dark ? colors.text : colors.border,
                      },
                    ]}
                  >
                    <Text weight={active ? "bold" : "regular"}>
                      {route.title}
                    </Text>
                  </View>
                </Center>
              </Pressable>
            </View>
          );
        })}
      </Row>
    </View>
  );
}
