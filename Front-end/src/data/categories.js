// Categorie predefinite per il financial manager
// Ogni categoria ha: id, name, icon (nome icona lucide), color (tailwind bg class), type (expense/income/both)

export const categories = [
    // Uscite
    { id: 1,  name: "Alimentari",       icon: "ShoppingCart",   color: "bg-red-100 text-red-600",           type: "expense" },
    { id: 2,  name: "Trasporti",        icon: "BusFront",       color: "bg-red-100 text-red-600",           type: "expense" },
    { id: 3,  name: "Casa",             icon: "House",          color: "bg-red-100 text-red-600",           type: "expense" },
    { id: 4,  name: "Salute",           icon: "HeartPulse",     color: "bg-red-100 text-red-600",           type: "expense" },
    { id: 5,  name: "Svago",            icon: "Gamepad2",       color: "bg-red-100 text-red-600",           type: "expense" },
    { id: 6,  name: "Abbigliamento",    icon: "ShoppingBag",    color: "bg-red-100 text-red-600",           type: "expense" },
    { id: 7,  name: "Istruzione",       icon: "BookOpen",       color: "bg-red-100 text-red-600",           type: "expense" },
    { id: 8,  name: "Ristoranti",       icon: "UtensilsCrossed",color: "bg-red-100 text-red-600",           type: "expense" },
    { id: 9,  name: "Bollette",         icon: "Zap",            color: "bg-red-100 text-red-600",           type: "expense" },
    { id: 10, name: "Viaggi",           icon: "Plane",          color: "bg-red-100 text-red-600",           type: "expense" },

    // Entrate
    { id: 11, name: "Stipendio",        icon: "Briefcase",      color: "bg-green-100 text-green-600",       type: "income" },
    { id: 12, name: "Extra",            icon: "Laptop",         color: "bg-green-100 text-green-600",       type: "income" },
    { id: 13, name: "Investimenti",     icon: "TrendingUp",     color: "bg-green-100 text-green-600",       type: "income" },
    { id: 14, name: "Regali",           icon: "Gift",           color: "bg-green-100 text-green-600",       type: "income" },

    // Risparmi
    { id: 15, name: "Investimenti",        icon: "TrendingUp",      color: "bg-yellow-100 text-yellow-600",     type: "save" },
    { id: 16, name: "Viaggi",              icon: "Plane",           color: "bg-yellow-100 text-yellow-600",     type: "save" },
    { id: 17, name: "Fondo pensione",      icon: "PiggyBank",       color: "bg-yellow-100 text-yellow-600",     type: "save" },
    { id: 18, name: "Auto",                icon: "Car",             color: "bg-yellow-100 text-yellow-600",     type: "save" },
];