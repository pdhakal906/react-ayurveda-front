import { Button, Card, Input, Typography } from '@material-tailwind/react'
import React from 'react'

const Reset = () => {
  return (
    <div>
      <Card color="transparent" shadow={false} className='mx-auto max-w-sm mt-20'>
        <Typography variant="h4" color="blue-gray">
          Reset Password
        </Typography>
        <Typography color="gray" className="mt-1 mb-5 font-normal">
          Enter your email to send OTP
        </Typography>
        <form>
          <div className="mb-4 flex flex-col gap-6">

            <Input
              size="lg"
              label="example@domain.com"
              name="email"
            />
            <Button type='submit' className='' fullWidth>Proceed</Button>
          </div>
        </form>
      </Card>
    </div>

  )
}

export default Reset
