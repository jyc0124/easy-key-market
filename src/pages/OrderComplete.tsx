import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { OrderInfo } from "@/types/product";

const OrderComplete = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderInfo = location.state?.orderInfo as OrderInfo | undefined;

  useEffect(() => {
    if (!orderInfo) {
      navigate("/");
    }
  }, [orderInfo, navigate]);

  if (!orderInfo) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-8 text-center">
              <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-3xl font-bold mb-2">주문이 완료되었습니다!</h1>
              <p className="text-muted-foreground mb-8">
                주문번호: {orderInfo.orderId}
              </p>

              <div className="bg-secondary/50 rounded-lg p-6 mb-8 text-left">
                <h2 className="font-semibold mb-4">주문자 정보</h2>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">이름</span>
                    <span className="font-medium">{orderInfo.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">이메일</span>
                    <span className="font-medium">{orderInfo.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">휴대폰</span>
                    <span className="font-medium">{orderInfo.phone}</span>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/50 rounded-lg p-6 mb-8 text-left">
                <h2 className="font-semibold mb-4">주문 상품</h2>
                <div className="space-y-3">
                  {orderInfo.items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-muted-foreground">
                          {item.quantity}개 × {item.price.toLocaleString()}원
                        </p>
                      </div>
                      <p className="font-medium">
                        {(item.price * item.quantity).toLocaleString()}원
                      </p>
                    </div>
                  ))}
                  <div className="border-t pt-3 flex justify-between font-bold">
                    <span>총 결제 금액</span>
                    <span className="text-primary text-lg">
                      {orderInfo.total.toLocaleString()}원
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                입력하신 이메일로 주문 확인 메일이 발송됩니다.
              </p>

              <Button
                size="lg"
                onClick={() => navigate("/")}
                className="w-full"
              >
                쇼핑 계속하기
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default OrderComplete;
