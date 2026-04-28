import type { MDXComponents } from "mdx/types";
import Image from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children, ...props }) => (
      <h1
        className="mt-12 mb-6 text-3xl font-semibold tracking-tight md:text-4xl"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        className="mt-12 mb-4 text-2xl font-semibold tracking-tight md:text-3xl"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        className="mt-8 mb-3 text-xl font-semibold tracking-tight md:text-2xl"
        {...props}
      >
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p
        className="my-4 text-base leading-relaxed text-fg/80 md:text-lg"
        {...props}
      >
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul
        className="my-4 list-disc space-y-2 pl-6 text-base text-fg/80 md:text-lg"
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol
        className="my-4 list-decimal space-y-2 pl-6 text-base text-fg/80 md:text-lg"
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="leading-relaxed" {...props}>
        {children}
      </li>
    ),
    a: ({ children, href, ...props }) => (
      <a
        href={href}
        className="text-accent underline-offset-4 hover:underline"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    ),
    code: ({ children, ...props }) => (
      <code
        className="rounded border border-rule bg-rule/30 px-1.5 py-0.5 font-mono text-sm"
        {...props}
      >
        {children}
      </code>
    ),
    pre: ({ children, ...props }) => (
      <pre
        className="my-6 overflow-x-auto rounded-lg border border-rule bg-rule/20 p-4 text-sm"
        {...props}
      >
        {children}
      </pre>
    ),
    img: ({ src, alt, ...props }) => {
      if (!src || typeof src !== "string") return null;
      return (
        <span className="my-6 block overflow-hidden rounded-lg border border-rule">
          <Image
            src={src}
            alt={alt ?? ""}
            width={1200}
            height={675}
            className="h-auto w-full"
            {...props}
          />
        </span>
      );
    },
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="my-6 border-l-4 border-rule pl-4 italic text-muted"
        {...props}
      >
        {children}
      </blockquote>
    ),
  };
}
