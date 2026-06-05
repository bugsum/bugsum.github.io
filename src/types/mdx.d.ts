declare module "*.mdx" {
  import type { ComponentType } from "react";
  import type { PostMeta } from "@/lib/blog";

  export const metadata: PostMeta;
  const MDXComponent: ComponentType<{
    components?: Record<string, ComponentType>;
  }>;
  export default MDXComponent;
}
