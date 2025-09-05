import { Phone, MapPin, MessageCircle, Instagram, Send, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Kontak = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/6285156023406", "_blank");
  };

  const handleMaps = () => {
    window.open("https://maps.app.goo.gl/Jtxje7RakB3fS3yD7", "_blank");
  };

  const handleInstagram1 = () => {
    window.open("https://instagram.com/sparepartlaptop_malang", "_blank");
  };

  const handleInstagram2 = () => {
    window.open("https://instagram.com/risalamoon_notebook", "_blank");
  };

  const handleTelegram = () => {
    window.open("https://t.me/sparepartlaptopmalang", "_blank");
  };

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8 text-success-green" />,
      title: "WhatsApp",
      subtitle: "Chat langsung dengan kami",
      details: "085156023406",
      action: handleWhatsApp,
      buttonText: "Chat WhatsApp",
      buttonVariant: "whatsapp" as const
    },
    {
      icon: <MapPin className="w-8 h-8 text-success-green" />,
      title: "Lokasi Toko",
      subtitle: "Kunjungi toko kami",
      details: "Lihat di Google Maps",
      action: handleMaps,
      buttonText: "Arahkan ke Lokasi",
      buttonVariant: "maps" as const
    },
    {
      icon: <Send className="w-8 h-8 text-success-green" />,
      title: "Telegram",
      subtitle: "Channel info & update",
      details: "@sparepartlaptopmalang",
      action: handleTelegram,
      buttonText: "Buka Telegram",
      buttonVariant: "default" as const
    }
  ];

  const socialMedia = [
    {
      platform: "Instagram",
      username: "@sparepartlaptop_malang",
      description: "Update sparepart & promo terbaru",
      action: handleInstagram1
    },
    {
      platform: "Instagram",
      username: "@risalamoon_notebook",
      description: "Portfolio servis & tips maintenance",
      action: handleInstagram2
    }
  ];

  const operatingHours = [
    { day: "Senin - Jumat", hours: "08:00 - 17:00 WIB" },
    { day: "Sabtu", hours: "08:00 - 15:00 WIB" },
    { day: "Minggu", hours: "Tutup" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hubungi Kami
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Siap membantu Anda 24/7 melalui berbagai platform komunikasi. 
              Konsultasi gratis untuk semua kebutuhan laptop dan komputer Anda.
            </p>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Clock className="w-6 h-6 text-success-green" />
              <span className="text-lg">Respon cepat dalam 15 menit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cara Menghubungi Kami
            </h2>
            <p className="text-lg text-muted-foreground">
              Pilih platform yang paling nyaman untuk berkomunikasi dengan kami
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {method.icon}
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <p className="text-muted-foreground">{method.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold mb-4 text-foreground">
                    {method.details}
                  </p>
                  <Button 
                    variant={method.buttonVariant}
                    size="lg"
                    onClick={method.action}
                    className="w-full"
                  >
                    {method.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Follow Social Media Kami
            </h2>
            <p className="text-lg text-muted-foreground">
              Dapatkan update terbaru tentang promo, tips, dan info menarik lainnya
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {socialMedia.map((social, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-success-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{social.platform}</h3>
                      <p className="text-success-green font-medium">{social.username}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{social.description}</p>
                  <Button 
                    variant="outline"
                    onClick={social.action}
                    className="w-full"
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Follow Instagram
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Hours & Location */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Operating Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-success-green" />
                  <span>Jam Operasional</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {operatingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="font-medium text-foreground">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-success-green-light rounded-lg">
                  <p className="text-sm text-foreground">
                    <strong>Catatan:</strong> Untuk servis urgent di luar jam operasional, 
                    hubungi WhatsApp kami terlebih dahulu.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Location Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Navigation className="w-6 h-6 text-success-green" />
                  <span>Informasi Lokasi</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Risalamoon Notebook</h4>
                    <p className="text-muted-foreground">
                      Pusat servis laptop & komputer terpercaya di Malang
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Akses Transportasi:</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>• Dapat diakses dengan kendaraan pribadi</p>
                      <p>• Dekat dengan angkutan umum</p>
                      <p>• Area parkir tersedia</p>
                    </div>
                  </div>
                  <Button 
                    variant="maps"
                    size="lg"
                    onClick={handleMaps}
                    className="w-full mt-4"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    Buka Google Maps
                  </Button>
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
            Masih Ada Pertanyaan?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/80">
            Tim customer service kami siap membantu Anda kapan saja
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="whatsapp" 
              size="lg" 
              onClick={handleWhatsApp}
              className="text-lg px-8 py-3"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat Sekarang
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

export default Kontak;