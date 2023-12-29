import React from "react";
import { Pressable } from "react-native";
import type {
  NavigationState,
  SceneRendererProps,
} from "react-native-tab-view";
import { Text } from "../texts/Text";
import useTheme from "../useTheme";
import { Center, Row, View } from "../views/View";

export default function TabviewTabbar(
  props: SceneRendererProps & { navigationState: NavigationState<any> },
) {
  const routes = props.navigationState.routes;

  const { colors, dark } = useTheme();

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
