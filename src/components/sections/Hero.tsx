import Image from "next/image";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-center px-6 py-24"
    >
      {profile.display.profileImage && profile.profileImage && (
        <div className="mb-8 h-[140px] w-32 overflow-hidden rounded-[50%] border border-rule md:h-[174px] md:w-40">
          <Image
            src={profile.profileImage}
            alt={`${profile.name.ko} 프로필 사진`}
            width={320}
            height={348}
            className="h-full w-full object-cover object-top"
            priority
          />
        </div>
      )}
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
        Portfolio
      </p>
      <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
        {profile.name.ko}
      </h1>
      <p className="mt-3 text-xl text-muted md:text-2xl">
        {profile.name.en} · {profile.role}
      </p>
    </section>
  );
}
