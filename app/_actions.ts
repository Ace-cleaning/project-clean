'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { ContactFormSchema, FormDataSchema } from '@/lib/schema'
import ContactFormEmail from '@/emails/contact-form-email'
import MagicLinkEmail from '@/emails/magic-link-email'

type Inputs = z.infer<typeof FormDataSchema>

// export async function addEntry(data: Inputs) {
//   const result = FormDataSchema.safeParse(data)

//   if (result.success) {
//     return { success: true, data: result.data }
//   }

//   if (result.error) {
//     return { success: false, error: result.error.format() }
//   }
// }

export async function addEntry(data: Inputs) {
  console.log('addEntry - Received data:', data);

  const result = FormDataSchema.safeParse(data);
  console.log('addEntry - Schema validation result:', result);

  if (result.success) {
    console.log('addEntry - Validation success:', result.data);
    return { success: true, data: result.data }
  }

  if (result.error) {
    console.error('addEntry - Validation error:', result.error.format());
    return { success: false, error: result.error.format() }
  }
}



type ContactFormInputs = z.infer<typeof ContactFormSchema>
const resend = new Resend(process.env.RESEND_API_KEY)

// export async function sendEmail(data: ContactFormInputs) {
//   const result = ContactFormSchema.safeParse(data)

//   if (result.success) {
//     const { nickname, name, email, message } = result.data
//     try {
//       const data = await resend.emails.send({
//         from: 'Kim <onboarding@luxfits.com>',
//         to: ['delivered@luxfits.com'],
//         cc: ['acecleaning.ny@gmail.com'],
//         subject: 'Contact form submission',
//         text: `NickName: ${nickname}\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
//         react: ContactFormEmail({ nickname, name, email, message })
//       })
//       return { success: true, data }
//     } catch (error) {
//       return { success: false, error }
//     }
//   }

//   if (result.error) {
//     return { success: false, error: result.error.format() }
//   }
// }
export async function sendEmail(data: ContactFormInputs) {
  console.log('sendEmail - Received data:', data);

  const result = ContactFormSchema.safeParse(data);
  console.log('sendEmail - Schema validation result:', result);

  if (result.success) {
    const { phone, name, email, message } = result.data;
    console.log('sendEmail - Prepared email data:', { phone, name, email, message }); 

    try {
      const responseData = await resend.emails.send({
        from: 'Kim <onboarding@luxfits.com>',
        to: ['delivered@luxfits.com'],
        cc: ['acecleaning.ny@gmail.com'],
        subject: 'Contact form submission',
        text: `NickName: ${phone}\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
        react: ContactFormEmail({ phone, name, email, message })
      });
      console.log('sendEmail - Email sent successfully:', responseData);
      return { success: true, data: responseData }
    } catch (error) {
      console.error('sendEmail - Error sending email:', error);
      return { success: false, error }
    }
  }

  if (result.error) {
    console.error('sendEmail - Validation error:', result.error.format());
    return { success: false, error: result.error.format() }
  }
}
