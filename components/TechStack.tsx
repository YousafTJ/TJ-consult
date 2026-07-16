import { Logos3 } from "@/components/blocks/logos3";

const techLogos = [
  {
    id: "python",
    description: "Python",
    image: "https://cdn.simpleicons.org/python",
    className: "h-8 w-auto",
  },
  {
    id: "nodejs",
    description: "Node.js",
    image: "https://cdn.simpleicons.org/nodedotjs",
    className: "h-8 w-auto",
  },
  {
    id: "react",
    description: "React",
    image: "https://cdn.simpleicons.org/react",
    className: "h-8 w-auto",
  },
  {
    id: "typescript",
    description: "TypeScript",
    image: "https://cdn.simpleicons.org/typescript",
    className: "h-8 w-auto",
  },
  {
    id: "nextjs",
    description: "Next.js",
    image: "https://cdn.simpleicons.org/nextdotjs",
    className: "h-8 w-auto",
  },
  {
    id: "docker",
    description: "Docker",
    image: "https://cdn.simpleicons.org/docker",
    className: "h-8 w-auto",
  },
  {
    id: "kubernetes",
    description: "Kubernetes",
    image: "https://cdn.simpleicons.org/kubernetes",
    className: "h-8 w-auto",
  },
  {
    id: "azure",
    description: "Azure",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    className: "h-8 w-auto",
  },
  {
    id: "terraform",
    description: "Terraform",
    image: "https://cdn.simpleicons.org/terraform",
    className: "h-8 w-auto",
  },
  {
    id: "linux",
    description: "Linux",
    image: "https://cdn.simpleicons.org/linux",
    className: "h-8 w-auto",
  },
  {
    id: "postgresql",
    description: "PostgreSQL",
    image: "https://cdn.simpleicons.org/postgresql",
    className: "h-8 w-auto",
  },
  {
    id: "mysql",
    description: "MySQL",
    image: "https://cdn.simpleicons.org/mysql",
    className: "h-8 w-auto",
  },
  {
    id: "vmware",
    description: "VMware",
    image: "https://cdn.simpleicons.org/vmware",
    className: "h-8 w-auto",
  },
  {
    id: "n8n",
    description: "n8n",
    image: "https://cdn.simpleicons.org/n8n",
    className: "h-8 w-auto",
  },
  {
    id: "github",
    description: "GitHub",
    image: "https://cdn.simpleicons.org/github",
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
