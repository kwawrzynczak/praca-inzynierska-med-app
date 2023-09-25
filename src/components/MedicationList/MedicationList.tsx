import { useState } from 'react';
import { SectionList, Text, View } from 'react-native';
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
      data: medication,
    },
    {
      title: 'południe',
      icon: <FontAwesome5 solid name="sun" color="#809fff" size={20} />,
      data: [],
    },
    {
      title: 'wieczór',
      icon: <FontAwesome5 name="cloud-moon" color="#809fff" size={20} />,
      data: [],
    },
    {
      title: 'noc',
      icon: <FontAwesome5 solid name="moon" color="#809fff" size={20} />,
      data: medication,
    },
  ];
  return (
    <SectionList
      contentContainerStyle={{
        alignItems: 'center',
        marginTop: '4%',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
      }}
      sections={medicationSections}
      keyExtractor={(item, index) => `${item.attributes.name}${index}`}
      renderItem={({ item }) => (
        <View className="w-[360px] bg-white p-2">
          <Text>{item.attributes.name}</Text>
          {/* <View className="h-[1px] bg-accent" /> */}
        </View>
      )}
      stickySectionHeadersEnabled={false}
      renderSectionHeader={({ section: { title, icon } }) => (
        <View className="w-[360px] flex-row items-center rounded-t-2xl bg-white p-3 shadow">
          {icon}
          <Text className="ml-2 font-bold text-base text-accent">{title}</Text>
        </View>
      )}
      renderSectionFooter={() => <View className="mb-4 w-[360px] rounded-b-2xl bg-white p-3" />}
    />
  );
};
