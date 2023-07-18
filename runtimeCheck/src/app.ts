import { z } from 'zod'

const schema = z.array(
    z.object({
        title: z.string(),
        body: z.string().min(2).max(255)
    })
).min(1)

async function demo() {
    try {
        const posts = schema.parse(await fetch('https://jsonplaceholder.typicode.com/posts?limit=3').then(response => response.json()))

        if (posts[0]) {
            console.log(posts[0].body.toUpperCase());
        }

    } catch (e) {
        console.error("API Error")
    }
}

await demo()

export { }