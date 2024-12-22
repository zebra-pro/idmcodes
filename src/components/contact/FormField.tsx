import React from 'react'

type FormFieldProps = {
  label: string
  id: string
  type?: string
  required?: boolean
  placeholder?: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  multiline?: boolean
  rows?: number
}

export default function FormField({
  label,
  id,
  type = 'text',
  required = false,
  placeholder,
  onChange,
  multiline = false,
  rows = 4,
}: FormFieldProps) {
  const baseClassName =
    'mt-1 block w-full rounded-lg border-gray-200 bg-gray-50 p-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:bg-white transition-colors duration-200'

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-blue-600">*</span>}
      </label>
      {multiline ? (
        <textarea
          id={id}
          required={required}
          rows={rows}
          className={baseClassName}
          placeholder={placeholder}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          id={id}
          required={required}
          className={baseClassName}
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
    </div>
  )
}
