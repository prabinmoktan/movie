import React from "react";
import { Controller, Control, FieldValues } from "react-hook-form";
import TextField from "@mui/material/TextField";

// Define the props interface for FormTextField
interface FormTextFieldProps {
  name: string;
  control: Control<FieldValues>;
  label: string;
  type?: string;
  size?: "small" | "medium";
  error?: boolean;
  helperText?: string;
  defaultValue?: string;
  rules?: any;
}

const FormTextField: React.FC<FormTextFieldProps> = ({
  name,
  control,
  label,
  type = "text",
  size = "medium",
  error = false,
  helperText = "",
  defaultValue = "",
  rules,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState: { error: fieldError } }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          size={size}
          error={!!fieldError || error}
          helperText={fieldError ? String(fieldError.message) : helperText} // Ensure it's a string
          fullWidth
        />
      )}
    />
  );
};

export default FormTextField;
