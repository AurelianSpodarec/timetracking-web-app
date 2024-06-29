import ChartLine from "@/components/organisms/Charts/ChartLine";
import ChartPie from "@/components/organisms/Charts/ChatPie";

function PageCharts() {
  return (
    <div>
      <section>
        <div className="grid grid-cols-2  gap-4 h-auto">
          <div className="h-full">
            <h1 className="text-2xl font-semibold mb-6">Programming Languages</h1>
            <div className="h-[400px]">
              <ChartLine aspect={1.7} legend={true} xAxie={true} yAxie={true} />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-6">Statsitics Pie Chart</h1>
            <div className="h-[400px]">
              <ChartPie legend={true} xAxie={true} yAxie={true} toolTip={true} />
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default PageCharts;
