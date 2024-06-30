import { Button } from "@/components/atoms/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Clients
// See all projects with this client
// - total earnings
// - total hours
// - start date
// - last updated
// - status: active, paused, closed

const clients = [
  {
    id: "google",
    client: "Google",
    slug: "google",
    totalHours: "482:23:59",
    totalEarnings: "$138,294.43",
    status: "active"
  }
]

// Single View

// View client
// Change status
// Invoices? Reports? Statistics? Earnings? Members worked? 

// Have any links or such inthe client, maybe even  project
// So prople can put their notion links htere, all in once place
// Client contact information: 
// client industry
// priority
// total developers (total project of users)

// MVP



function PageClients() {
  return (
    <div className="text-white">

      <section className="bg-white text-black p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Clients</h1>
          <Button label="Add Client" />
        </div>
      </section>

      <section className="p-4">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Client</TableHead>
              <TableHead className="">Status</TableHead>
              <TableHead>Total Earnings</TableHead>
              <TableHead>Total Hours</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((item) => {
              return (
                <TableRow>
                  <TableCell className="font-medium">{item.client}</TableCell>
                  <TableCell className="">{item.status}</TableCell>
                  <TableCell>{item.totalEarnings}</TableCell>
                  <TableCell>{item.totalHours}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </section>

    </div>
  );
}

export default PageClients
