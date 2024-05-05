import { z } from 'zod'

const phoneNumberRegex = /^[\d\s-]{6,}$/

export const RestaurantSchema = z.object({
  rating: z
    .number({
      required_error: 'rating is required',
      invalid_type_error: 'rating must be a number',
    })
    .int({ message: 'rating must be an integer' }),
  name: z
    .string({
      required_error: 'name is required',
      invalid_type_error: 'name must be a string',
    })
    .min(1, { message: 'name can not be empty' }),
  site: z
    .string({
      required_error: 'site is required',
      invalid_type_error: 'site must be a string',
    })
    .url({ message: 'site must be a valid URL' }),
  email: z
    .string({
      required_error: 'email is required',
      invalid_type_error: 'email must be a string',
    })
    .email({ message: 'email must have a valid format' }),
  phone: z
    .string({
      required_error: 'phone is required',
      invalid_type_error: 'phone must be a string',
    })
    .min(1, { message: 'phone can not be empty' })
    .regex(phoneNumberRegex, { message: 'invalid phone format' }),
  street: z
    .string({
      required_error: 'street is required',
      invalid_type_error: 'street must be a string',
    })
    .min(1, { message: 'street can not be empty' }),
  city: z
    .string({
      required_error: 'city is required',
      invalid_type_error: 'city must be a string',
    })
    .min(1, { message: 'city can not be empty' }),
  state: z
    .string({
      required_error: 'state is required',
      invalid_type_error: 'state must be a string',
    })
    .min(1, { message: 'state can not be empty' }),
  lat: z.number({
    required_error: 'lat is required',
    invalid_type_error: 'lat must be a number',
  }),
  lng: z.number({
    required_error: 'lng is required',
    invalid_type_error: 'lng must be a number',
  }),
})

export const UpdateRestaurantSchema = z.object({
  rating: z
    .number({
      invalid_type_error: 'rating must be a number',
    })
    .int({ message: 'rating must be an integer' })
    .optional(),
  name: z
    .string({
      invalid_type_error: 'name must be a string',
    })
    .min(1, { message: 'name can not be empty' })
    .optional(),
  site: z
    .string({
      invalid_type_error: 'site must be a string',
    })
    .url({ message: 'site must be a valid URL' })
    .optional(),
  email: z
    .string({
      invalid_type_error: 'email must be a string',
    })
    .email({ message: 'email must have a valid format' })
    .optional(),
  phone: z
    .string({
      invalid_type_error: 'phone must be a string',
    })
    .min(1, { message: 'phone can not be empty' })
    .regex(phoneNumberRegex, { message: 'invalid phone format' })
    .optional(),
  street: z
    .string({
      invalid_type_error: 'street must be a string',
    })
    .min(1, { message: 'street can not be empty' })
    .optional(),
  city: z
    .string({
      invalid_type_error: 'city must be a string',
    })
    .min(1, { message: 'city can not be empty' })
    .optional(),
  state: z
    .string({
      invalid_type_error: 'state must be a string',
    })
    .min(1, { message: 'state can not be empty' })
    .optional(),
  lat: z
    .number({
      invalid_type_error: 'lat must be a number',
    })
    .optional(),
  lng: z
    .number({
      invalid_type_error: 'lng must be a number',
    })
    .optional(),
})
