/** Renders a JSON-LD <script> block. Server component. */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Schema is static, generated server-side — safe to inject.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
