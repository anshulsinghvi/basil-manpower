import godrej from "../assets/developers/godrej.png";
import piramal from "../assets/developers/piramal.png";
import runwal from "../assets/developers/runwal.png";
import adani from "../assets/developers/adani.png";
import sunteck from "../assets/developers/sunteck.png";
import wadhwa from "../assets/developers/wadhwa.png";
import suraj from "../assets/developers/suraj.png";
import jpinfra from "../assets/developers/jpinfra.png";
import raheja from "../assets/developers/raheja.png";
import ashwin from "../assets/developers/ashwin.png";
import paranjape from "../assets/developers/paranjape.png";
import guardians from "../assets/developers/guardians.png";
import anarock from "../assets/developers/anarock.png";
import asap from "../assets/developers/asap.png";
import atmosphere from "../assets/developers/atmosphere.png";
import blox from "../assets/developers/blox.png";
import dotom from "../assets/developers/dotom.png";
import justo from "../assets/developers/justo.png";
import kolte from "../assets/developers/kolte.png";
import mayfair from "../assets/developers/mayfair.png";
import paradigm from "../assets/developers/paradigm.png";
import princecare from "../assets/developers/princecare.png";
import propertypistol from "../assets/developers/propertypistol.png";
import puraniks from "../assets/developers/puraniks.png";
import puravankara from "../assets/developers/puravankara.png";
import puri from "../assets/developers/puri.png";
import rudra from "../assets/developers/rudra.png";
import ruparel from "../assets/developers/ruparel.png";
import rustomjee from "../assets/developers/rustomjee.png";
import shapoorji from "../assets/developers/shapoorji.png";
import siddha from "../assets/developers/siddha.png";
import veena from "../assets/developers/veena.png";
import vkg from "../assets/developers/vkg.png";

const developers = [
  { name: "Godrej", logo: godrej },
  { name: "Piramal", logo: piramal },
  { name: "Runwal", logo: runwal },
  { name: "Adani", logo: adani },
  { name: "Sunteck", logo: sunteck },
  { name: "Wadhwa", logo: wadhwa },
  { name: "Suraj", logo: suraj },
  { name: "JP Infra", logo: jpinfra },
  { name: "Raheja", logo: raheja },
  { name: "Guardians", logo: guardians },
  { name: "Ashwin", logo: ashwin },
  { name: "Paranjape", logo: paranjape },
  { name: "Anarock", logo: anarock },
  { name: "Asap", logo: asap },
  { name: "Atmosphere", logo: atmosphere },
  { name: "Blox", logo: blox },
  { name: "Dotom", logo: dotom },
  { name: "Justo", logo: justo },
  { name: "Kolte", logo: kolte },
  { name: "Mayfair", logo: mayfair },
  { name: "Paradigm", logo: paradigm },
  { name: "Princecare", logo: princecare },
  { name: "Propertypistol", logo: propertypistol },
  { name: "Puraniks", logo: puraniks },
  { name: "Puravankara", logo: puravankara },
  { name: "Puri", logo: puri },
  { name: "Rudra", logo: rudra },
  { name: "Ruparel", logo: ruparel },
  { name: "Shapoorji", logo: shapoorji },
  { name: "Siddha", logo: siddha },
  { name: "Veena", logo: veena },
  { name: "Vkg", logo: vkg },
];

function TrustedBrands() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-center text-4xl font-bold text-slate-900">
          Trusted By Leading Developers
        </h2>

        <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full mt-3 mb-12"></div>

        <div className="relative overflow-hidden">

          <div className="flex w-max animate-marquee gap-8">

            {[...developers, ...developers].map((dev, index) => (
              <div
                key={index}
                className="flex items-center justify-center shrink-0 w-64 h-36 bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={dev.logo}
                  alt={dev.name}
                  className="max-h-20 max-w-[180px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default TrustedBrands;