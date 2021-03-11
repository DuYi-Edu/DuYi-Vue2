import Mock from "mockjs";

const comments = [];
for (let i = 0; i < 10; i++) {
  comments.push({
    id: i,
    username: `name${i}`,
    content: `content${i}`,
  });
}
Mock.mock("/api/comment", "get", function() {
  return comments;
});

Mock.mock("/api/comment", "post", function() {
  const nextId = comments.length;
  const newComment = {
    id: nextId,
    username: `name${nextId}`,
    content: `content${nextId}`,
  };
  comments.unshift(newComment);
  return newComment;
});
