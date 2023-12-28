import React, { useState } from "react";
import PagerView, { type PagerViewProps } from "react-native-pager-view";
import { Row, View } from "../views/View";

export type HorizontalSwiperProps<T> = PagerViewProps & {
  items: T[];
  // eslint-disable-next-line no-unused-vars
  renderItem: (item: T, index: number) => React.ReactNode;
  showPagination?: boolean;
};

export default function HorizontalSwiper<T>({
  items,
  renderItem,
  showPagination,
}: HorizontalSwiperProps<T>) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View flex={1}>
      <PagerView
        style={{ flex: 1 }}
        initialPage={activeIndex}
        onPageSelected={e => {
          const { position } = e.nativeEvent;
          setActiveIndex(position);
        }}
      >
        {items.map((item, i) => (
          <View key={i} flex={1}>
            {renderItem(item, i)}
          </View>
        ))}
      </PagerView>
      {showPagination && (
        <Row justifyContent="center" marginTop={10}>
          {items.map((_, i) => (
            <View
              key={i}
              width={10}
              height={10}
              borderRadius={10}
              backgroundColor={activeIndex === i ? "green" : "#ccc"}
              marginHorizontal={5}
            />
          ))}
        </Row>
      )}
    </View>
  );
}
