import { useParams } from "react-router-dom";
import { getPostBySlug } from "./blog/posts";
import NotFound from "./NotFound";

/**
 * Router wrapper for /blog/:slug. Looks the slug up in the post index and
 * renders the matching component, or falls through to NotFound.
 */
export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  if (!post) return <NotFound />;
  const Component = post.component;
  return <Component />;
}
