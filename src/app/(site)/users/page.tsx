import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { redirect } from 'next/navigation'

export default async function Users() {
  const session = await auth()
  if (!session) {
    redirect('/login?redirectUrl=/users')
  }

  const users = await prisma.user.findMany()

  return (
    <div>
      <h3>Users</h3>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
