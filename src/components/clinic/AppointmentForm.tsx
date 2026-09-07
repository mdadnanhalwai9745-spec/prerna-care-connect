import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const CLINIC_PHONE = "+9779746888888";
export const CLINIC_PHONE_DISPLAY = "+977-9746888888";

export function AppointmentForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Gynaecology & Obstetrics");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

 function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !date) {
      setError("Please fill in your name, phone number and preferred date.");
      return;
    }

    setError("");

    const message = `Namaste PRERNA CLINIC, I would like to request an appointment.\n\n` +
      `Patient Name: ${name.trim()}\n` +
      `Phone Number: ${phone.trim()}\n` +
      `Service Needed: ${service}\n` +
      `Preferred Date: ${date}`;
  window.open(`https://wa.me/9779746888888?text=${encodeURIComponent(message)}`, "_blank");

  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8"
    >
      <h3 className="text-2xl font-semibold">Request an appointment</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Fill this in and your request opens straight in WhatsApp to {CLINIC_PHONE_DISPLAY}.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="ap-name">Patient name</Label>
          <Input
            id="ap-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            autoComplete="name"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="ap-phone">Phone number</Label>
          <Input
            id="ap-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="98XXXXXXXX"
            autoComplete="tel"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="ap-service">Service needed</Label>
          <select
            id="ap-service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option>Gynaecology &amp; Obstetrics</option>
            <option>ENT (Ear, Nose &amp; Throat)</option>
          </select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="ap-date">Preferred date</Label>
          <Input
            id="ap-date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>

      {error ? (
        <p className="mt-4 text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}

      <Button type="submit" size="lg" className="mt-6 w-full">
        Send request on WhatsApp
      </Button>
    </form>
  );
}
