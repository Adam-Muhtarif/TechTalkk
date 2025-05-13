'use client'

import { useEffect } from 'react'
import { formatSlug } from './formatSlug'
import { TextFieldClientProps } from 'payload'
import { useField, TextInput, FieldLabel, useFormFields } from '@payloadcms/ui'

type SlugComponentProps = {
  fieldToUse: string
} & TextFieldClientProps

export const SlugComponent: React.FC<SlugComponentProps> = ({ field, fieldToUse, path }) => {
  const { label } = field

  const { value, setValue } = useField<string>({ path: path || field.name })

  // The value of the field we're listening to for the slug
  const targetFieldValue = useFormFields(([fields]) => {
    return fields[fieldToUse]?.value as string
  })

  useEffect(() => {
    if (targetFieldValue) {
      const formattedSlug = formatSlug(targetFieldValue)

      if (value !== formattedSlug) setValue(formattedSlug)
    } else {
      if (value !== '') setValue('')
    }
  }, [targetFieldValue, setValue, value])

  return (
    <div className="field-type slug-field-component">
      <div className="label-wrapper">
        <FieldLabel htmlFor={`field-${path}`} label={label} />
      </div>

      <TextInput value={value} onChange={setValue} path={path || field.name} readOnly={true} />
    </div>
  )
}
