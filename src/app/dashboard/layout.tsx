import { auth } from "@/auth";

async function DashboardLayout() {
  const session = await auth()
  console.log("dashboard layout", session)
  return (
    <div>
      DashboardLayout ID: {session?.user?.email}
    </div>
  );
}

export default DashboardLayout
