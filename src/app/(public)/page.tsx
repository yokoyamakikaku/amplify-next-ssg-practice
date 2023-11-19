import Link from "next/link"

export default function PublicHomePage () {
  return (
    <div className="container py-4">
      <h1>Amplify Next SSG Practice</h1>
      <hr />
      <Link href="/admin">Admin Page</Link>
    </div>
  )
}
