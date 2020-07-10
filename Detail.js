import { StatusBar } from "expo-status-bar";
import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	ScrollView,
	Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { preventAutoHide } from "expo/build/launch/SplashScreen";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Detail() {
	return (
		<View style={styles.container}>
			<View style={styles.imageWrapper}>
				<Image
					style={styles.image}
					source={require("./assets/effel.jpg")}
				/>
			</View>
			<View style={styles.navbar}>
				<TouchableOpacity style={styles.arrowLeft}>
					<AntDesign name="arrowleft" size={30} color="black" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.dots}>
					<Entypo name="dots-three-vertical" size={30} color="black" />
				</TouchableOpacity>
			</View>
			<View style={styles.textContent}>
				<View style={styles.contentTitle}>
					<View>
						<Text
							style={{
								fontSize: 40,
								fontWeight: "bold",
								color: "#13203d",
							}}
						>
							Eiffel tower
						</Text>
						<View style={styles.titleMap}>
							<FontAwesome5
								name="map-marker-alt"
								size={20}
								color="#9ca7d1"
							/>
							<Text
								style={{
									fontSize: 18,
									color: "#9ca7d1",
									marginLeft: 10,
								}}
							>
								Paris, Franch
							</Text>
						</View>
					</View>
					<Entypo name="export" size={75} color="#3c72ff" />
				</View>
				<View>
					<Text
						style={{ color: "#13203d", fontSize: 16, marginBottom: 25 }}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</Text>
				</View>
				<View style={styles.tagName}>
					<Text style={(styles.photography, styles.tagDetail)}>
						#photograhpy
					</Text>
					<Text style={styles.tagDetail}>#sea</Text>
				</View>
				<View style={styles.iconFooter}>
					<View style={styles.iconLeft}>
						<FontAwesome name="heart" size={25} color="#9ca7d1" style={styles.heart} />
						<MaterialIcons name="mode-comment"size={25} color="#9ca7d1"/>
					</View>
					<FontAwesome name="bookmark" size={25} color="#9ca7d1" />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	imageWrapper: {
		position: "relative",
	},
	image: {
		width: windowWidth,
		height: (windowHeight * 1) / 2,
		borderRadius: 16,
	},
	navbar: {
		position: "absolute",
		flexDirection: "row",
		marginVertical: 40,
		marginHorizontal: 20,
	},
	arrowLeft: {
		marginRight: windowWidth - 100,
	},
	textContent: {
		paddingHorizontal: 30,
	},
	contentTitle: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 30,
		alignItems: "center",
	},
	titleMap: {
		flexDirection: "row",
		justifyContent: "flex-start",
		marginTop: 8,
	},

	tagName: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	photography: {
		marginRight: 25,
	},
	tagDetail: {
		fontSize: 16,
		color: "#9ca7d1",
		paddingHorizontal: 15,
		paddingVertical: 6,
		marginRight: 10,
		backgroundColor: "#e6e9f3",
		borderRadius: 18,
    },
    iconFooter:{
        flexDirection: "row",
        alignItems: "center",
        marginTop:60
    },
    iconLeft:{
        flexDirection: "row",
        alignItems: "center",
        flex:1,
    },
    heart :{
        paddingRight:20
    }
});
