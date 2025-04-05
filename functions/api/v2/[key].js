export async function onRequest(context) {
  const env = context.env;
  const key = context.params.key;

  const data = await env.kvstore.get(key, "arrayBuffer");

  if(true){ //TODO: check if success
    return new Response(data, {
      headers: {
        'content-type': 'application/octet-stream',
      },
    });
  }else{
  }
}
