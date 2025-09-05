import { Phone, MapPin, Laptop, Monitor, Wrench, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import layananHeroBg from "@/assets/layanan-hero-bg.jpg";

const Layanan = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/6285156023406", "_blank");
  };

  const handleMaps = () => {
    window.open("https://maps.app.goo.gl/Jtxje7RakB3fS3yD7", "_blank");
  };

  const services = [
    {
      icon: <Laptop className="w-8 h-8 text-success-green" />,
      title: "Servis Laptop All Brand",
      items: [
        "Acer, Asus, Lenovo, Dell, HP",
        "MacBook (semua series)",
        "Gaming laptop & Ultrabook",
        "Laptop bisnis & consumer"
      ]
    },
    {
      icon: <Monitor className="w-8 h-8 text-success-green" />,
      title: "Servis Komputer & PC",
      items: [
        "PC Desktop All-in-One",
        "Komputer rakitan",
        "Workstation",
        "Mini PC & NUC"
      ]
    }
  ];

  const repairServices = [
    "Keyboard error & rusak",
    "Layar pecah & bergaris",
    "Engsel patah & longgar",
    "Casing jebol & retak",
    "Overheating & mati total",
    "Cleaning & maintenance",
    "Install ulang OS (Windows/macOS/Linux)",
    "Upgrade SSD & RAM",
    "Recovery data hilang",
    "Perbaikan motherboard",
    "Ganti LCD & LED screen",
    "Servis charging port"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section 
        className="text-primary-foreground py-16 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${layananHeroBg})` }}
      >
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Layanan Servis Laptop & Komputer Profesional
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Melayani servis semua merk laptop dan komputer dengan teknisi berpengalaman. 
              Garansi resmi dan harga transparan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="whatsapp" 
                size="lg" 
                onClick={handleWhatsApp}
              >
                <Phone className="w-5 h-5 mr-2" />
                Konsultasi Gratis
              </Button>
              <Button 
                variant="maps" 
                size="lg" 
                onClick={handleMaps}
              >
                <MapPin className="w-5 h-5 mr-2" />
                Lokasi Toko
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services by Device Type */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Jenis Perangkat yang Kami Layani
            </h2>
            <p className="text-lg text-muted-foreground">
              Melayani semua merk dan tipe perangkat dengan standar kualitas tertinggi
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {service.icon}
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    {service.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-success-green rounded-full"></div>
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Detail Layanan Perbaikan
            </h2>
            <p className="text-lg text-muted-foreground">
              Solusi lengkap untuk semua masalah laptop dan komputer Anda
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairServices.map((service, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <Wrench className="w-5 h-5 text-success-green flex-shrink-0" />
                    <span className="text-foreground font-medium">{service}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pickup Service */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-success-green">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <Truck className="w-6 h-6 text-success-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Layanan Antar Jemput</h3>
                    <p className="text-muted-foreground">Kemudahan untuk Anda yang sibuk</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-foreground">Keuntungan:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-success-green rounded-full"></div>
                        <span>Free ongkir 2 km pertama</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-success-green rounded-full"></div>
                        <span>Penjemputan di lokasi Anda</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-success-green rounded-full"></div>
                        <span>Pengantaran setelah selesai</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-foreground">Cara Pesan:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-success-green text-success-foreground rounded-full text-sm font-bold flex items-center justify-center">1</div>
                        <span>Hubungi via WhatsApp</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-success-green text-success-foreground rounded-full text-sm font-bold flex items-center justify-center">2</div>
                        <span>Berikan alamat lengkap</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-success-green text-success-foreground rounded-full text-sm font-bold flex items-center justify-center">3</div>
                        <span>Tunggu teknisi datang</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Perbaiki Perangkat Anda?
          </h2>
          <p className="text-xl mb-6 text-primary-foreground/80">
            Hubungi kami untuk konsultasi gratis dan estimasi biaya
          </p>
          <p className="text-lg mb-8 text-primary-foreground/60">
            Harga fleksibel • Garansi resmi • Teknisi bersertifikat
          </p>
          <Button 
            variant="whatsapp" 
            size="lg" 
            onClick={handleWhatsApp}
            className="text-lg px-8 py-3"
          >
            <Phone className="w-5 h-5 mr-2" />
            Hubungi Sekarang
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Layanan;