# react-native-default-ui

Use react-native default components in esier way

## Installation

```sh
npm install react-native-default-ui

# Dependencies:
npm install @react-native-async-storage/async-storage axios react-native-linear-gradient react-native-pager-view react-native-vector-icons
```

## Usage

```jsx
import { View, Text, Center, Row } from "react-native-default-ui";

export default function App() {
  return (
    <View flex={1}>
      <Center>
        <Text size="lg">Hello world</Text>
        <Row justifyContent="space-around">
          <Button>Button1</Button>
          <Button>Button2</Button>
        </Row>
      </Center>
    </View>
  );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
