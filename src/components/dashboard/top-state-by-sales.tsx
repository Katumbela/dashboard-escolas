import { Button, Card, CardBody } from "@nextui-org/react";
import { ChevronRight } from "lucide-react";

const topStateData = [
  { state: "1º ano ", value: "1221", progressPercentage: 85 },
  { state: "2º ano", value: "1017", progressPercentage: 75 },
  { state: "3º ano", value: "798", progressPercentage: 50 },
  { state: "4º ano", value: "567", progressPercentage: 30 },
  { state: "5º ano", value: "436", progressPercentage: 21 },
];

const TopStateBySales = () => {
  return (
    <Card className="shadow-md">
      <CardBody>
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-medium">Resumo por nível</h1>
        </div>
        <ul className="mt-4 space-y-3 ps-1">
          {topStateData.map((data, i) => (
            <StateList {...data} key={i} />
          ))}
        </ul>
      </CardBody>
    </Card>
  );
};

export default TopStateBySales;

function StateList({
  state,
  progressPercentage,
  value,
}: {
  state: string;
  value: string;
  progressPercentage: string | number;
}) {
  return (
    <>
      <li className="relative flex items-center justify-between rounded-md border px-3 py-2 text-sm">
        <div
          className="absolute left-0 h-full rounded-md bg-primary/30"
          style={{ width: `${progressPercentage}%` }}
        ></div>
        <span className="z-10">{state}</span>
        <span>{value}</span>
      </li>
    </>
  );
}
