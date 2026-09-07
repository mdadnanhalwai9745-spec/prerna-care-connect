import {
  Star,
  MapPin,
  Phone,
  Clock,
  Users,
  Baby,
  HeartPulse,
  Stethoscope,
  Ear,
  Wind,
  Mic,
  ShieldPlus,
  Navigation,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/clinic-hero.jpg";
import newbornCareAsset from "@/assets/newborn-care.jpg.asset.json";
import clinicExteriorAsset from "@/assets/clinic-exterior.jpg.asset.json";
import entProcedureAsset from "@/assets/ent-procedure.webp.asset.json";
import surgeryAsset from "@/assets/surgery.jpg.asset.json";
import { AppointmentForm, CLINIC_PHONE, CLINIC_PHONE_DISPLAY } from "./AppointmentForm";

const ADDRESS =
  "Beside City College Of Management, Pasang Lhamu Marg, Nepalgunj, Lumbini Province 21900, Nepal";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Prerna Clinic Pasang Lhamu Marg Nepalgunj",
)}`;
const WHATSAPP_URL = `https://wa.me/${CLINIC_PHONE.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Namaste PRERNA CLINIC, I would like to book an appointment.",
)}`;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <ShieldPlus className="h-5 w-5" />
          </span>
          <span className="text-base font-semibold tracking-tight">PRERNA CLINIC</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a href="#services" className="hover:text-foreground">Services</a>
          <a href="#blog" className="hover:text-foreground">Blog</a>
          <a href="#hours" className="hover:text-foreground">Hours</a>
          <a href="#book" className="hover:text-foreground">Book</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
        <Button asChild size="sm">
          <a href={`tel:${CLINIC_PHONE}`}>
            <Phone className="h-4 w-4" /> Call
          </a>
        </Button>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="bg-hero-gradient">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:py-20 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm shadow-sm">
            <span className="flex" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-teal text-teal" />
              ))}
            </span>
            <span className="font-semibold">5.0</span>
            <span className="text-muted-foreground">on Google · 3 reviews</span>
          </div>

          <h1 className="mt-5 text-4xl leading-tight font-semibold sm:text-5xl">
            PRERNA CLINIC
            <span className="mt-2 block text-2xl text-primary sm:text-3xl">
              Gynaecology &amp; ENT care in Nepalgunj
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Trusted women&apos;s health, pregnancy care and ear-nose-throat treatment, with
            unhurried consultations and same-day appointments.
          </p>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-card p-4">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
            <p className="text-sm font-medium">
              Beside City College Of Management, Pasang Lhamu Marg, Nepalgunj
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Phone className="h-5 w-5" /> Call / WhatsApp for Appointment
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                <Navigation className="h-5 w-5" /> Get Directions
              </a>
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
          <img
            src={heroImage}
            alt="Reception area of Prerna Clinic in Nepalgunj"
            width={1600}
            height={1100}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

const gynae = [
  { icon: Users, title: "Women's Health", text: "Routine check-ups, menstrual and hormonal concerns, infections and screening." },
  { icon: HeartPulse, title: "Fertility Care", text: "Fertility evaluation, cycle tracking and counselling for couples planning a family." },
  { icon: Stethoscope, title: "Antenatal Care", text: "Regular antenatal visits, growth monitoring and nutrition guidance." },
  { icon: Baby, title: "Pregnancy Care", text: "Complete pregnancy support through every trimester and postnatal follow-up." },
];

const ent = [
  { icon: Ear, title: "Ear", text: "Ear pain, infections, wax removal and hearing difficulty assessment." },
  { icon: Wind, title: "Nose", text: "Sinusitis, allergy, blocked nose and nasal bleeding diagnostics." },
  { icon: Mic, title: "Throat", text: "Tonsils, sore throat, voice changes and swallowing problems." },
  { icon: Stethoscope, title: "Diagnostics", text: "ENT examination and treatment planning with follow-up review." },
];

function ServiceCard({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Ear;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-soft">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <h4 className="mt-4 text-base font-semibold">{title}</h4>
      <p className="mt-1.5 text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <h2 className="text-3xl font-semibold sm:text-4xl">Our specialties</h2>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Two dedicated departments under one roof, run by experienced consultants.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold text-primary">Gynaecology &amp; Obstetrics</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {gynae.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-primary">ENT (Otolaryngology)</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {ent.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ClinicInfo() {
  return (
    <section id="hours" className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6">
            <MapPin className="h-6 w-6 text-teal" />
            <h3 className="mt-4 text-lg font-semibold">Address</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Beside City College Of Management,
              <br />
              Pasang Lhamu Marg, Nepalgunj,
              <br />
              Lumbini Province 21900, Nepal
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <Clock className="h-6 w-6 text-teal" />
            <h3 className="mt-4 text-lg font-semibold">Working hours</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Open daily · <span className="font-medium text-foreground">Closes at 7:00 PM</span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Consultations run through the day; arrive 10 minutes early for registration.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <Users className="h-6 w-6 text-teal" />
            <h3 className="mt-4 text-lg font-semibold">Peak time</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Busiest around <span className="font-medium text-foreground">12:00 PM</span>. Book
              ahead or visit early morning or late afternoon for shorter waits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold sm:text-4xl">Find us</h2>
          <p className="mt-3 text-muted-foreground">{ADDRESS}</p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Map to Prerna Clinic, Nepalgunj"
              src="https://www.google.com/maps?q=Pasang%20Lhamu%20Marg%2C%20Nepalgunj&output=embed"
              className="h-72 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="outline" className="sm:flex-1">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
            </Button>
            <Button asChild className="sm:flex-1">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Phone className="h-4 w-4" /> Book on WhatsApp
              </a>
            </Button>
          </div>

          <div className="mt-6 rounded-2xl border border-destructive/30 bg-destructive/5 p-5">
            <h3 className="text-base font-semibold">Emergency contact</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              For urgent obstetric or ENT concerns outside clinic hours, call us directly.
            </p>
            <a
              href={`tel:${CLINIC_PHONE}`}
              className="mt-3 inline-flex items-center gap-2 text-lg font-semibold text-primary"
            >
              <Phone className="h-5 w-5" /> {CLINIC_PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div id="book">
          <AppointmentForm />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p className="font-medium text-foreground">PRERNA CLINIC — Gynaecology &amp; ENT</p>
        <p>Nepalgunj, Lumbini Province 21900 · {CLINIC_PHONE_DISPLAY}</p>
      </div>
    </footer>
  );
}
