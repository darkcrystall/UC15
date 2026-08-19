import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import HomeStack from "./HomeStack";
import FavoritesStack from "./FavoritesStack";
import Profile from "../screens/Profile";
import { Show } from "../components/Card";

const Tab = createBottomTabNavigator();

interface TabNavigatorProps {
  favorites: Show[];
  toggleFavorite: (show: Show) => void;
}

const TabNavigator = ({
  favorites,
  toggleFavorite,
}: TabNavigatorProps) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        }}
      >
        {(props) => (
          <HomeStack
            {...props}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Favorites"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="heart-outline"
              color={color}
              size={size}
            />
          ),
        }}
      >
        {(props) => (
          <FavoritesStack
            {...props}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="person-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;