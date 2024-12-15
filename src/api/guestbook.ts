import {createClient} from '@astrojs/db';
import Guestbook from '../pages/guestbook.astro';

// Define the structure for the database entry
interface GuestbookEntry {
    name: string;
    date: Date;
    message: string;
}

// Init the database client
const db = createClient({
    url: process.env.ASTRO_DB_URL || '',
    key: process.env.ASTRO_DB_KEY || '',
});

// Define the request type for the API 
interface RequestContext{
    request: Request;
}

export async function post({request} : RequestContext) : Promise<Response> {
    try{
        const body = await request.json() as Partial<GuestbookEntry>;
        const { name, message } = body;
        if (!name || !message) {
            return new Response(JSON.stringify({ error: 'Name and message are required.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const entry:GuestbookEntry = {
            name, 
            date: new Date(),
            message,
        };

        await db.collections<GuestbookEntry>('hackathonguestbook').insertOne(entry);

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    }catch (error: unknown){
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return new Response(JSON.stringify({ error: errorMessage }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

// get

export async function get(): Promise<Response> {
    try {
        const signatures = await db.collections<GuestbookEntry>('hackathonguestbook')
                    .find()
                    .sort({ date: -1 })
                    .toArray();
        
        return new Response(JSON.stringify(signatures), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return new Response(JSON.stringify({ error: errorMessage }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }
}