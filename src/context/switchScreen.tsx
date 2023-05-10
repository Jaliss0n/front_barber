import Schedules from "@/pages/schedules";
import BarberShop from "../pages/barbershop/index";

export default function switchScreen(n: number) {
  switch (n) {
    case 1:
      return <BarberShop />;
    case 2:
      return <Schedules />;
  }
}
