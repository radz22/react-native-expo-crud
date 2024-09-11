import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
      <Stack.Screen name="details/[id]" options={{ headerShown: false }} />
      <Stack.Screen
        name="details/create-user"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
