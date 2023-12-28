import React from "react";
import { Text } from "src/theme/texts/Text";
import { View, type ViewProps } from "src/theme/views/View";
import FloatTextInput, { type FloatTextInputProps } from "./FloatTextInput";

export type FormikInputProps = FloatTextInputProps & {
  form: any;
  id: string;
  containerStyle?: ViewProps;
};

export default function FormikInput({
  form,
  id,
  containerStyle,
  ...rest
}: FormikInputProps) {
  const handleChange = (text: String) => {
    form.setFieldTouched(id, true);
    form.setFieldValue(id, text);
  };

  const haserror = form.touched[id] && form.errors[id];

  return (
    <View style={containerStyle}>
      <FloatTextInput
        id={id}
        value={form.values[id]}
        onBlur={() => form.setFieldTouched(id, true)}
        onChangeText={handleChange}
        hasError={haserror}
        {...rest}
      />
      {haserror && (
        <Text color="error" size="xs" marginLeft={5}>
          {form.errors[id]}
        </Text>
      )}
    </View>
  );
}
