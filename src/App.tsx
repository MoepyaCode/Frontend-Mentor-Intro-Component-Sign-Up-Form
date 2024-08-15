import React from 'react'
import { Container, Main, Wrapper } from './components'
import { Assets } from './assets'

export default function App() {
  const nameRef = React.useRef<HTMLInputElement>(null)
  const lastNameRef = React.useRef<HTMLInputElement>(null)
  const emailRef = React.useRef<HTMLInputElement>(null)
  const passwordRef = React.useRef<HTMLInputElement>(null)
  type ErrorType = {
    name: string | null
    lastName: string | null
    email: string | null
    password: string | null
  }
  const [error, setError] = React.useState<ErrorType>({ name: null, lastName: null, email: null, password: null })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (nameRef.current?.value === '' || lastNameRef.current?.value === '' || emailRef.current?.value === '' || passwordRef.current?.value === '') {
      return setError(state => {
        return {
          ...state,
          name: nameRef.current?.value === '' ? 'First Name cannot be empty' : null,
          lastName: lastNameRef.current?.value === '' ? 'Last Name cannot be empty' : null,
          email: emailRef.current?.value === '' ? 'Looks like this is not an email' : null,
          password: passwordRef.current?.value === '' ? 'Password cannot be empty' : null
        }
      })
    } 

    return (e.target as HTMLFormElement).reset()
  }

  return (
    <Main className='bg-mobile xs:bg-desktop bg-cover bg-no-repeat bg-[#FF7979] font-poppins grid place-items-center min-w-full px-[24px] pt-[88px] pb-[68px] sm:px-[20%] lg:px-[82.5px] xl:px-[165px]'>

      <Container className='flex flex-col flex-nowrap gap-[64px] lg:gap-[45px] lg:flex-row lg:w-full'>
        <Wrapper className='text-white text-center flex flex-col gap-[16px] lg:gap-[36px] lg:justify-center lg:items-start lg:text-start'>
          <h1 className='font-bold text-[28px] leading-[36px] tracking-[-0.29px] lg:text-[50px] lg:leading-[55px] lg:tracking-[-0.52px]'>
            Learn to code by watching others
          </h1>
          <p className='font-medium leading-[26px]'>
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
          </p>
        </Wrapper>

        <Wrapper className='grid gap-[24px] lg:max-w-[540px] lg:w-full'>
          <Wrapper className='text-[15px] text-center text-white px-[66px] py-[18px] bg-[#5E54A4] rounded-[10px] shadow-[0_8px_0_0_rgba(0,0,0,.1469)]'>
            <span className='font-bold'>Try it free 7 days</span> then $20/mo. thereafter
          </Wrapper>
          <form onSubmit={onSubmit} className='relative flex flex-col gap-[16px] lg:gap-[20px] min-h-[442px] lg:max-h-[562px] bg-white rounded-[10px] shadow-[0_8px_0_0_rgba(0,0,0,.1469)] p-[24px] lg:p-[40px]'>

            {/* Name */}
            <Wrapper className='relative flex flex-col gap-[3px] overflow-hidden'>
              <Wrapper className='flex flex-col justify-center'>
                <input ref={nameRef} className={`outline-none focus:outline-none ${!error.name ? 'border-[#DEDEDE] border' : 'border-[#FF7979] border-2'} focus:border-[#5E54A4]  h-[56px] rounded-[5px] text-[14px] text-[#3D3B48] font-semibold pl-[19.41px] placeholder:font-semibold placeholder:text-[#3D3B48] leading-[26px] placeholder:opacity-75 tracking-[0.25px]`} type="text" name='name' id='name' placeholder={!error.name ? 'First Name' : ''} />
                <img className={`transition-all duration-300 w-[24px] aspect-square absolute ${!error.name ? 'right-[-100%]' : 'right-[10px] lg:right-[16px]'} flex justify-center items-center`} src={Assets.iconError} alt="" />
              </Wrapper>
              {error.name && <p className='font-medium italic text-[11px] text-[#FF7979] self-end'>{error.name}</p>}
            </Wrapper>

            {/* Last Name */}
            <Wrapper className='relative flex flex-col gap-[3px] overflow-hidden'>
              <Wrapper className='flex flex-col justify-center'>
                <input ref={lastNameRef} className={`outline-none focus:outline-none ${!error.lastName ? 'border-[#DEDEDE] border' : 'border-[#FF7979] border-2'} focus:border-[#5E54A4]  h-[56px] rounded-[5px] text-[14px] text-[#3D3B48] font-semibold pl-[19.41px] placeholder:font-semibold placeholder:text-[#3D3B48] leading-[26px] placeholder:opacity-75 tracking-[0.25px]`} type="text" name='lastName' id='lastName' placeholder={!error.lastName ? 'Last Name' : ''} />
                <img className={`transition-all duration-300 w-[24px] aspect-square absolute ${!error.lastName ? 'right-[-100%]' : 'right-[10px] lg:right-[16px]'} flex justify-center items-center`} src={Assets.iconError} alt="" />
              </Wrapper>
              {error.lastName && <p className='font-medium italic text-[11px] text-[#FF7979] self-end'>{error.lastName}</p>}
            </Wrapper>

            {/* Email */}
            <Wrapper className='relative flex flex-col gap-[3px] overflow-hidden'>
              <Wrapper className='flex flex-col justify-center'>
                <input ref={emailRef} className={`outline-none focus:outline-none ${!error.email ? 'border-[#DEDEDE] border' : 'border-[#FF7979] border-2'} focus:border-[#5E54A4]  h-[56px] rounded-[5px] text-[14px] text-[#3D3B48] font-semibold pl-[19.41px] placeholder:font-semibold ${!error.email ? 'placeholder:text-[#3D3B48] placeholder:opacity-75' : 'placeholder:text-[#FF7979] placeholder:opacity-100'} leading-[26px] tracking-[0.25px]`} type="text" name='email' id='email' placeholder={!error.email ? 'Email Address' : 'email@example/com'} />
                <img className={`transition-all duration-300 w-[24px] aspect-square absolute ${!error.email ? 'right-[-100%]' : 'right-[10px] lg:right-[16px]'} flex justify-center items-center`} src={Assets.iconError} alt="" />
              </Wrapper>
              {error.email && <p className='font-medium italic text-[11px] text-[#FF7979] self-end'>{error.email}</p>}
            </Wrapper>

            {/* Password */}
            <Wrapper className='relative flex flex-col gap-[3px] overflow-hidden'>
              <Wrapper className='flex flex-col justify-center'>
                <input ref={passwordRef} className={`outline-none focus:outline-none ${!error.password ? 'border-[#DEDEDE] border' : 'border-[#FF7979] border-2'} focus:border-[#5E54A4]  h-[56px] rounded-[5px] text-[14px] text-[#3D3B48] font-semibold pl-[19.41px] placeholder:font-semibold placeholder:text-[#3D3B48] leading-[26px] placeholder:opacity-75 tracking-[0.25px]`} type="password" name='password' id='password' placeholder={!error.password ? 'Password' : ''} />
                <img className={`transition-all duration-300 w-[24px] aspect-square absolute ${!error.password ? 'right-[-100%]' : 'right-[10px] lg:right-[16px]'} flex justify-center items-center`} src={Assets.iconError} alt="" />
              </Wrapper>
              {error.password && <p className='font-medium italic text-[11px] text-[#FF7979] self-end'>{error.password}</p>}
            </Wrapper>

            <Wrapper className='flex flex-col gap-[8px] text-center'>
              <button className='h-[56px] bg-[#38CC8B] hover:bg-[#77E2B3] transition-colors text-white text-[15px] font-semibold leading-[26px] tracking-[1px] rounded-[5px] shadow-[inset_0_-4px_0_0_rgba(0,0,0,.0909)]' type="submit">
                CLAIM YOUR FREE TRIAL
              </button>
              <p className='text-[11px] text-[#BAB7D4] leading-[21px] font-medium'>
                By clicking the button, you are agreeing to our <span className='font-bold text-[#FF7979]'>Terms and Services</span>
              </p>
            </Wrapper>
          </form>
        </Wrapper>
      </Container>

    </Main>
  )
}
