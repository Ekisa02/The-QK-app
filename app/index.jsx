import { Redirect } from 'expo-router';

export default function Index() {
  // Redirect root to the Auth stack
  return <Redirect href="/Auth" />;
}
