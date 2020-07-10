import { StatusBar } from "expo-status-bar";
import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	ScrollView, Dimensions
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { preventAutoHide } from "expo/build/launch/SplashScreen";

import Constants from "expo-constants";
const statusBarHeight = Constants.statusBarHeight;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const POLO_BLUE_COLOR = "rgb(51,60,87)";
const FOLLOW_COLOR = "rgb(71,113,246)";
const SEND_MESSAGE_COLOR = "rgb(120,213,250)";
const imgData = [
	{ id: 1, imgSource: require("./assets/a1.jpg") },
	{ id: 2, imgSource: require("./assets/a2.jpg") },
	{ id: 3, imgSource: require("./assets/a3.jpg") },
	{ id: 4, imgSource: require("./assets/a4.webp") },
	{ id: 5, imgSource: require("./assets/a4.webp") },
	{ id: 6, imgSource: require("./assets/a3.jpg") },
	{ id: 7, imgSource: require("./assets/a2.jpg") },
	{ id: 8, imgSource: require("./assets/a3.jpg") },
];
const centerImgData = Math.floor(imgData.length / 2);

export default function Wrapper() {
	return (
		<View style={styles.container}>
			<View style={styles.navbar}>
				<TouchableOpacity>
					<AntDesign name="arrowleft" size={30} color="black" />
				</TouchableOpacity>
				<TouchableOpacity>
					<Entypo name="dots-three-vertical" size={30} color="black" />
				</TouchableOpacity>
			</View>

			<View style={styles.header}>
				<View style={styles.imageWrapper}>
					<Image
						source={require("./assets/avt.jpg")}
						style={styles.imageUser}
					/>
				</View>
				<View style={styles.userInfo}>
					<Text style={styles.nameText}>Nguyen Chinh</Text>
					<Text style={styles.jobText}>Developer</Text>
					<View style={styles.buttonWrapper}>
						<TouchableOpacity style={styles.followButton}>
							<Text style={styles.followText}>Follow</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.sendMessageButton}>
							<FontAwesome name="send-o" size={18} color="white" />
						</TouchableOpacity>
					</View>
				</View>
			</View>

			<View style={styles.countLikeGroup}>
				<View style={styles.countGroup}>
					<Text style={styles.countText}>210</Text>
					<Text style={styles.countLable}>Photos</Text>
				</View>
				<View style={styles.countGroup}>
					<Text style={styles.countText}>15k</Text>
					<Text style={styles.countLable}>Follower</Text>
				</View>
				<View style={styles.countGroup}>
					<Text style={styles.countText}>605</Text>
					<Text style={styles.countLable}>Following</Text>
				</View>
			</View>

			<View style={{ flex: 1 }}>
				<ScrollView contentContainerStyle={styles.imageGroup}>
					<View style={styles.column1}>
						{imgData.slice(0, centerImgData).map((item) => {
							return (
								<Image
									source={item.imgSource}
									style={styles.image}
									key={item.id}
								/>
							);
						})}
					</View>
					<View>
						{imgData.slice(centerImgData).map((item) => {
							return (
								<Image
									source={item.imgSource}
									style={styles.image}
									key={item.id}
								/>
							);
						})}
					</View>
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: statusBarHeight,
		flex: 1,
		backgroundColor: "#fff",
	},
	navbar: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 30,
		marginHorizontal: 20,
	},
	header: {
        height:windowWidth*0.30,
        flexDirection: "row",
        alignItems:'center',
        marginHorizontal: windowWidth*0.1
	},
	countLikeGroup: {
		marginVertical: 55,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},

	imageUser: {
		width: windowWidth*0.30,
		height: windowWidth*0.30,
        borderRadius:  (windowWidth*0.30)/2 ,
      
	},
	userInfo: {
	    flex: 4,
        flexDirection: "column",
	},
	followButton: {
		backgroundColor: FOLLOW_COLOR ,
		flex:4,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 25,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.5,
		shadowRadius: 2.62,

		elevation: 16,
	},
	followText: {
		color: "white",
		fontSize: 15,
		fontWeight: "700",
	},
	sendMessageButton: {
		backgroundColor: SEND_MESSAGE_COLOR,
		flex:2,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 20,
		marginLeft: 5,
	},
	buttonWrapper: {
		marginTop: 10,
        flexDirection: "row",
        flex:2.5,
	},
	imageWrapper: {
        flex:2,
		alignItems: "center",
		justifyContent: "center",
		paddingRight:25
	},
	nameText: {
		fontSize: 20,
		fontWeight: "bold",
        color: "black",
        flex:2,
       
	},
	jobText: {
		fontSize: 18,
		fontWeight: "400",
        color: "gray",
        flex:2,
	},
	countGroup: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	countText: {
		fontSize: 24,
		fontWeight: "bold",
	},
	countLable: {
		fontSize: 18,
		fontWeight: "400",
		color: "gray",
	},
	imageGroup: {
		flexDirection: "row",
		justifyContent: "center",
	},
	image: {
		width: windowWidth*0.45,
		height: windowHeight*0.25,
		borderRadius: 12,
		resizeMode: "cover",
		marginBottom: 10,
	},
	column1: {
		marginRight: 10,
	},
});

