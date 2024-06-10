import { Button } from "@/components/ui/button"
import { useState } from "react"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsivePie } from "@nivo/pie"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"

export function Playground() {
    const { toast } = useToast();
    const [pageName, setPageName] = useState("Income");

    const [income, setIncome] = useState(0.00);

    const [expenses, setExpenses] = useState(0.00);

    const [balance, setBalance] = useState(0.00);

    const [amountinput, setAmountInput] = useState(0.00);

    const [category, setCategory] = useState("");

    const [notes, setNotes] = useState("");

    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const [todayDate, setTodayDate] = useState(getCurrentDate());

    const [incomedata, setIncomeData] = useState([]);

    function IncomeButtonClicked() {
        if (amountinput < 1) {
            toast({
                title: "Error:",
                description: "Please enter a valid amount in the input. Amount must be equal or greater than 1.",
            })
            return;
        }
        else if (category === "") {
            toast({
                title: "Error:",
                description: "Category cannot be empty. Please enter a valid category.",
            })
            return;
        }
        else if (notes === "") {
            toast({
                title: "Error:",
                description: "Notes cannot be empty. Please enter a valid note.",
            })
            return;
        }

        setIncome(income + parseFloat(amountinput));
        setBalance(balance + parseFloat(amountinput));
        setIncomeData([...incomedata, { date: todayDate, category: category, amount: amountinput, notes: notes }]);
        return;
    }

    return (
        (<div className="grid min-h-screen w-full grid-cols-[260px_1fr]">
            <div className="bg-gray-100 dark:bg-gray-800 px-4 py-6">
                <div className="flex h-full flex-col gap-6">
                    <div className="flex items-center gap-2 ml-6">
                        <WalletIcon className="h-6 w-6" />
                        <span className="text-lg font-semibold">Expense Tracker</span>
                    </div>
                    <nav className="flex flex-col gap-2">
                        {pageName !== "Income" ? (
                            <Button variant="ghost" onClick={() => setPageName("Income")}
                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                <CashIcon className="h-4 w-4" />
                                Income
                            </Button>
                        ) : (
                            <Button variant="outline" onClick={() => setPageName("Income")}
                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                <CashIcon className="h-4 w-4" />
                                Income
                            </Button>)}
                        {pageName !== "Expenses" ?
                            (
                                <Button variant="ghost" onClick={() => setPageName("Expenses")}
                                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                                >
                                    <ExpensesIcon className="h-4 w-4" />
                                    Expenses
                                </Button>) :
                            (
                                <Button variant="outline" onClick={() => setPageName("Expenses")}
                                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                                >
                                    <ExpensesIcon className="h-4 w-4" />
                                    Expenses
                                </Button>
                            )}
                        {pageName !== "Reports" ?
                            (
                                <Button variant="ghost" onClick={() => setPageName("Reports")}
                                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                                >
                                    <ReportIcon className="h-4 w-4" />
                                    Reports
                                </Button>
                            ) :
                            (
                                <Button variant="outline" onClick={() => setPageName("Reports")}
                                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                                >
                                    <ReportIcon className="h-4 w-4" />
                                    Reports
                                </Button>
                            )}
                    </nav>
                </div>
            </div>

            <div className="flex flex-col">
                <header className="bg-gray-100 dark:bg-gray-800 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-semibold">Dashboard</h1>
                        <Button size="sm" variant="outline">
                            <PlusIcon className="h-4 w-4" />
                            Add Transaction
                        </Button>
                    </div>
                </header>
                <main className="flex-1 overflow-auto p-6">
                    {pageName === "Income" ?
                        (
                            <div className="grid gap-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Total Income</CardTitle>
                                        <CardDescription>All income transactions for the current month.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-4xl font-bold text-green-600">$ {income}</div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Add Income</CardTitle>
                                        <CardDescription>Record a new income transaction.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div>
                                            <div className="grid gap-4">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="date">Date</Label>
                                                        <Input id="date" name="date" required type="date" value={todayDate} readonly className="text-black bg-white border border-gray-300 rounded px-3 py-2 pointer-events-none"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="category">Category</Label>
                                                        <Input id="category" name="category" required type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter category here..."
                                                        />
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="amount">Amount</Label>
                                                        <Input id="amount" name="amount" required type="number" onChange={(e) => setAmountInput(e.target.value)} value={amountinput} placeholder="Enter amount here..."
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="notes">Notes</Label>
                                                        <Input id="notes" name="notes" type="text" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Enter any important note here..."
                                                        />
                                                    </div>
                                                </div>
                                                <Button className="justify-self-end" onClick={IncomeButtonClicked}
                                                >
                                                    Add Income
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ) : pageName === "Expenses" ? (
                            <div className="grid gap-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Total Expenses</CardTitle>
                                        <CardDescription>All expense transactions for the current month.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-4xl font-bold text-red-600">$ {expenses}</div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Add Expense</CardTitle>
                                        <CardDescription>Record a new expense transaction.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div>
                                            <div className="grid gap-4">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="date">Date</Label>
                                                        <Input id="date" name="date" required type="date" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="category">Category</Label>
                                                        <Input id="category" name="category" required type="text" />
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="amount">Amount</Label>
                                                        <Input id="amount" name="amount" required type="number" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="notes">Notes</Label>
                                                        <Input id="notes" name="notes" type="text" />
                                                    </div>
                                                </div>
                                                <Button className="justify-self-end" type="submit">
                                                    Add Expense
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ) : (
                            <div className="grid gap-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Balance</CardTitle>
                                        <CardDescription>The difference between your total income and total expenses.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-4xl font-bold text-blue-600">$ {balance}</div>
                                    </CardContent>
                                </Card>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Income vs Expenses</CardTitle>
                                            <CardDescription>A comparison of your total income and total expenses.</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <BarChart className="aspect-[4/3]" />
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Expense Breakdown</CardTitle>
                                            <CardDescription>A breakdown of your expenses by category.</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <PieChart className="aspect-square" />
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        )}
                </main>
            </div>
            <Toaster />
        </div>)
    );
}

function BarChart(props) {
    return (
        (<div {...props}>
            <ResponsiveBar
                data={[
                    { name: "Jan", count: 111 },
                    { name: "Feb", count: 157 },
                    { name: "Mar", count: 129 },
                    { name: "Apr", count: 150 },
                    { name: "May", count: 119 },
                    { name: "Jun", count: 72 },
                ]}
                keys={["count"]}
                indexBy="name"
                margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
                padding={0.3}
                colors={["#2563eb"]}
                axisBottom={{
                    tickSize: 0,
                    tickPadding: 16,
                }}
                axisLeft={{
                    tickSize: 0,
                    tickValues: 4,
                    tickPadding: 16,
                }}
                gridYValues={4}
                theme={{
                    tooltip: {
                        chip: {
                            borderRadius: "9999px",
                        },
                        container: {
                            fontSize: "12px",
                            textTransform: "capitalize",
                            borderRadius: "6px",
                        },
                    },
                    grid: {
                        line: {
                            stroke: "#f3f4f6",
                        },
                    },
                }}
                tooltipLabel={({ id }) => `${id}`}
                enableLabel={false}
                role="application"
                ariaLabel="A bar chart showing data" />
        </div>)
    );
}


function BarChartIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <line x1="12" x2="12" y1="20" y2="10" />
            <line x1="18" x2="18" y1="20" y2="4" />
            <line x1="6" x2="6" y1="20" y2="16" />
        </svg>)
    );
}


function DollarSignIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <line x1="12" x2="12" y1="2" y2="22" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>)
    );
}


function PieChart(props) {
    return (
        (<div {...props}>
            <ResponsivePie
                data={[
                    { id: "Jan", value: 111 },
                    { id: "Feb", value: 157 },
                    { id: "Mar", value: 129 },
                    { id: "Apr", value: 150 },
                    { id: "May", value: 119 },
                    { id: "Jun", value: 72 },
                ]}
                sortByValue
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                cornerRadius={0}
                padAngle={0}
                borderWidth={1}
                borderColor={"#ffffff"}
                enableArcLinkLabels={false}
                arcLabel={(d) => `${d.id}`}
                arcLabelsTextColor={"#ffffff"}
                arcLabelsRadiusOffset={0.65}
                colors={["#2563eb"]}
                theme={{
                    labels: {
                        text: {
                            fontSize: "18px",
                        },
                    },
                    tooltip: {
                        chip: {
                            borderRadius: "9999px",
                        },
                        container: {
                            fontSize: "12px",
                            textTransform: "capitalize",
                            borderRadius: "6px",
                        },
                    },
                }}
                role="application" />
        </div>)
    );
}


function PlusIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>)
    );
}

function WalletIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path
                d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
        </svg>)
    );
}

function ReportIcon(props) {
    return (
        (<svg
            {...props}
            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29289 1.29289C9.48043 1.10536 9.73478 1 10 1H18C19.6569 1 21 2.34315 21 4V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V8C3 7.73478 3.10536 7.48043 3.29289 7.29289L9.29289 1.29289ZM18 3H11V8C11 8.55228 10.5523 9 10 9H5V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V4C19 3.44772 18.5523 3 18 3ZM6.41421 7H9V4.41421L6.41421 7ZM7 13C7 12.4477 7.44772 12 8 12H16C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H8C7.44772 14 7 13.5523 7 13ZM7 17C7 16.4477 7.44772 16 8 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H8C7.44772 18 7 17.5523 7 17Z" fill="#000000" />
        </svg>)
    );
}

function CashIcon(props) {
    return (
        (<svg
            {...props}
            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 4.44772 3.44772 4 4 4H20C20.5523 4 21 4.44772 21 5V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V5ZM4 2C2.34315 2 1 3.34315 1 5V19C1 20.6569 2.34315 22 4 22H20C21.6569 22 23 20.6569 23 19V5C23 3.34315 21.6569 2 20 2H4ZM6 8C6 7.44772 6.44772 7 7 7H17C17.5523 7 18 7.44772 18 8C18 8.55228 17.5523 9 17 9H7C6.44772 9 6 8.55228 6 8ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM6 16C6 15.4477 6.44772 15 7 15H17C17.5523 15 18 15.4477 18 16C18 16.5523 17.5523 17 17 17H7C6.44772 17 6 16.5523 6 16Z" fill="#000000" />
        </svg>
        )
    );
}

function ExpensesIcon(props) {
    return (
        (<svg
            {...props}
            width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13.0001H13M7 9.0001H9M7 17.0001H13M16 21.0001H18.5M17 21.0001H7.8C6.11984 21.0001 5.27976 21.0001 4.63803 20.6731C4.07354 20.3855 3.6146 19.9266 3.32698 19.3621C3 18.7203 3 17.8803 3 16.2001V5.75719C3 4.8518 3 4.3991 3.1902 4.13658C3.35611 3.90758 3.61123 3.75953 3.89237 3.72909C4.21467 3.6942 4.60772 3.9188 5.39382 4.368L5.70618 4.54649C5.99552 4.71183 6.14019 4.7945 6.29383 4.82687C6.42978 4.85551 6.57022 4.85551 6.70617 4.82687C6.85981 4.7945 7.00448 4.71183 7.29382 4.54649L9.20618 3.45372C9.49552 3.28838 9.64019 3.20571 9.79383 3.17334C9.92978 3.14469 10.0702 3.14469 10.2062 3.17334C10.3598 3.20571 10.5045 3.28838 10.7938 3.45372L12.7062 4.54649C12.9955 4.71183 13.1402 4.7945 13.2938 4.82687C13.4298 4.85551 13.5702 4.85551 13.7062 4.82687C13.8598 4.7945 14.0045 4.71183 14.2938 4.54649L14.6062 4.368C15.3923 3.9188 15.7853 3.6942 16.1076 3.72909C16.3888 3.75953 16.6439 3.90758 16.8098 4.13658C17 4.3991 17 4.8518 17 5.75719V14.0001M17 13.0001H21V19.0001C21 20.1047 20.1046 21.0001 19 21.0001C17.8954 21.0001 17 20.1047 17 19.0001V13.0001Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        )
    );
}