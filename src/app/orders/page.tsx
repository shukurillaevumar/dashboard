// app/orders/page.tsx
import { Suspense } from "react";
import OrdersPage from "@/components/OrdersPage"; // путь у тебя может отличаться

export default function Orders() {
  return (
    <Suspense fallback={<div>Loading orders...</div>}>
      <OrdersPage />
    </Suspense>
  );
}
