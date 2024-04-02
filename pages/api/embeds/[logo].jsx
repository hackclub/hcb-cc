import { Event } from '../../../components/images/event'
import { imageHandler } from '../../../components/images/imageHandler'

export const config = {
    runtime: 'edge',
}

export default async function handler(req) {
    const paths = new URL(req.url).pathname.split('/');
    const index = paths.indexOf('embeds');
    const slug = paths[index + 1];
    console.log(req)
    const url = new URL(req.url);
    const params = new URLSearchParams(url.search);
    const name = params.get("name")|| "";
    return imageHandler(Event, [slug, name]);
}
