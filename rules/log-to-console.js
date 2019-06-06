function (user, context, callback) {
  console.log(JSON.stringify({ user: user, context: context }, null, 2));
  console.log('testing the webhook');
  callback(null, user, context);
}
