/* eslint-disable react/no-unstable-nested-components */
import { useEffect, useState } from 'react';
import { TextInput, View } from 'react-native';
import { Button, FAB, Text } from '@components';
import api from '@services/api';
import { type Appointment } from '@types';
import { useLocalSearchParams, useRouter } from 'expo-router';

interface AppointmentResponse {
  data: Appointment;
}

interface UpdateAppointment {
  data: {
    title: string;
    doctor: string;
    datetime: Date;
    notes?: string;
    location: string;
    street: string;
    room?: string;
  };
}

const MedicationScreen = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  return <Text>{id}</Text>;
};
//   const [appointment, setAppointment] = useState<Appointment>();
//   const [editable, setEditable] = useState(false);

//   useEffect(() => {
//     const getAppointmentById = async () => {
//       if (!id) {
//         console.error('no id provided');
//       } else {
//         try {
//           const { data } = await api.get<AppointmentResponse>(`/appointments/${id}`);
//           setAppointment(data.data);
//         } catch (error) {
//           console.error(error);
//         }
//       }
//     };

//     void getAppointmentById();
//   }, [id]);

//   const updateAppointmentData = async () => {
//     if (!id) {
//       console.error('no id provided');
//     } else {
//       try {
//         const { data } = await api.put<UpdateAppointment>(`/appointments/${id}`, {
//           data: {
//             appointment: appointment?.attributes.title,
//             doctor: appointment?.attributes.doctor,
//             datetime: appointment?.attributes.datetime,
//             notes: appointment?.attributes.notes,
//             location: appointment?.attributes.location,
//             street: appointment?.attributes.street,
//             room: appointment?.attributes.room,
//           },
//         });
//         return data;
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     return null;
//   };

//   const deleteAppointment = async () => {
//     if (!id) {
//       console.error('no id provided');
//     } else {
//       try {
//         await api.delete(`/appointments/${id}`);
//         router.back();
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   const handleTextChange = <T extends keyof Appointment['attributes']>(key: T, value: Appointment['attributes'][T]) => {
//     setAppointment((prev) => {
//       if (!prev) return prev;
//       return { ...prev, attributes: { ...prev?.attributes, [key]: value } };
//     });
//   };

//   if (!appointment) {
//     return (
//       <View>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <View className="flex-1 bg-background p-4">
//       <TextInput
//         className="font-bold text-2xl text-accent focus:border-accent"
//         editable={editable}
//         value={appointment?.attributes.title}
//         onChangeText={(value) => handleTextChange('title', value)}
//       />

//       <TextInput
//         className="font-normal text-lg text-secondary focus:border-accent"
//         editable={editable}
//         value={appointment?.attributes.doctor}
//         onChangeText={(value) => handleTextChange('doctor', value)}
//       />
//       <TextInput
//         className="font-normal text-lg text-secondary focus:border-accent"
//         editable={editable}
//         value={appointment?.attributes.datetime.toString()}
//         onChangeText={(value) => handleTextChange('datetime', new Date(value))}
//       />
//       <TextInput
//         className="font-normal text-lg text-secondary focus:border-accent"
//         editable={editable}
//         value={appointment?.attributes.location}
//         onChangeText={(value) => handleTextChange('location', value)}
//       />
//       <TextInput
//         className="font-normal text-lg text-secondary focus:border-accent"
//         editable={editable}
//         value={appointment?.attributes.street}
//         onChangeText={(value) => handleTextChange('street', value)}
//       />
//       <TextInput
//         className="font-normal text-lg text-secondary focus:border-accent"
//         editable={editable}
//         value={appointment?.attributes.room}
//         onChangeText={(value) => handleTextChange('room', value)}
//       />

//       <Text className="mb-2 mt-8 text-base">Notatki do wizyty: </Text>
//       <TextInput
//         className="rounded-lg border border-white bg-white px-4 py-3 focus:border-accent"
//         multiline
//         placeholder="Brak notatek"
//         editable={editable}
//         value={appointment?.attributes.notes}
//         onChangeText={(value) => handleTextChange('notes', value)}
//       />

//       <View className="absolute right-4 top-4 flex-row gap-4">
//         {!editable && <FAB type="edit" onPress={() => setEditable(true)} />}
//         <FAB
//           type="delete"
//           onPress={() => {
//             void deleteAppointment();
//           }}
//         />
//       </View>

//       {editable && (
//         <Button
//           className="mt-4"
//           onPress={() => {
//             setEditable(false);
//             void updateAppointmentData();
//           }}
//         >
//           Zapisz zmiany
//         </Button>
//       )}
//     </View>
//   );
// };

export default MedicationScreen;
