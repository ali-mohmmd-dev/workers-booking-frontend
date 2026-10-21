import { ProfileBadge } from "@/features/profile/components/profile-badge";

export function HomeHero() {
  return (
    <section className="welcome" aria-labelledby="welcome-heading">
      <div className="welcome-copy">
        <ProfileBadge />
        <h1 id="welcome-heading">What service would you like to use, Maya?</h1>
        <p className="muted">Reliable help is closer than you think.</p>
      </div>
      <div className="welcome-portrait">
        <img src="/images/worker-hero.webp" alt="Smiling construction worker wearing a hard hat and safety vest" width={675} height={1200} fetchPriority="high" />
      </div>
    </section>
  );
}
