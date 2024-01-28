import { FlatList } from 'react-native';
import { MedicationListElement } from '@components/MedicationListElement';
import { Medication } from '@types';

interface MedicationListProps {
  medication: Medication[];
}
export const MedicationList = ({ medication }: MedicationListProps) => {
  return (
    <FlatList
      className="self-center"
      data={medication}
      renderItem={({ item }) => (
        <MedicationListElement
          id={item.id}
          name={item.attributes.name}
          time={item.attributes.time}
          meal={item.attributes.meal}
          dosage={item.attributes.dosage}
        />
      )}
    />
  );
};
