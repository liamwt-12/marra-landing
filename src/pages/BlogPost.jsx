import { useParams } from "react-router-dom";
import Placeholder from "./Placeholder";

export default function BlogPost() {
  const { slug } = useParams();
  const title = (slug || "post").replace(/[-_]/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  return (
    <Placeholder
      eyebrow="Blog post"
      title={title}
      blurb="This post is being written. Check back shortly — or join the waitlist below to be the first to read it."
    />
  );
}
