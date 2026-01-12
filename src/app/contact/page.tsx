import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

export default function ContactPage() {
  return (
    <div className="pt-24">
      <ContactHero />
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}