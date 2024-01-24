/* eslint-disable react/no-unstable-nested-components */
import { useState } from 'react';
import { Animated, Pressable, View } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { Text } from '@components';
import { FontAwesome } from '@expo/vector-icons';
import { useAnimation } from '@hooks';
import { Link } from 'expo-router';
import moment from 'moment';
import { twMerge } from 'tailwind-merge';

const HomeScreen = () => {
  const today = moment();
  const [selectedDate, setSelectedDate] = useState(today);
  const { opacityValue, fadeIn, fadeOut } = useAnimation();

  return (
    <View className="w-full flex-1 gap-y-4 bg-background">
      <View className="container rounded-b-3xl bg-white pb-3 pt-12 shadow">
        <View className="mx-4 flex-row justify-center">
          {/* Calendar container */}
          <View className="container">
            <CalendarStrip
              scrollable
              daySelectionAnimation={{ type: 'background', duration: 200, highlightColor: '#809fff' }}
              calendarHeaderStyle={{ color: '#666', fontFamily: 'NunitoSans_700Bold' }}
              dateNameStyle={{ fontFamily: 'NunitoSans_600SemiBold', fontSize: 10 }}
              dateNumberStyle={{ fontFamily: 'NunitoSans_700Bold', fontSize: 16 }}
              highlightDateNameStyle={{ color: 'white', fontFamily: 'NunitoSans_600SemiBold', fontSize: 10 }}
              highlightDateNumberStyle={{ color: 'white', fontFamily: 'NunitoSans_700Bold', fontSize: 16 }}
              style={{ height: 80 }}
              iconLeft={null}
              iconRight={null}
              onDateSelected={(date) => {
                setSelectedDate(date);
              }}
              startingDate={moment().subtract(3, 'days')}
              selectedDate={selectedDate}
            />
          </View>
          {/* Calendar container */}
        </View>
      </View>
      {/* Current caretaker info */}
      <Link href="/more/patients" asChild>
        <Pressable
          onPressIn={fadeIn}
          onPressOut={fadeOut}
          className={twMerge(
            'mx-4 flex-row items-center justify-between rounded-full bg-white p-3 pr-4 active:scale-[.98] shadow',
          )}
        >
          <View className="h-14 w-14 rounded-full bg-red" />
          <View className="flex items-center justify-center">
            <Text variant="subtitle">Sprawdź, jak ma się Marek</Text>
            <Text className="text-gray-500">Naciśnij, aby zmienić podopiecznego</Text>
          </View>
          <FontAwesome name="angle-right" size={24} color="#666" />
          <Animated.View
            className={twMerge('absolute left-0 top-0 w-[360px] h-20 rounded-full')}
            style={{ opacity: opacityValue }}
          />
        </Pressable>
      </Link>
      {/* Current caretaker info */}
      <View>
        <Text variant="title" className="text-center text-lg uppercase tracking-tighter">
          {selectedDate.format('DDMMYY') === moment().format('DDMMYY')
            ? `dzisiaj, ${selectedDate.format('LL')}`
            : selectedDate.format('dddd, LL')}
        </Text>

        <View className="flex h-44 items-center justify-center">
          <Text>
            Brak planów na {selectedDate.format('DDMMYY') !== moment().format('DDMMYY') ? 'ten dzień' : 'dziś'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
