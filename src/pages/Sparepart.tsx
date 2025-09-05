import { Phone, Package, Users, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import componentsImage from "@/assets/laptop-components.jpg";

const Sparepart = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/6285156023406", "_blank");
  };

  const categories = [
    {
      title: "Keyboard & Input",
      items: ["Keyboard laptop semua merk", "Trackpad & touchpad", "Keyboard mechanical", "Mouse & aksesoris"]
    },
    {
      title: "Display & Screen",
      items: ["Layar LED/LCD semua ukuran", "Touch screen", "Kabel flexible LCD", "Inverter & backlight"]
    },
    {
      title: "Power & Battery",
      items: ["Adaptor/charger original", "Baterai laptop semua merk", "Kabel power & DC jack", "Power supply desktop"]
    },
    {
      title: "Storage & Memory",
      items: ["SSD & HDD semua kapasitas", "RAM DDR3/DDR4/DDR5", "Memory card & flashdisk", "Enclosure & caddy"]
    },
    {
      title: "Motherboard & Processor",
      items: ["Motherboard laptop & desktop", "Processor Intel & AMD", "VGA card & cooling", "Chipset & IC komponen"]
    },
    {
      title: "Casing & Mechanical",
      items: ["Casing laptop semua part", "Engsel & hinge", "Cooling fan & heatsink", "Kabel internal & connector"]
    }
  ];

  const customerTypes = [
    {
      icon: <Users className="w-8 h-8 text-success-green" />,
      title: "End User",
      description: "Pelanggan individu yang membutuhkan sparepart untuk keperluan pribadi",
      benefits: ["Harga retail terjangkau", "Garansi sparepart", "Konsultasi gratis", "Panduan instalasi"]
    },
    {
      icon: <Store className="w-8 h-8 text-success-green" />,
      title: "Reseller",
      description: "Toko komputer dan teknisi yang membutuhkan stok sparepart reguler",
      benefits: ["Harga grosir khusus", "Stok ready & update", "Support teknis", "Sistem pembayaran fleksibel"]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Sparepart Laptop & Komputer Terlengkap
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Menyediakan sparepart original dan compatible untuk semua kebutuhan 
                servis internal, end user, maupun reseller.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="whatsapp" 
                  size="lg" 
                  onClick={handleWhatsApp}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Tanya Stok & Harga
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-strong">
                <img 
                  src={componentsImage} 
                  alt="Sparepart laptop dan komputer Risalamoon Notebook" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kategori Sparepart Tersedia
            </h2>
            <p className="text-lg text-muted-foreground">
              Stok lengkap untuk semua kebutuhan laptop dan komputer Anda
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Package className="w-6 h-6 text-success-green" />
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-success-green rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Melayani Berbagai Kebutuhan
            </h2>
            <p className="text-lg text-muted-foreground">
              Sistem harga dan pelayanan yang disesuaikan dengan kebutuhan Anda
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {customerTypes.map((type, index) => (
              <Card key={index} className="border-2 hover:border-success-green transition-colors duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {type.icon}
                    <div>
                      <CardTitle className="text-2xl">{type.title}</CardTitle>
                      <p className="text-muted-foreground mt-2">{type.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3 text-foreground">Keuntungan:</h4>
                  <div className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-success-green rounded-full"></div>
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Kualitas & Garansi Terjamin
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                  <Package className="w-8 h-8 text-success-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Original & Compatible</h3>
                <p className="text-muted-foreground">Sparepart original dan compatible berkualitas tinggi</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-success-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Support Teknis</h3>
                <p className="text-muted-foreground">Tim support siap membantu instalasi dan troubleshooting</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                  <Store className="w-8 h-8 text-success-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Stok Update</h3>
                <p className="text-muted-foreground">Stok selalu terupdate dan ready untuk kebutuhan mendesak</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Butuh Sparepart Sekarang?
          </h2>
          <p className="text-xl mb-6 text-primary-foreground/80">
            Hubungi kami untuk cek stok dan dapatkan harga terbaik
          </p>
          <p className="text-lg mb-8 text-primary-foreground/60">
            Stok ready • Harga bersaing • Garansi resmi
          </p>
          <Button 
            variant="whatsapp" 
            size="lg" 
            onClick={handleWhatsApp}
            className="text-lg px-8 py-3"
          >
            <Phone className="w-5 h-5 mr-2" />
            Chat WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Sparepart;