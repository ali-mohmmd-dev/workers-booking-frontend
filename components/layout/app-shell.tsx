"use client";
import type { ReactNode } from "react";
import { useBooking } from "@/features/booking/booking-provider";
import { AuthScreen } from "@/features/auth/components/auth-screen";
import { Header } from "./header";
import { IconCredit } from "@/components/shared/icon-credit";
import { BottomNav } from "./bottom-nav";
export function AppShell({ children }: {
    children: ReactNode;
}) {
    const { loggedIn, login, openRequest } = useBooking();
    if (!loggedIn)
        return <AuthScreen onLogin={login}/>;
    return (<main className="app-shell">
      <Header onNew={() => openRequest()}/>
      <div className="main-content layout-container">{children}<IconCredit /></div>
      <BottomNav onNew={() => openRequest()}/>
    </main>);
}
