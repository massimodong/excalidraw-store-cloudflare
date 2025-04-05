import { nanoid } from 'nanoid';

export async function onRequest(context) {
  const request = context.request;
  const blob = await request.blob();
  const env = context.env;

  const kv_key = nanoid();
  const kv_data = await blob.arrayBuffer();

  if(true){ // We can implement some sort of authentication
    await env.kvstore.put(kv_key, kv_data); //TODO: expire time

    const ret = JSON.stringify({
      id: kv_key,
      data: "TODO"
    }, null, 2);

    return new Response(ret, {
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    });
  }else{
    return new Response("Wrong Token");
  }
}
