import { createFileRoute, notFound } from "@tanstack/react-router";
import { getService } from "@/data/services";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ params }) => {
    const service = getService(params.slug);
    const title = `${service?.title ?? "Service"} — Plama Projects Sydney`;
    const description = service?.short ?? "Engineering services by Plama Projects, Sydney.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServiceRoute,
});

function ServiceRoute() {
  const { slug } = Route.useLoaderData();
  const service = getService(slug);
  if (!service) return null;
  return <ServicePage service={service} />;
}
