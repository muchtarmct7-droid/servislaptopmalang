import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-success-green mb-4">404</div>
        <h1 className="text-3xl font-bold mb-4 text-foreground">Halaman Tidak Ditemukan</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman tersebut telah dipindahkan atau dihapus.
        </p>
        <div className="space-y-4">
          <Button 
            variant="default"
            size="lg"
            onClick={handleGoHome}
            className="w-full"
          >
            <Home className="w-5 h-5 mr-2" />
            Kembali ke Beranda
          </Button>
          <Button 
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
            className="w-full"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Kembali ke Halaman Sebelumnya
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
