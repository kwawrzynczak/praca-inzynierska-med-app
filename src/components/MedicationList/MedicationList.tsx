import { useState } from 'react';
import { SectionList, Text, View } from 'react-native';
import { MedicationListElement } from '@components/MedicationListElement';
import { FontAwesome5 } from '@expo/vector-icons';
import { Medication } from '@types';

interface MedicationListProps {
  medication: Medication[];
}
export const MedicationList = ({ medication }: MedicationListProps) => {
  const medicationSections = [
    {
      title: 'poranek',
      icon: <FontAwesome5 name="cloud-sun" color="#809fff" size={20} />,
      data: medication.filter((item) => item.attributes.time.includes('09:00')),
    },
    {
      title: 'południe',
      icon: <FontAwesome5 solid name="sun" color="#809fff" size={20} />,
      data: medication.filter((item) => item.attributes.time.includes('09:00')),
    },
    {
      title: 'wieczór',
      icon: <FontAwesome5 name="cloud-moon" color="#809fff" size={20} />,
      data: medication.filter((item) => item.attributes.time.includes('09:00')),
    },
    {
      title: 'noc',
      icon: <FontAwesome5 solid name="moon" color="#809fff" size={20} />,
      data: medication.filter((item) => item.attributes.time.includes('09:00')),
    },
  ];
  return (
    <SectionList
      contentContainerStyle={{
        alignItems: 'center',
        marginTop: '4%',
      }}
      sections={medicationSections}
      stickySectionHeadersEnabled={false}
      renderSectionHeader={({ section: { title, icon } }) => (
        <View className="w-[360px] flex-row items-center rounded-t-2xl bg-white p-3">
          {icon}
          <Text className="ml-2 font-bold text-base text-accent">{title}</Text>
        </View>
      )}
      keyExtractor={(item, index) => `${item.attributes.name}${index}`}
      renderItem={({ item }) => (
        <MedicationListElement
          id={item.id}
          name={item.attributes.name}
          time={item.attributes.time}
          meal={item.attributes.meal}
        />
      )}
      renderSectionFooter={() => <View className="mb-4 w-[360px] rounded-b-2xl bg-white p-3" />}
    />
  );
};
