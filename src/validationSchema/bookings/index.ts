import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  booking_time: yup.date().required(),
  guest_id: yup.string().nullable().required(),
  car_id: yup.string().nullable().required(),
});
