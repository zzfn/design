#!/usr/bin/env zx
console.info('开始清除tag');
const tags = await $`git tag`;
for (let tag of tags.stdout.split('\n').filter(Boolean)) {
  await $`git tag -d ${tag}`;
}
const remoteTags = await $`git ls-remote --tags`;
for (let remoteTag of remoteTags.stdout.split('\n').filter(Boolean)) {
  let [id, tag] = remoteTag.split('\t');
  if (!tag.includes('^{}')) {
    const result = await $`git push origin :${tag}`;
  }
}
console.info('清除tag成功');
