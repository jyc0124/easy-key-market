import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowLeft, ShoppingCart } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">상품을 찾을 수 없습니다</h2>
          <Button onClick={() => navigate("/")}>홈으로 돌아가기</Button>
        </div>
      </div>
    );
  }

  const imageUrl = product.image;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          상품 목록으로
        </Button>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="aspect-square overflow-hidden rounded-xl bg-secondary">
            <img
              src={imageUrl}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-medium text-muted-foreground mb-2">
              {product.category}
            </p>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-3xl font-bold text-primary mb-6">
              {product.price.toLocaleString()}원
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </p>
            
            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full"
                onClick={() => {
                  addToCart(product);
                  navigate("/cart");
                }}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                장바구니에 담기
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full"
                onClick={() => addToCart(product)}
              >
                계속 쇼핑하기
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
