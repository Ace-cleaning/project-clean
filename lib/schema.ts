import { z } from 'zod'

export const FormDataSchema = z.object({
  phone: z.string().nonempty('Phone Number is required.'),
  name: z.string().nonempty('Name is required.'),
  message: z
    .string()
    .nonempty('Message is required.')
    .min(6, { message: 'Message must be at least 6 characters.' })
})

export const ContactFormSchema = z.object({
  phone: z.string().nonempty('Phone Number is required.').regex(/^(?:\+1|1)?(?:[-. ]?\(?[2-9][0-8][0-9]\)?[-. ]?[2-9][0-9]{2}[-. ]?[0-9]{4})$/, 'Please enter a valid phone number.'),
  name: z.string().nonempty('Name is required.'),
  email: z.string().nonempty('Email is required.').email('Invalid email.'),
  message: z
    .string()
    .nonempty('Message is required.')
    .min(6, { message: 'Message must be at least 6 characters.' })
})
