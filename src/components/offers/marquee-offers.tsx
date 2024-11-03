"use client";

import { Card, CardBody } from "@nextui-org/react";
import MarqueeOffersTable from "./tables/marquee-offers-table";
import CreateOffers from "../dialog/marquee-offers/create-offers";
import { useState } from "react";

// Importação somente de tipo para evitar conflito
import type { MarqueeOffers as MarqueeOffersType } from "@prisma/client";

const MarqueeOffers = ({ offers }: { offers: MarqueeOffersType[] }) => {
  const [offersData, setOffersData] = useState<MarqueeOffersType[] | null>(
    offers
  );

  return (
    <Card className="my-5 shadow-md @container">
      <CardBody>
        <div className="mb-4 flex items-center justify-between">
          <h1 className="font-medium md:text-lg">Calendário de provas</h1>
          <CreateOffers setOffersData={setOffersData} />
        </div>
        <MarqueeOffersTable data={offersData} setOffersData={setOffersData} />
      </CardBody>
    </Card>
  );
};

export default MarqueeOffers;
