import LinkComponent from "@/components/link-components";

export default function HomePage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to the Registration App</h1>
      <p>
        This app demonstrates a simple registration flow using Next.js with the `app` directory.
      </p>
      <LinkComponent path="/register" />
    </div>
  );
}
