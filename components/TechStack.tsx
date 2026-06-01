import { Logos3 } from "@/components/blocks/logos3";

const techLogos = [
  {
    id: "python",
    description: "Python",
    image: "https://cdn.simpleicons.org/python/F97316",
    className: "h-8 w-auto",
  },
  {
    id: "nodejs",
    description: "Node.js",
    image: "https://cdn.simpleicons.org/nodedotjs/F97316",
    className: "h-8 w-auto",
  },
  {
    id: "react",
    description: "React",
    image: "https://cdn.simpleicons.org/react/F97316",
    className: "h-8 w-auto",
  },
  {
    id: "typescript",
    description: "TypeScript",
    image: "https://cdn.simpleicons.org/typescript/F97316",
    className: "h-8 w-auto",
  },
  {
    id: "nextjs",
    description: "Next.js",
    image: "https://cdn.simpleicons.org/nextdotjs/ffffff",
    className: "h-8 w-auto",
  },
  {
    id: "docker",
    description: "Docker",
    image: "https://cdn.simpleicons.org/docker/F97316",
    className: "h-8 w-auto",
  },
  {
    id: "kubernetes",
    description: "Kubernetes",
    image: "https://cdn.simpleicons.org/kubernetes/F97316",
    className: "h-8 w-auto",
  },
  {
    id: "azure",
    description: "Azure",
    image: "https://cdn.simpleicons.org/microsoftazure/F97316",
    className: "h-8 w-auto",
  },
  {
    id: "terraform",
    description: "Terraform",
    image: "https://cdn.simpleicons.org/terraform/F97316",
    className: "h-8 w-auto",
  },
  {
    id: "linux",
    description: "Linux",
    image: "https://cdn.simpleicons.org/linux/F97316",
    className: "h-8 w-auto",
  },
  {
    id: "mysql",
    description: "MySQL",
    image: "https://cdn.simpleicons.org/mysql/F97316",
    className: "h-8 w-auto",
  },
  {
    id: "github",
    description: "GitHub",
    image: "https://cdn.simpleicons.org/github/ffffff",
    className: "h-8 w-auto",
  },
];

export default function TechStack() {
  return (
    <Logos3
      heading="Teknologier jeg arbejder med"
      logos={techLogos}
    />
  );
}
