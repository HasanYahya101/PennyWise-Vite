import { Button } from "@/components/ui/button"
import { useState } from "react"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsivePie } from "@nivo/pie"

export function Playground() {



    return (
        (<div className="grid min-h-screen w-full grid-cols-[260px_1fr]">
            <div className="bg-gray-100 dark:bg-gray-800 px-4 py-6">
                <div className="flex h-full flex-col gap-6">
                    <div className="flex items-center gap-2 ml-6" href="#">
                        <WalletIcon className="h-6 w-6" />
                        <span className="text-lg font-semibold">Expense Tracker</span>
                    </div>
                    <nav className="flex flex-col gap-2">
                        <Button variant="ghost"
                            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                            href="#">
                            <DollarSignIcon className="h-4 w-4" />
                            Income
                        </Button>
                        <Button variant="ghost"
                            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                            href="#">
                            <ReceiptIcon className="h-4 w-4" />
                            Expenses
                        </Button>
                        <Button variant="ghost"
                            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                            href="#">
                            <BarChartIcon className="h-4 w-4" />
                            Reports
                        </Button>
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
                    <div className="grid gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Total Income</CardTitle>
                                <CardDescription>All income transactions for the current month.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-4xl font-bold">$</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Add Income</CardTitle>
                                <CardDescription>Record a new income transaction.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form>
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
                                            Add Income
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Total Expenses</CardTitle>
                                <CardDescription>All expense transactions for the current month.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-4xl font-bold">$</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Add Expense</CardTitle>
                                <CardDescription>Record a new expense transaction.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form>
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
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Balance</CardTitle>
                                <CardDescription>The difference between your total income and total expenses.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-4xl font-bold ">$</div>
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
                </main>
            </div>
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


function ReceiptIcon(props) {
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
                d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
            <path d="M12 17.5v-11" />
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

