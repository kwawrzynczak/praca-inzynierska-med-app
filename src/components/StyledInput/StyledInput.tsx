/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import { TextInput, type TextInputProps } from 'react-native';
import { StyledText } from '@components/StyledText';

interface StyledInputProps extends TextInputProps {
  className?: string;
  title?: string;
}

export const StyledInput = ({ className, title = '', ...rest }: StyledInputProps) => {
  return (
    <>
      <StyledText className="mb-1 ml-2">{title}</StyledText>
      <TextInput
        className={clsx(
          'mb-4 rounded-lg border border-primary bg-white px-4 py-3 shadow-sm focus:border-accent',
          title === '' && 'hidden',
        )}
        {...rest}
      />
    </>
  );
};
