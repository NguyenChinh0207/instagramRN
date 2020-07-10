import { StatusBar } from "expo-status-bar";
import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	Platform,
	Dimensions,
	ScrollView,
} from "react-native";
import Constants from "expo-constants";
const statusBarHeight = Constants.statusBarHeight;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Instagram_feed() {
	const feedData = [
		{
			id: 1,
			name: "Nguyen Chinh",
			image: require("./assets/meo1.jpg"),
			likeCount: 9999,
			avatar: require("./assets/chinh.jpg"),
		},
		{
			id: 2,
			name: "Ngoc Anh",
			image: require("./assets/meo2.jpg"),
			likeCount: 54657,
			avatar: require("./assets/ngocanh.jpg"),
		},
		{
			id: 2,
			name: "Hong Nga",
			image: require("./assets/meo3.jpg"),
			likeCount: 65554,
			avatar: require("./assets/hongnga.jpg"),
		},
		{
			id: 2,
			name: "Thuy Trang",
			image: require("./assets/meo5.jpg"),
			likeCount: 789676,
			avatar: require("./assets/thuytrang.jpg"),
		},
		{
			id: 2,
			name: "Mai Huong",
			image: require("./assets/meo4.jpg"),
			likeCount: 56788,
			avatar: require("./assets/maihuong.jpg"),
		},
		{
			id: 2,
			name: "Quynh Trang",
			image: require("./assets/meo1.jpg"),
			likeCount: 999,
			avatar: require("./assets/quynhtrang.jpg"),
		},
		{
			id: 2,
			name: "Toilachos",
			avatar: require("./assets/thuytrang.jpg"),
			image: require("./assets/meo2.jpg"),
			likeCount: 10000,
		},
	];

	return (
		<View style={styles.container}>
			<View style={styles.headerWrapper}>
				<Image
					source={{
						uri:
							"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png",
					}}
					style={styles.imageLogo}
				/>
				<Feather name="inbox" size={27} color="black" />
			</View>
			<View style={styleWrapper.feedWrapper}>
				<ScrollView>
					{feedData.map((feed)=>{
						return (
							<View style={styleWrapper.itemWrapper}>
						<View style={styleWrapper.avtWrapper}>
							<Image
								source={feed.avatar}
								style={styleWrapper.avtImage}
								resizeMode="cover"
							/>
							<Text style={styleWrapper.posterName}>{feed.name}</Text>
						</View>
						<View style={styleWrapper.imageWrapper}>
							<Image
								source={feed.image}
								style={styleWrapper.imagePoster}
								resizeMode="cover"
							/>
						</View>
						<View style={styleWrapper.iconWrapper}>
							<Feather
								name="heart"
								size={28}
								color="black"
								onPress={() => alert("Liked")}
							/>
							<Feather
								name="message-square"
								size={28}
								color="black"
								style={styleWrapper.commentIcon}
							/>
							<Feather name="share" size={28} color="black" />
						</View>
						<View style={styleWrapper.iconWrapper}>
							<AntDesign name="heart" size={28} color="black" />
						<Text style={styleWrapper.countLikes}>{feed.likeCount} likes</Text>
						</View>
					</View>
					
					)
					})}
					
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: statusBarHeight,
	},
	//headerWrapper
	headerWrapper: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: "#f3f6fa",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 15,
		paddingHorizontal: 18,
	},
	imageLogo: {
		flex: 1,
		width: null,
		height: 60,
		resizeMode: "contain",
	},
});
const styleWrapper = StyleSheet.create({
	// feed wrapper
	feedWrapper: {
		flex: 10,
	},
	itemWrapper: {
		width: windowWidth,
	},
	avtWrapper: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 18,
		marginHorizontal: 20,
	},
	avtImage: {
		width: (windowWidth * 1) / 7,
		height: (windowWidth * 1) / 7,
		borderRadius: (windowWidth * 1) / 7 / 2,
	},
	posterName: {
		marginLeft: 12,
		fontSize: 20,
		fontWeight: "500",
	},
	imageWrapper: {
		height: 300,
	},
	imagePoster: {
		flex: 1,
		width: null,
		height: null,
	},
	iconWrapper: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 14,
		paddingHorizontal: 20,
		borderBottomWidth: 0.6,
	},
	commentIcon: {
		paddingHorizontal: 10,
	},
	countLikes: {
		fontSize: 18,
		fontWeight: "400",
		paddingHorizontal: 10,
	},
});
