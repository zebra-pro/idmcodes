import React from 'react'
import { Upload } from 'lucide-react'

type FileUploadProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  fileName?: string
}

export default function FileUpload({ onChange, fileName }: FileUploadProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Attachment
      </label>
      <div className="mt-1 flex items-center">
        <label className="relative cursor-pointer rounded-lg bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 transition-colors duration-200">
          <span className="inline-flex items-center">
            <Upload className="w-4 h-4 mr-2" />
            Choose file
          </span>
          <input
            type="file"
            className="sr-only"
            accept=".pdf,.docx,.png,.jpg"
            onChange={onChange}
          />
        </label>
        {fileName && (
          <span className="ml-3 text-sm text-gray-600">{fileName}</span>
        )}
      </div>
      <p className="mt-1 text-sm text-gray-500">
        Attach relevant files (optional). Max 10MB.
      </p>
    </div>
  )
}
