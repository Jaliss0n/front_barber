import Schedules from "@/pages/schedules";
import BarberShop from "../pages/barbershop/index";
import Employees from "@/pages/employees";
import DataPage from "@/pages/dataPage";

export default function switchScreen(n: number) {
  switch (n) {
    case 1:
      return <BarberShop />;
    case 2:
      return <Schedules />;
    case 3:
      return <Employees />;
    case 4:
      return <DataPage />;
  }
}
