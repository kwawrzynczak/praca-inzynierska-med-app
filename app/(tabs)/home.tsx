/* eslint-disable react/no-unstable-nested-components */
import { useEffect, useState } from 'react';
import { Animated, FlatList, Pressable, ScrollView, View } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { AppointmentsList, AppointmentsListElement, MedicationList, MedicationListElement, Text } from '@components';
import { FontAwesome } from '@expo/vector-icons';
import { useAnimation } from '@hooks';
import { EmptyImage } from '@images/Empty';
import { useIsFocused } from '@react-navigation/native';
import api from '@services/api';
import { Appointment, Medication } from '@types';
import { Link } from 'expo-router';
import moment from 'moment';
import { twMerge } from 'tailwind-merge';

interface AppointmentsResponse {
  data: Appointment[];
}

interface MedicationResponse {
  data: Medication[];
}

const HomeScreen = () => {
  const today = moment();
  const [selectedDate, setSelectedDate] = useState(today);
  const { opacityValue, fadeIn, fadeOut } = useAnimation();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [medication, setMedication] = useState<Medication[]>([]);
  const filteredMedication = medication.filter(
    (med) => moment(med.attributes.datetime).format('DDMMYY') === selectedDate.format('DDMMYY'),
  );
  const filteredAppointments = appointments.filter(
    (appointment) => moment(appointment.attributes.datetime).format('DDMMYY') === selectedDate.format('DDMMYY'),
  );

  const isFocused = useIsFocused();

  useEffect(() => {
    const getAppointments = async () => {
      if (!isFocused) return;
      try {
        const { data } = await api.get<AppointmentsResponse>('/appointments?sort=datetime:asc');
        setAppointments(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    const getMedication = async () => {
      if (!isFocused) return;
      try {
        const { data } = await api.get<MedicationResponse>('/medications');
        setMedication(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    void getMedication();
    void getAppointments();
  }, [isFocused]);

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
        <Text variant="title" className="mb-5 text-center text-lg uppercase tracking-tighter">
          {selectedDate.format('DDMMYY') === moment().format('DDMMYY')
            ? `dzisiaj, ${selectedDate.format('LL')}`
            : selectedDate.format('dddd, LL')}
        </Text>

        {filteredAppointments.length === 0 && filteredMedication.length === 0 && (
          <View className="flex h-64 items-center justify-center">
            <Text variant="subtitle">
              Brak planów na {selectedDate.format('DDMMYY') !== moment().format('DDMMYY') ? 'ten dzień' : 'dziś'}
            </Text>
          </View>
        )}

        <ScrollView className="self-center">
          {filteredMedication.map((med) => (
            <MedicationListElement
              key={med.id}
              id={med.id}
              name={med.attributes.name}
              meal={med.attributes.meal}
              time={med.attributes.time}
              dosage={10}
            />
          ))}

          {filteredAppointments.map((app) => (
            <AppointmentsListElement
              key={app.id}
              id={app.id}
              title={app.attributes.title}
              datetime={app.attributes.datetime}
              doctor={app.attributes.doctor}
              location={app.attributes.location}
              street={app.attributes.street}
              room={app.attributes.room}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
