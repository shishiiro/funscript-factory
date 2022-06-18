import Link from 'next/link'

export default function FirstPost() {
    const posts : string[] = ["foo", "bar", "baz"];
    return (
        <>
        <h1>First Post</h1>
        <h2>
            <Link href="/">
            <a>Back to home</a>
            </Link>
        </h2>
        <ul>
        {posts.map((post) => (
            <li>{post}</li>
        ))}
        </ul>
        </>
    )
}
