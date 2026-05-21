import {AthleteDashboard} from "@/modules/athlete/components/AthleteDashboard";
import { DashboardLayout } from "@/components/layout/DashboardLayout"

export default function AthletePage() {
  return (
    <DashboardLayout>
      <AthleteDashboard />
    </DashboardLayout>
  )
}