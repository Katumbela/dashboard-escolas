import RevenueOverview from "@/components/dashboard/revenue/revenue-overview";
import SummaryCard from "@/components/dashboard/summary/summary-card";
import Nav from "@/components/nav/nav";
import TopSales from "@/components/revenue/top-sales";
import { revenueData, topSalesData } from "@/lib/data";
import { Package, Receipt, Wallet } from "lucide-react";

const Revenue = async () => {
  return (
    <Nav>
      <h1 className="text-zinc-400 md:text-xl">Ganhos</h1>
      <div className="mb-10 mt-5 @container">
        <div className="grid grid-cols-1 gap-3 @md:grid-cols-2 @4xl:grid-cols-4">
          <SummaryCard
            bgcolor="bg-indigo-500"
            color="text-indigo-500"
            icon={Wallet}
            title="Total de ganhos"
            value={8393399}
            isCurrency
            percentage={{ increased: true, value: 12 }}
          />
          <SummaryCard
            bgcolor="bg-[#23B7E5]"
            color="text-[#23B7E5]"
            icon={Receipt}
            title="Facturas emitidas"
            value={120}
            percentage={{ increased: true, value: 5 }}
          />
          <SummaryCard
            bgcolor="bg-success"
            color="text-success"
            icon={Wallet}
            title="Pagamentos realizados"
            value={1099039}
            isCurrency
            percentage={{ increased: true, value: 9 }}
          />
          <SummaryCard
            bgcolor="bg-danger"
            color="text-danger"
            icon={Wallet}
            title="Pagamentos em falta"
            value={1099}
            isCurrency
            percentage={{ increased: true, value: 9 }}
          />
        </div>
        <div className="my-10 grid grid-cols-1 @3xl:grid-cols-5 md:gap-3">
          <RevenueOverview data={revenueData} />
          <TopSales data={topSalesData} />
        </div>
      </div>
    </Nav>
  );
};

export default Revenue;
