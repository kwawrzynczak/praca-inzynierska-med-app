import { SectionList, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const DATA = [
  {
    title: 'poranek',
    icon: <FontAwesome5 name="cloud-sun" color="#00008B" size={20} />,
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'południe',
    icon: <FontAwesome5 solid name="sun" color="#00008B" size={20} />,
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'wieczór',
    icon: <FontAwesome5 name="cloud-moon" color="#00008B" size={20} />,
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'noc',
    icon: <FontAwesome5 solid name="moon" color="#00008B" size={20} />,
    data: ['Water', 'Coke', 'Beer'],
  },
];

export const MedicationList = () => {
  return (
    <SectionList
      contentContainerStyle={{
        alignItems: 'center',
        marginTop: '4%',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
      }}
      sections={DATA}
      keyExtractor={(item, index) => `${item}${index}`}
      renderItem={({ item }) => (
        <View className="w-[360px] bg-white p-2">
          <Text>{item}</Text>
          <View className="h-[1px] bg-accent" />
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
