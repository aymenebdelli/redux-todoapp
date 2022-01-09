import * as Yup from 'yup'

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  email: Yup.string().email('Invalid email!').required('Required!'),
  password: Yup.string().min(8, 'Too short!').required('Required!'),
})

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email!').required('Required!'),
  password: Yup.string().min(8, 'Too short!').required('Required!'),
})

export default SignUpSchema