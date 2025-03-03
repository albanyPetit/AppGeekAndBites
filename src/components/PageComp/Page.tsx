import { Dimensions, Text, View } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  SharedValue,
  interpolate,
  Extrapolation,
} from "react-native-reanimated";
import { styles } from "./Page.styles";

interface PageProps {
  ruta: any;
  index: number;
  translateX: SharedValue<number>;
}

const { height, width } = Dimensions.get("window");

const Page: React.FC<PageProps> = ({ index, ruta, translateX }) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolation.CLAMP, //En caso de extrapolarse
    );

    // const borderRadius = interpolate(
    //   translateX.value,
    //   inputRange,
    //   [0, SIZE / 2, 0], //Al estar en la pagina sera un circulo, al movernos sera un cuadrado
    //   Extrapolation.CLAMP, //En caso de extrapolarse
    // );

    return {
      //borderRadius,
      transform: [{ scale }],
    };
  });

  const rTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      translateX.value,
      inputRange,
      [height / 2, 0, -height / 2],
      Extrapolation.CLAMP, //En caso de extrapolarse
    );

    const opacity = interpolate(
      translateX.value,
      inputRange,
      [-1, 1, -1],
      Extrapolation.CLAMP,
    );

    return {
      opacity,
      transform: [
        {
          translateY,
        },
      ],
    };
  });

  return (
    <View
      style={[
        styles.pageContainer,
        { backgroundColor: `rgba(0,0,256,0.${index + 2})` },
      ]}
    >
      <Animated.View style={[styles.square, rStyle]}>
        <Animated.Image source={ruta} style={[rStyle, styles.image]} />
      </Animated.View>
      <Animated.View style={[rTextStyle, { position: "absolute" }]}>
        <Text style={styles.text}>{`Perk_${index + 1}`}</Text>
      </Animated.View>
    </View>
  );
};

export { Page };
