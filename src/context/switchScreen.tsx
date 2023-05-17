import Schedules from "@/pages/schedules";
import BarberShop from "../pages/barbershop/index";
import ModalSchedules from "@/components/modals/modalSchedules";
import Employees from "@/pages/employees";

export default function switchScreen(n: number) {
  switch (n) {
    case 1:
      return <BarberShop />;
    case 2:
      return <Schedules />;
    case 3:
      return <Employees />;
  }
}
