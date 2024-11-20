import { auth } from '@/auth'
import { Button } from '@/components/ui/button'

export default async function Home() {
  const session = await auth()

  return (
    <div>
      <p>{JSON.stringify(session)}</p>
      <Button>Click me</Button>
    </div>
  )
}
