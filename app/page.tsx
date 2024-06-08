import Image from "next/image";
import Countdown from "@/app/Countdown";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h1 className="font-bold text-4xl text-blue-700">MVG</h1>
                <p className="text-gray-500">Maxvorstadt Gang</p>
                <p className="mt-8">Heute Saufen bei Jonas auf der Terasse. Start 8 Uhr</p>

                <Countdown  date={new Date("2024-06-08T20:00:00")} />
            </div>
        </main>
    );
}