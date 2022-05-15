/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Image, Pressable, } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <SafeAreaProvider>

      <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>


        <RootNavigator />


      </NavigationContainer>
    </SafeAreaProvider>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{
        headerShown: false
        // headerLeft: () => (
        //   <Pressable style={{ backgroundColor: '#fff' }} onPress={() => { }}>
        //     <Image source={{ uri: 'https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png' }} style={{ width: 30, height: 30, borderRadius: 500, marginLeft: 10 }} />
        //   </Pressable>
        // ),
        // headerTitle: () => <FontAwesome name="twitter" size={30} color="#1D9BF0" />,
        // headerRight: () => (
        //   <Pressable
        //     onPress={() => { }}
        //     style={({ pressed }) => ({
        //       opacity: pressed ? 0.5 : 1,
        //       marginRight: 10
        //     })}>
        //     <MaterialCommunityIcons name="chart-timeline-variant-shimmer" size={24} color="black" />
        //   </Pressable>
        // ),
      }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"

      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarShowLabel: false
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          headerShown: false
          // title: 'Tab Ones',
          // tabBarIcon: ({ color }) => <Feather name="home" size={24} color="black" />,
          // headerTransparent: true,
          // headerTitleAlign: 'center',
          // headerLeft: () => (
          //   <Pressable style={{ backgroundColor: '#fff' }} onPress={() => { }}>
          //     <Image source={{ uri: 'https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png' }} style={{ width: 30, height: 30, borderRadius: 500, marginLeft: 10 }} />
          //   </Pressable>
          // ),
          // headerTitle: () => <FontAwesome name="twitter" size={30} color="#1D9BF0" />,
          // headerRight: () => (
          //   <Pressable
          //     onPress={() => navigation.navigate('Modal')}
          //     style={({ pressed }) => ({
          //       opacity: pressed ? 0.5 : 1,
          //       marginRight: 10
          //     })}>
          //     <MaterialCommunityIcons name="chart-timeline-variant-shimmer" size={24} color="black" />
          //   </Pressable>
          // ),
        })}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <Feather name="search" size={24} color="black" />,
        }}
      />
      <BottomTab.Screen
        name="Spaces"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <FontAwesome name="bullseye" size={24} color="black" />,
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <Ionicons name="notifications-outline" size={24} color="black" />
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="email-outline" size={24} color="black" />
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
