// function AuthLayout({ children }) {
//   return (
//     <div className="">
//       <img
//         className="absolute h-full w-full no-repeat object-cover "
//         src="https://img.freepik.com/premium-photo/vector-illustration-concept-business-workflow-time-management-planning-task-app-teamwork-meeting-creative-flat-design-web-banner-marketing-material-generative-ai_1001448-267.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699315200&semt=ais"
//       />
//       <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/70" />

//       <div className="relative">
//         {children}
//       </div>
//     </div>
//   );
// }

// export default AuthLayout


function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full">
      {/* <img
        className="absolute h-full w-full no-repeat object-cover "
        src="https://img.freepik.com/premium-photo/vector-illustration-concept-business-workflow-time-management-planning-task-app-teamwork-meeting-creative-flat-design-web-banner-marketing-material-generative-ai_1001448-267.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699315200&semt=ais"
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/70" />
      <div className="relative w-full h-full"> */}
        {children}
      {/* </div> */}
    </div>
  )
}

export default AuthLayout
