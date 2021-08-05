import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screen/Home';
import Home1 from '../Screen/Home1';
import AddLocation from '../Screen/AddLocation';
export default function () {
    const RootStack = createStackNavigator();
    const HomeStack = createStackNavigator();
    const Drawer = createDrawerNavigator();

    const Tabs = createBottomTabNavigator();

    const DrawerScreen = () => (
        <Drawer.Navigator initialRouteName="Template" headerMode="none" >
            <Drawer.Screen name="Template" component={TabsScreen} />
            {/* <Drawer.Screen name="Template1" component={TabsScreen} /> */}
            {/* <Drawer.Screen name="Profile" component={ProfileStackScreen} /> */}
        </Drawer.Navigator>
    );

    const TabsScreen = () => (
        <Tabs.Navigator initialRouteName="Template" headerMode="none" >
            <Tabs.Screen name="Template" component={HomeStackScreen} />
            {/* <Tabs.Screen name="Search" component={SearchStackScreen} /> */}
        </Tabs.Navigator>
    );


    const HomeStackScreen = () => (
        <HomeStack.Navigator initialRouteName="Home" headerMode="none">
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="Home1" component={Home1} />
            <HomeStack.Screen name="AddLocation" component={AddLocation} />
        </HomeStack.Navigator>
    );

    // const SearchStackScreen = () => (
    //     <SearchStack.Navigator initialRouteName="Template" headerMode="none">
    //         <SearchStack.Screen name="Search" component={Template} />
    //         <SearchStack.Screen name="Search2" component={Template} />
    //     </SearchStack.Navigator>
    // );
    return (
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen
                name="App"
                component={DrawerScreen}
                options={{
                    animationEnabled: true,
                }}
            >
            </RootStack.Screen>
        </RootStack.Navigator>
    )
}