import { signIn } from '@/auth'
import { Button } from '@/components/ui/button'

export default function Login({
  searchParams,
}: {
  searchParams: { redirectUrl: string }
}) {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('google', {
          redirectTo: searchParams.redirectUrl ?? '/',
        })
      }}
    >
      <Button type="submit">Login with Google</Button>
    </form>
  )
}
