export default function Post(props) {
  return (
    <div className="Post">
      <p className="title">{props.post._id}</p>
      <p className="content">{props.post.content}</p>
    </div>
  );
}
