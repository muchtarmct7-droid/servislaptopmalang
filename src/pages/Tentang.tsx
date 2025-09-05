import { Phone, MapPin, Users, Award, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Tentang = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/6285156023406", "_blank");
  };

  const handleMaps = () => {
    window.open("https://maps.app.goo.gl/Jtxje7RakB3fS3yD7", "_blank");
  };

  const values = [
    {
      icon: <Award className="w-8 h-8 text-success-green" />,
      title: "Kualitas Terjamin",
      description: "Setiap servis dan sparepart melalui quality control ketat untuk memastikan kepuasan pelanggan"
    },
    {
      icon: <Clock className="w-8 h-8 text-success-green" />,
      title: "Pelayanan Cepat",
      description: "Kami mengutamakan kecepatan tanpa mengorbankan kualitas dalam setiap pekerjaan"
    },
    {
      icon: <Shield className="w-8 h-8 text-success-green" />,
      title: "Terpercaya",
      description: "Dipercaya ratusan pelanggan di Malang dengan track record yang konsisten"
    },
    {
      icon: <Users className="w-8 h-8 text-success-green" />,
      title: "Tim Profesional",
      description: "Teknisi berpengalaman dan bersertifikat yang selalu update dengan teknologi terbaru"
    }
  ];

  const milestones = [
    { year: "2022", event: "Pendirian Risalamoon Notebook di Malang" },
    { year: "2023", event: "Ekspansi layanan antar jemput dan sparepart" },
    { year: "2024", event: "500+ pelanggan puas dan rating 4.9/5 di Google" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tentang Risalamoon Notebook
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Risalamoon Notebook hadir di Malang sebagai pusat servis laptop & komputer 
              terpercaya. Dengan tim berpengalaman, kami selalu mengutamakan kualitas, 
              kecepatan, dan kepuasan pelanggan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="whatsapp" 
                size="lg" 
                onClick={handleWhatsApp}
              >
                <Phone className="w-5 h-5 mr-2" />
                Hubungi Kami
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

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 border-success-green">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-center">Visi Kami</h2>
                <p className="text-lg text-muted-foreground text-center leading-relaxed">
                  Menjadi pusat servis laptop dan komputer terdepan di Malang yang 
                  dikenal karena kualitas, kecepatan, dan kepercayaan pelanggan.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-success-green">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-center">Misi Kami</h2>
                <p className="text-lg text-muted-foreground text-center leading-relaxed">
                  Memberikan solusi teknologi terbaik dengan layanan profesional, 
                  harga terjangkau, dan sparepart berkualitas untuk semua kebutuhan digital Anda.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-lg text-muted-foreground">
              Prinsip yang menjadi landasan dalam setiap pelayanan yang kami berikan
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perjalanan Kami
            </h2>
            <p className="text-lg text-muted-foreground">
              Milestone penting dalam perjalanan Risalamoon Notebook
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center">
                      <span className="text-success-foreground font-bold text-lg">
                        {milestone.year}
                      </span>
                    </div>
                  </div>
                  <Card className="flex-1">
                    <CardContent className="p-4">
                      <p className="text-foreground font-medium">{milestone.event}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tim Profesional Kami
            </h2>
            <p className="text-lg text-muted-foreground">
              Didukung oleh teknisi berpengalaman yang siap melayani kebutuhan teknologi Anda
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-success-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Teknisi Hardware</h3>
                <p className="text-muted-foreground">Spesialis perbaikan komponen fisik laptop dan komputer</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-success-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Teknisi Software</h3>
                <p className="text-muted-foreground">Ahli dalam instalasi OS, recovery data, dan troubleshooting</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-success-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer Service</h3>
                <p className="text-muted-foreground">Pelayanan konsultasi dan support untuk kepuasan pelanggan</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Bekerja Sama dengan Kami?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/80">
            Mari wujudkan solusi teknologi terbaik untuk kebutuhan Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="whatsapp" 
              size="lg" 
              onClick={handleWhatsApp}
              className="text-lg px-8 py-3"
            >
              <Phone className="w-5 h-5 mr-2" />
              Hubungi Kami
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

export default Tentang;