"use client"

import { routes } from "@/infra"
import { NumberUtils } from "@/utils"
import { bgs, extras } from "@/utils/image-exporter"
import Image from "next/image"
import { useRouter } from "next/navigation"

export interface IMCard {
  card_number: string
  balance: number
  hodler: string
  clickable?: boolean
}

export function MCardAccount({ balance, card_number, hodler, clickable = true }: IMCard) {
  const router = useRouter()

  return (
    <div onClick={() => clickable ? router.push(routes.CONSULTS_ROUTE) : null} className="w-[359px] font-mono  relative h-[222px] my- rounded-3xl mx-auto bg-primar">
      <Image src={bgs.ms_card_account_lines} className="-z10" alt="" />
      <div className="container absolute px-10 pt-[11vh] top-0 bottom-0 left-0 right-0">
        <h2 className="text-lg text-white">{card_number}</h2>

        <div className="flex justify-between mt-4 text-xl text-white">
          <span className="font-bold">{hodler}</span>
          <span className="font-bold"></span>
        </div>
      </div>
    </div>
  )
}