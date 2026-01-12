import WebServices from "@/components/WebServices";
import AIServices from "@/components/AIServices";

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <WebServices />
      <AIServices />
    </div>
  );
}