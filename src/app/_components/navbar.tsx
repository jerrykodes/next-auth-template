import { auth, signOut } from '@/auth'
import Link from 'next/link'
import { Button } from '../../components/ui/button'

export default async function Navbar() {
  const session = await auth()

  return (
    <div className="flex items-center justify-between bg-white px-5 py-3 shadow">
      <h3 className="font-[family-name:var(--font-geist-mono)] text-xl">
        <Link href={'/'}>Lorem Ipsum Inc.</Link>
      </h3>

      <ul className="flex items-center gap-2">
        {!session ? (
          <Button asChild variant={'ghost'}>
            <Link href={'/login'}>Login</Link>
          </Button>
        ) : (
          <>
            <Button asChild variant={'ghost'}>
              <Link href={'/users'}>Users</Link>
            </Button>

            <form
              action={async () => {
                'use server'
                await signOut()
              }}
            >
              <Button variant={'destructive'} type="submit">
                Logout
              </Button>
            </form>
          </>
        )}
      </ul>
    </div>
  )
}
