import { Phone, MapPin, Wrench, Shield, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-laptop-repair.jpg";
import componentsImage from "@/assets/laptop-components.jpg";

const Home = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/6285156023406", "_blank");
  };

  const handleMaps = () => {
    window.open("https://maps.app.goo.gl/Jtxje7RakB3fS3yD7", "_blank");
  };

  const features = [
    {
      icon: <Wrench className="w-8 h-8 text-success-green" />,
      title: "Servis All Brand",
      description: "Melayani semua merk laptop & komputer termasuk MacBook dan PC All-in-One"
    },
    {
      icon: <Shield className="w-8 h-8 text-success-green" />,
      title: "Bergaransi",
      description: "Semua servis dilengkapi garansi untuk kepuasan dan keamanan Anda"
    },
    {
      icon: <Clock className="w-8 h-8 text-success-green" />,
      title: "Servis Cepat",
      description: "Pengerjaan cepat dengan kualitas terbaik dan harga yang kompetitif"
    },
    {
      icon: <Users className="w-8 h-8 text-success-green" />,
      title: "Tim Berpengalaman",
      description: "Didukung teknisi berpengalaman dan bersertifikat"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Servis Laptop & Komputer Malang | Sparepart Terlengkap
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Risalamoon Notebook melayani servis cepat, bergaransi, dan sparepart 
                laptop/komputer all brand. Teknisi berpengalaman, harga terjangkau.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="whatsapp" 
                  size="lg" 
                  onClick={handleWhatsApp}
                  className="text-lg px-8 py-3"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Chat WhatsApp Sekarang
                </Button>
                <Button 
                  variant="maps" 
                  size="lg" 
                  onClick={handleMaps}
                  className="text-lg px-8 py-3"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Lihat Lokasi di Maps
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-strong">
                <img 
                  src={heroImage} 
                  alt="Servis laptop dan komputer Risalamoon Notebook Malang" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-success-green rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-success-green rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mengapa Pilih Risalamoon Notebook?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Komitmen kami adalah memberikan pelayanan terbaik dengan kualitas yang terjamin
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Layanan Servis & Sparepart Terlengkap
              </h2>
              <p className="text-lg text-muted-foreground">
                Kami melayani servis laptop dan komputer semua merk dengan sparepart 
                original dan berkualitas. Dari perbaikan ringan hingga upgrade performa.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success-green rounded-full"></div>
                  <span className="text-foreground">Servis All Brand (Acer, Asus, Lenovo, Dell, HP, MacBook)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success-green rounded-full"></div>
                  <span className="text-foreground">Sparepart Original & Berkualitas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success-green rounded-full"></div>
                  <span className="text-foreground">Servis Antar Jemput (Free 2km pertama)</span>
                </div>
              </div>
              <Button 
                variant="default" 
                size="lg" 
                onClick={handleWhatsApp}
                className="mt-6"
              >
                Konsultasi Gratis
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-medium">
                <img 
                  src={componentsImage} 
                  alt="Sparepart laptop dan komputer berkualitas" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Laptop Bermasalah? Hubungi Kami Sekarang!
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/80">
            Konsultasi gratis, diagnosis cepat, dan solusi terbaik untuk perangkat Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="whatsapp" 
              size="lg" 
              onClick={handleWhatsApp}
              className="text-lg px-8 py-3"
            >
              <Phone className="w-5 h-5 mr-2" />
              Chat WhatsApp
            </Button>
            <Button 
              variant="maps" 
              size="lg" 
              onClick={handleMaps}
              className="text-lg px-8 py-3"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Kunjungi Toko
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;