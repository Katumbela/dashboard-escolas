import { CalendarClock, CreditCard, Package, Users, Wallet } from "lucide-react";

const cardDetails = [
  {
    icon: CalendarClock,
    title: "Actividades Recentes",
    url: "/dashboard/orders",
    color: "text-danger",
    bgcolor: "bg-danger",
    value: 120,
  },
  {
    icon: CreditCard,
    title: "Pagamentos",
    url: "/dashboard/revenue",
    color: "text-indigo-500",
    bgcolor: "bg-indigo-500",
    value: 1399,
    percentage: { increased: true, value: 43 },
  },
  {
    icon: Users,
    title: "Estudantes matriculados",
    url: "/dashboard/customers",
    color: "text-[#23B7E5]",
    bgcolor: "bg-[#23B7E5]",
    value: 970,
    percentage: { increased: true, value: 43 },
  },
  {
    icon: Wallet,
    title: "Ganhos",
    url: "/dashboard/revenue",
    color: "text-[#F5B849]",
    bgcolor: "bg-[#F5B849]",
    value: 12030849,
    percentage: { increased: true, value: 43 },
    isCurrency: true,
  },
];

const topCustomersData = [
  {
    image: "https://i.pravatar.cc/150?u=a04258114e29026",
    amountSpent: 22390,
    name: "Maia Hancock",
    purchases: 23,
    lastPurchase: "5 horas",
  },
  {
    image: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    amountSpent: 12900,
    name: "Jane Doe",
    purchases: 16,
    lastPurchase: "1 dia",
  },
  {
    image: "https://i.pravatar.cc/150?u=a04258114e29026702",
    amountSpent: 10900,
    name: "Regan Keith",
    purchases: 13,
    lastPurchase: "1 dia",
  },
  {
    image: "https://i.pravatar.cc/150?u=a04258114e290",
    amountSpent: 8990,
    name: "Skyler Powell",
    purchases: 10,
    lastPurchase: "7 dias",
  },
  {
    image: "https://i.pravatar.cc/150?u=a04258114e2902",
    amountSpent: 8930,
    name: "Andrew Sims",
    purchases: 8,
    lastPurchase: "7 dias",
  },
  {
    image: "https://i.pravatar.cc/150?u=a04258114e290267",
    amountSpent: 7790,
    name: "Braxton Mcdonald",
    purchases: 8,
    lastPurchase: "1 semana",
  },
  {
    image: "https://i.pravatar.cc/150?u=a04258114e2902670",
    amountSpent: 5690,
    name: "Jasmin Morgan",
    purchases: 5,
    lastPurchase: "2 semanas",
  },
];

const topSalesData = [
  {
    image: "https://i.pravatar.cc/150?u=a04258114e29026702",
    amountSpent: 22390,
    name: "Regan Keith",
    items: 5,
    lastPurchase: "1 dia",
  },
  {
    image: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    amountSpent: 12900,
    name: "Jane Doe",
    items: 4,
    lastPurchase: "2 dias",
  },
  {
    image: "https://i.pravatar.cc/150?u=a04258114e29026",
    amountSpent: 1900,
    name: "Maia Hancock",
    items: 3,
    lastPurchase: "2 dias",
  },
  {
    image: "https://i.pravatar.cc/150?u=a04258114e290",
    amountSpent: 8990,
    name: "Skyler Powell",
    items: 1,
    lastPurchase: "3 dias",
  },
  {
    image: "https://i.pravatar.cc/150?u=a04258114e2902",
    amountSpent: 8930,
    name: "Andrew Sims",
    items: 2,
    lastPurchase: "4 dias",
  },
  {
    image: "https://i.pravatar.cc/150?u=a04258114e290267",
    amountSpent: 7790,
    name: "Braxton Mcdonald",
    items: 2,
    lastPurchase: "4 dias",
  },
  {
    image: "https://i.pravatar.cc/150?u=a04258114e2902670",
    amountSpent: 1690,
    name: "Jasmin Morgan",
    items: 1,
    lastPurchase: "5 dias",
  },
];

const revenueData = {
  weeklyData: [
    {
      name: "Sáb",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Dom",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Seg",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Ter",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Qua",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Qui",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Sex",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
  ],
  monthlyData: [
    {
      name: "1-5",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "6-10",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "11-15",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "16-20",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "21-25",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "26-30",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
  ],
  yearlyData: [
    {
      name: "Jan",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Fev",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Mar",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Abr",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Mai",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jun",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jul",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Ago",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Set",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Out",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Nov",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Dez",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
  ],
};

const newCustomerRegisters = {
  weeklyData: [
    {
      name: "Sáb",
      uv: 100,
      amt: 2400,
    },
    {
      name: "Dom",
      uv: 200,
      amt: 2210,
    },
    {
      name: "Seg",
      uv: 150,
      amt: 2290,
    },
    {
      name: "Ter",
      uv: 300,
      amt: 2000,
    },
    {
      name: "Qua",
      uv: 200,
      amt: 2181,
    },
    {
      name: "Qui",
      uv: 400,
      amt: 2500,
    },
    {
      name: "Sex",
      uv: 219,
      amt: 2100,
    },
  ],
  monthlyData: [
    {
      name: "1-5",
      uv: 1000,
      amt: 2400,
    },
    {
      name: "6-10",
      uv: 2000,
      amt: 2210,
    },
    {
      name: "11-15",
      uv: 1500,
      amt: 2290,
    },
    {
      name: "16-20",
      uv: 3000,
      amt: 2000,
    },
    {
      name: "21-25",
      uv: 2000,
      amt: 2181,
    },
    {
      name: "26-30",
      uv: 4000,
      amt: 2500,
    },
  ],
  yearlyData: [
    {
      name: "Jan",
      uv: 10000,
      amt: 2400,
    },
    {
      name: "Fev",
      uv: 20000,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 15000,
      amt: 2290,
    },
    {
      name: "Abr",
      uv: 30000,
      amt: 2000,
    },
    {
      name: "Mai",
      uv: 20000,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 40000,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 21900,
      amt: 2100,
    },
    {
      name: "Ago",
      uv: 30900,
      amt: 2100,
    },
    {
      name: "Set",
      uv: 10000,
      amt: 2100,
    },
    {
      name: "Out",
      uv: 15500,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 20000,
      amt: 2100,
    },
    {
      name: "Dez",
      uv: 30000,
      amt: 2100,
    },
  ],
};

const productOrders = {
  weeklyData: [
    {
      name: "Sáb",
      uv: 10,
      amt: 2400,
    },
    {
      name: "Dom",
      uv: 20,
      amt: 2210,
    },
    {
      name: "Seg",
      uv: 15,
      amt: 2290,
    },
    {
      name: "Ter",
      uv: 30,
      amt: 2000,
    },
    {
      name: "Qua",
      uv: 20,
      amt: 2181,
    },
    {
      name: "Qui",
      uv: 40,
      amt: 2500,
    },
    {
      name: "Sex",
      uv: 21,
      amt: 2100,
    },
  ],
  monthlyData: [
    {
      name: "1-5",
      uv: 100,
      amt: 2400,
    },
    {
      name: "6-10",
      uv: 200,
      amt: 2210,
    },
    {
      name: "11-15",
      uv: 150,
      amt: 2290,
    },
    {
      name: "16-20",
      uv: 300,
      amt: 2000,
    },
    {
      name: "21-25",
      uv: 200,
      amt: 2181,
    },
    {
      name: "26-30",
      uv: 400,
      amt: 2500,
    },
  ],
  yearlyData: [
    {
      name: "Jan",
      uv: 1000,
      amt: 2400,
    },
    {
      name: "Fev",
      uv: 2000,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 1500,
      amt: 2290,
    },
    {
      name: "Abr",
      uv: 3000,
      amt: 2000,
    },
    {
      name: "Mai",
      uv: 2000,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 4000,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 2190,
      amt: 2100,
    },
    {
      name: "Ago",
      uv: 3000,
      amt: 2100,
    },
    {
      name: "Set",
      uv: 1000,
      amt: 2100,
    },
    {
      name: "Out",
      uv: 1550,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 2000,
      amt: 2100,
    },
    {
      name: "Dez",
      uv: 3000,
      amt: 2100,
    },
  ],
};

export {
  cardDetails,
  revenueData,
  topSalesData,
  topCustomersData,
  newCustomerRegisters,
  productOrders,
};
