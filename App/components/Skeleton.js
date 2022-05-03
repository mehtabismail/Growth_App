import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
export const SKELETON_SPEED = 1000;
export const SKELETON_BG = "#D9D9D9";
export const SKELETON_HIGHLIGHT = "#e7e7e7";
export const MAX_RATING_DEVIATION = 200;
const { width, height } = Dimensions.get("window");

const Skeleton = () => (
  <View style={{ flex: 1,backgroundColor:"white"}}>
    <View style={{marginTop:80}}>
    <SkeletonPlaceholder
      speed={SKELETON_SPEED}
      backgroundColor={SKELETON_BG}
      highlightColor={SKELETON_HIGHLIGHT}
    >
      <View style={{ flexDirection: "row", justifyContent:"center",  alignItems: "center",  }}>
        <View style={{ width: 60, height: 60, borderRadius: 50 }} />
        <View style={{ marginLeft: 20 }}>
          <View style={{ width: 120, height: 20, borderRadius: 4 }} />
          <View
            style={{ marginTop: 6, width: 120, height: 20, borderRadius: 4}}
          />
        </View>
      </View>
    </SkeletonPlaceholder>
    </View>
    <View style={{marginTop:70}}>
    <SkeletonPlaceholder
      speed={SKELETON_SPEED}
      backgroundColor={SKELETON_BG}
      highlightColor={SKELETON_HIGHLIGHT}
    >
      <View style={{justifyContent:"center" }}>
      <View
            style={{ marginLeft:30, width: 270, height: 30, borderRadius: 4}}
          />
      </View>
    </SkeletonPlaceholder>
    </View>
    <View style={{marginTop:10}}>
    <SkeletonPlaceholder
      speed={SKELETON_SPEED}
      backgroundColor={SKELETON_BG}
      highlightColor={SKELETON_HIGHLIGHT}
    >
      <View style={{justifyContent:"center" }}>
      <View
            style={{ marginLeft:30, width: 270, height: 30, borderRadius: 4}}
          />
      </View>
    </SkeletonPlaceholder>
    </View>
    <View style={{marginTop:10}}>
    <SkeletonPlaceholder
      speed={SKELETON_SPEED}
      backgroundColor={SKELETON_BG}
      highlightColor={SKELETON_HIGHLIGHT}
    >
      <View style={{justifyContent:"center" }}>
      <View
            style={{ marginLeft:30, width: 270, height: 30, borderRadius: 4}}
          />
      </View>
    </SkeletonPlaceholder>
    </View>
    <View style={{marginTop:10}}>
    <SkeletonPlaceholder
      speed={SKELETON_SPEED}
      backgroundColor={SKELETON_BG}
      highlightColor={SKELETON_HIGHLIGHT}
    >
      <View style={{justifyContent:"center" }}>
      <View
            style={{ marginLeft:30, width: 270, height: 30, borderRadius: 4}}
          />
      </View>
    </SkeletonPlaceholder>
    </View>
  </View>
);

const styles = StyleSheet.create({
  skeltonImageView: {
    width: width / 5,
    margin: 8,
    borderWidth: 0,
    borderRadius: 50,
    height: height / 11,
  },
  skeltonMainView: {
    width: width / 1.4,
    margin: 8,
    borderWidth: 0,
    height: height / 16,
    elevation: 5,
    shadowOpacity: 0.6,
    shadowRadius: 5,
    shadowOffset: { height: 0, width: 0 },
    borderRadius: 5,
    // height: globals.screenHeight * 0.24,
  },
  skeltonChangePasswordView: {
    width: "96%",
    margin: 8,
    borderWidth: 0,
    borderRadius: 5,
    height: height * 0.13,
    elevation: 5,
    shadowOpacity: 0.6,
    shadowRadius: 5,
    shadowOffset: { height: 0, width: 0 },
  },
});

export default Skeleton;
