/* eslint-disable react/jsx-props-no-spreading */
import { TextInput as ReactNativeInput, type TextInputProps } from 'react-native';
import { Text } from '@components/Text';
import { twMerge } from 'tailwind-merge';

interface StyledInputProps extends TextInputProps {
  className?: string;
  title?: string;
}

export const Input = ({ className, title, ...rest }: StyledInputProps) => {
  return (
    <>
      {!!title && <Text className="mb-1 font-medium">{title}</Text>}
      <ReactNativeInput
        className={twMerge(
          'mb-4 h-12 w-72 rounded-lg border border-white bg-white px-4 py-3 focus:border-accent',
          title === '' && 'hidden',
        )}
        {...rest}
      />
    </>
  );
};
