"use client";
import { LOGIN_ENABLED } from "@/features/auth/config";
import { Avatar } from "@/components/shared/avatar";
import { useBooking } from "@/features/booking/booking-provider";
export function ProfileContent() {
    const { logout } = useBooking();
    return (<section className="page-content">
      <div className="profile-panel">
        <Avatar />
        <h1>Maya Thompson</h1>
        <p className="muted">maya@example.com</p>
        <button className="secondary">Edit profile</button>
        {LOGIN_ENABLED && <button className="text-button" onClick={logout}>Log out</button>}
      </div>
    </section>);
}
