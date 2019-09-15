import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const IndexScreen = () => {
	const { state, addBlogPost } = useContext(Context);

	return (
		<View style={styles.container}>
			<Text>RN Mobile Blog</Text>
			<Button title="Add Post" onPress={addBlogPost} />
			<FlatList
				data={state}
				keyExtractor={(blogPost) => blogPost.title}
				renderItem={({ item }) => {
					return <Text>{item.title}</Text>;
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default IndexScreen;
