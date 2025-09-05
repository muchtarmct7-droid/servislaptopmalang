import { Phone, Star, Quote, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Testimoni = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/6285156023406", "_blank");
  };

  const handleMaps = () => {
    window.open("https://maps.app.goo.gl/Jtxje7RakB3fS3yD7", "_blank");
  };

  const testimonials = [
    {
      name: "Budi Santoso",
      rating: 5,
      comment: "Pelayanan cepat dan profesional! Laptop saya yang mati total karena terkena air bisa dihidupkan lagi. Harga juga sangat terjangkau. Sangat recommended!",
      service: "Servis Laptop Acer"
    },
    {
      name: "Sari Dewi",
      rating: 5,
      comment: "MacBook saya layarnya pecah, di sini diganti dengan layar original dan hasilnya sempurna. Teknisinya sangat berpengalaman dan ramah.",
      service: "Ganti Layar MacBook"
    },
    {
      name: "Ahmad Rizki",
      rating: 5,
      comment: "Keyboard laptop rusak, langsung bisa diganti hari itu juga. Stok sparepart lengkap dan kualitas bagus. Terima kasih Risalamoon!",
      service: "Ganti Keyboard"
    },
    {
      name: "Fitri Handayani",
      rating: 5,
      comment: "Laptop gaming saya overheating parah, setelah dibersihkan dan diganti thermal paste jadi dingin lagi. Pelayanan memuaskan!",
      service: "Cleaning & Maintenance"
    },
    {
      name: "Doni Pratama",
      rating: 5,
      comment: "Servis antar jemput sangat membantu karena saya tidak sempat ke toko. Laptop dikembalikan dalam kondisi normal dan bergaransi.",
      service: "Pick-up Service"
    },
    {
      name: "Linda Sari",
      rating: 5,
      comment: "Upgrade SSD dan RAM laptop lama jadi seperti baru lagi. Teknisi juga menjelaskan dengan detail tentang perawatan laptop.",
      service: "Upgrade SSD & RAM"
    }
  ];

  const stats = [
    { number: "500+", label: "Pelanggan Puas" },
    { number: "4.9/5", label: "Rating Google" },
    { number: "2 Tahun", label: "Pengalaman" },
    { number: "99%", label: "Tingkat Keberhasilan" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Testimoni Pelanggan
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Kepercayaan dan kepuasan pelanggan adalah prioritas utama kami. 
              Lihat apa kata mereka tentang layanan Risalamoon Notebook.
            </p>
            <div className="flex items-center justify-center space-x-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-success-green text-success-green" />
              ))}
              <span className="text-2xl font-bold ml-4">4.9/5</span>
              <span className="text-primary-foreground/60">dari Google Reviews</span>
            </div>
            <Button 
              variant="maps" 
              size="lg" 
              onClick={handleMaps}
            >
              <MapPin className="w-5 h-5 mr-2" />
              Lihat Semua Review di Google
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-success-green mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Apa Kata Pelanggan Kami
            </h2>
            <p className="text-lg text-muted-foreground">
              Testimoni asli dari pelanggan yang telah merasakan layanan kami
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-success-green text-success-green" />
                    ))}
                  </div>
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-success-green/30 mb-2" />
                    <p className="text-muted-foreground leading-relaxed">
                      {testimonial.comment}
                    </p>
                  </div>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-success-green">
                      {testimonial.service}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Review CTA */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pengalaman Serupa Menunggu Anda
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Bergabunglah dengan ratusan pelanggan yang telah merasakan pelayanan 
              terbaik dari Risalamoon Notebook. Kepuasan Anda adalah kebanggaan kami.
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
                Kunjungi Toko Kami
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sudah Pernah Servis di Sini?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/80">
            Tinggalkan review Anda di Google Maps untuk membantu pelanggan lain
          </p>
          <Button 
            variant="maps" 
            size="lg" 
            onClick={handleMaps}
            className="text-lg px-8 py-3"
          >
            <Star className="w-5 h-5 mr-2" />
            Beri Review di Google
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Testimoni;