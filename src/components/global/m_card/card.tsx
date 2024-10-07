import { NumberUtils } from "@/utils"
import { extras } from "@/utils/image-exporter"
import Image from "next/image"

export interface IMCard {
  card_number: string
  balance: number
  hodler: string
  provider: string
}

export function MCard({ balance, card_number, hodler, provider }: IMCard) {
  return (
    <div className="w-[359px] font-mono  relative h-[226px] my-8 rounded-3xl mx-auto bg-primary">
      <Image src={extras.m_card} className="-z10" alt="" />
      <div className="container absolute px-6 pt-[10vh] top-0 bottom-0 left-0 right-0">
        <h2 className="text-lg text-white">{card_number}</h2>
        <div className="mt-4 text-center">
          <b className="text-2xl text-white">{NumberUtils.formatCurrency(balance)}</b>
        </div>
        <br />
        <div className="flex justify-between text-sm text-white">
          <span className="font-bold">{hodler}</span>
          <span className="font-bold">{provider}</span>
        </div>
      </div>
    </div>
  )
}