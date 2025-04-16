import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.category}>Category: {product.category}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.rating}>⭐ {product.rating.rate} ({product.rating.count} reviews)</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  image: { width: '100%', height: 300, resizeMode: 'contain' },
  title: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  category: { fontSize: 14, color: 'gray' },
  price: { fontSize: 18, color: '#228B22', marginVertical: 5 },
  description: { fontSize: 16, marginTop: 10 },
  rating: { fontSize: 16, marginTop: 10, color: '#f39c12' }
});

export default ProductDetailScreen;
