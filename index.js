// @flow
const nowClient = require('now-client');

const now = nowClient('4qujqM5VAl7g3WNrvYLK6GrY');

now.getDeployments().then((deploys) => {
  console.log(deploys);
  // deploys.map((deploy) => {
  //   console.table(deploy)
  // })
}).catch((err) => {
  console.error(err);
})
