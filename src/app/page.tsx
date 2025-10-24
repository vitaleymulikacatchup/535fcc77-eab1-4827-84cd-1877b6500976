"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { GraduationCap, MapPin, MessageCircle, Plane, Settings, Wrench } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Teenused", id: "about" },
            { name: "Võimalused", id: "features" },
            { name: "Arvamused", id: "testimonials" },
            { name: "Kontakt", id: "contact" }
          ]}
          brandName="AeroServices"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Professionaalsed Lennunduse Teenused"
          description="Pakume täielikku lennuki hooldust, pilootide koolitust ja charteri teenuseid kõrgeimate ohutusstandarditega. Usaldage oma lennuki meie kogenud spetsialistidele."
          tag="Lennuteenus"
          tagIcon={Plane}
          buttons={[
            { text: "Alusta Kohe", href: "contact" },
            { text: "Vaata Teenuseid", href: "about" }
          ]}
          imageSrc="https://images.pexels.com/photos/5741643/pexels-photo-5741643.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Väike lennuk lendamas sinise taeva all"
        />
      </div>
      
      <div id="about" data-section="about">
        <TextAbout
          title="Oleme spetsialiseerunud väikelennunduse teenustele, pakkudes usaldusväärseid ja kvaliteetseid lahendusi nii eralennukite omanikele kui ka kommertslendudele."
          buttons={[
            { text: "Rohkem Infot", href: "features" }
          ]}
        />
      </div>
      
      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Meie Teenused"
          description="Pakume laiaulatuslikke lennunduse teenuseid alates hooldusest kuni pilootide koolituseni"
          tag="Võimalused"
          tagIcon={Settings}
          features={[
            {
              title: "Lennuki Hooldus",
              description: "Täielik lennuki hooldus ja remont kogenud mehaanikute poolt, kasutades originaalvaruosi ja kaasaegseid diagnoosivahendeid.",
              icon: Wrench,
              button: { text: "Vaata Rohkem", href: "contact" }
            },
            {
              title: "Pilootide Koolitus",
              description: "Professionaalne pilootide koolitus kogenud instruktorite juhendamisel, kasutades kaasaegseid simulaatoreid ja õppevahendeid.",
              icon: GraduationCap,
              button: { text: "Vaata Rohkem", href: "contact" }
            },
            {
              title: "Charter Teenused",
              description: "Paindlikud charter lennud kohandatud graafikuga, tagades mugava ja ohutu reisimise kogemuse igale kliendile.",
              icon: MapPin,
              button: { text: "Vaata Rohkem", href: "contact" }
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Klientide Arvamused"
          description="Vaata, mida meie kliendid meie teenuste kohta arvavad"
          tag="Tagasiside"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Marko Tamm",
              role: "Eralennuki Omanik",
              testimonial: "Suurepärane teenindus ja professionaalne lähenemine. Mu lennuk on alati suurepärases seisukorras pärast hooldust.",
              imageSrc: "https://images.pexels.com/photos/4173354/pexels-photo-4173354.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Liisa Kask",
              role: "Charter Klient",
              testimonial: "Charter lennud on alati õigeaegsed ja mugavad. Soovitan kõigile, kes otsivad kvaliteetset lennuteenust.",
              imageSrc: "https://images.pexels.com/photos/5778365/pexels-photo-5778365.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Peeter Mets",
              role: "Pilot",
              testimonial: "Koolitusteenused on tipptasemel. Instruktorid on kogenud ja õppematerjalid kaasaegsed.",
              imageSrc: "https://images.pexels.com/photos/5778520/pexels-photo-5778520.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "Andra Kivi",
              role: "Lennundusettevõtte Juht",
              testimonial: "Usaldusväärne partner meie lennundusäris. Alati professionaalne ja täpne teenindus.",
              imageSrc: "https://images.pexels.com/photos/9951670/pexels-photo-9951670.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Võta Meiega Ühendust"
          description="Vaja lennunduse teenuseid? Kirjuta meile ja saame su vajadused lahendatud. Vastame 24 tunni jooksul."
          inputs={[
            { name: "name", type: "text", placeholder: "Teie nimi", required: true },
            { name: "email", type: "email", placeholder: "Email aadress", required: true },
            { name: "phone", type: "tel", placeholder: "Telefoni number", required: false }
          ]}
          textarea={{ name: "message", placeholder: "Kirjeldage oma vajadused...", rows: 5, required: true }}
          buttonText="Saada Sõnum"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Teenused",
              items: [
                { label: "Lennuki Hooldus", href: "features" },
                { label: "Pilootide Koolitus", href: "features" },
                { label: "Charter Lennud", href: "features" }
              ]
            },
            {
              title: "Ettevõte",
              items: [
                { label: "Meist", href: "about" },
                { label: "Kontakt", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2025 AeroServices | Kõik õigused kaitstud"
        />
      </div>
    </ThemeProvider>
  );
}