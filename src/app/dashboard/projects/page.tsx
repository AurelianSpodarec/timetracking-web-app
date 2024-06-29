
const projects = [
  {
    name: "Client Work",
    totalHours: "324:42",
    totalBilled: "$53,098",
    isActive: true
    // children: []
  },
  {
    name: "Email Marketing",
    totalHours: "282:42:12",
    totalBilled: "$53,098"
  },
  {
    name: "Mentoring",
    totalHours: "324:42",
    totalBilled: "$53,098"
  }
]

function PageProjects() {
  return (
    <div className="p-4 text-white">

      <div className="flex">

        <div className="w-[300px] space-y-2">
          {projects.map((item) => {
            return (
              <div className={`${item.isActive ? "bg-[#00a9b0]" : "hover:bg-[#00a9b0]/70"} cursor-pointer text-white px-5 py-3 rounded-md`}>
                <div className="flex justify-between">
                  <div className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-5 h-5 fill-orange-400"
                      viewBox="0 0 512 512"
                    >
                      <path d="M496 152a56 56 0 00-56-56H220.11a23.89 23.89 0 01-13.31-4L179 73.41A55.77 55.77 0 00147.89 64H72a56 56 0 00-56 56v48a8 8 0 008 8h464a8 8 0 008-8zM16 392a56 56 0 0056 56h368a56 56 0 0056-56V216a8 8 0 00-8-8H24a8 8 0 00-8 8z"></path>
                    </svg>
                    <span>{item.name}</span>
                  </div>
                  {/* <span>{item.totalHours}</span> */}
                </div>
              </div>
            )
          })}
        </div>
        <div className="p-4">
          Projects List
          <div>
            logo
            Project Name
            Total Hours
            Users
          </div>

          {/* // Tasks
      Jun 24- Jun 30 - this week 10hours
      <div>
        24 Monday - 10:00 hours
        expand: show breakdownf hours
        - Design: 5hours
        - Programming: 5hours
      </div> */}

          Clients
          Team

        </div>

      </div>

    </div >
  );
}

export default PageProjects
