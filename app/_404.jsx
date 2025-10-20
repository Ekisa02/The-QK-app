import { Text, View } from 'react-native';

export default function NotFound() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 18, fontWeight: '700' }}>404 — Page not found</Text>
      <Text style={{ marginTop: 8 }}>The route you tried does not exist.</Text>
    </View>
  );
}
