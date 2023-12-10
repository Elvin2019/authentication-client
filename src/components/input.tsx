import { FieldInputProps } from "formik";

const InputField = ({
  type,
  placeholder,
  field,
  formik,
}: {
  type: string;
  placeholder: string;
  field: FieldInputProps<any>;
  formik: any;
}) => {
  const { name } = field;
  return (
    <div className="mt-4">
      <input
        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
        type={type}
        placeholder={placeholder}
        {...field}
      />
      {formik.touched[name] && formik.errors[name] && (
        <div className="text-red-500 font-sans text-xs mt-1 ml-1 text-left">
          {formik.errors[name]}
        </div>
      )}
    </div>
  );
};

export default InputField;