"use client";
import { Bell, Menu, Plus } from "@/components/shared/icon";
import { Logo } from "@/components/shared/logo";
import { Avatar } from "@/components/shared/avatar";
export function Header({ onNew }: {
    onNew: () => void;
}) {
    return (<header className="topbar">
      <div className="topbar-inner layout-container">
        <div className="topbar-left">
        
          <Logo />
        </div>
        <div className="topbar-actions">
          <button className="notification" aria-label="Notifications">
            <Bell size={19}/>
            <span />
          </button>
         
          <button className="primary desktop-cta" onClick={onNew}>
            <Plus size={17}/> Need a worker
          </button>
        </div>
      </div>
    </header>);
}
