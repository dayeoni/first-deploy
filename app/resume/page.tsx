import Image from "next/image";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-zinc-100 p-4 md:p-8">
      <article className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow">
       
        <div className="flex items-center gap-4 mb-6">
          <Image
            src="/me.jpg"
            alt="프로필 사진"
            width={200}
            height={200}
            className="rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold text-black">정다연 (Jeong Dayeon)</h1>
            <p className="mt-1 text-sm text-zinc-600">
              원정공 문헌정보학과 · 복수전공 소프트웨어학과
            </p>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-zinc-700">
              <li>📧 dayeonj048@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* 요약 */}
        <section className="mt-4">
          <h2 className="text-lg font-semibold text-black">요약</h2>
          <p className="mt-1 text-sm leading-relaxed text-zinc-800">
            사용자 경험 중심의 개발을 지향하는 개발자가 되고 싶습니다. React/Next.js와
            Spring Boot를 활용한 풀스택 프로젝트 경험이 있으며, 학부 개발 동아리
            (SKKUDING) 활동을 통해 협업 능력과 실무 감각을 쌓았습니다.
          </p>
        </section>

        {/* 경력 / 활동 */}
        <section className="mt-4">
          <h2 className="text-lg font-semibold text-black">경력 / 활동</h2>

          {/* SKKUDING */}
          <div className="mt-2">
            <div className="flex items-baseline justify-between">
              <h3 className="font-medium text-blue-400">
                소프트웨어학과 개발 동아리(SKKUDING)
              </h3>
              <span className="text-xs text-zinc-600">2024.06 — 현재</span>
            </div>
            <ul className="mt-1 list-disc pl-5 text-sm text-zinc-800">
              <li>React, Spring Boot 기반 학부 프로젝트 진행</li>
              <li>팀 단위 Git 협업 및 코드 리뷰 경험</li>
              <li>UI/UX 개선 및 배포 자동화 실습</li>
            </ul>
          </div>

          {/* FIN:NECT 챌린지 */}
          <div className="mt-4">
            <div className="flex items-baseline justify-between">
              <h3 className="font-medium text-blue-400">
                2025 FIN:NECT 챌린지 장려상
              </h3>
              <span className="text-xs text-zinc-600">2025.08</span>
            </div>
            <ul className="mt-1 list-disc pl-5 text-sm text-zinc-800">
              <li>금융 데이터 활용 서비스 아이디어 기획 및 프로토타입 구현</li>
              <li>팀 단위 프로젝트 수행 및 발표를 통해 장려상 수상</li>
            </ul>
          </div>
        </section>

        {/* 학력 */}
        <section className="mt-4">
          <h2 className="text-lg font-semibold text-black">학력</h2>
          <div className="mt-1 text-sm text-zinc-800">
            성균관대학교 문헌정보학과 / 소프트웨어학과(복수전공) — 2022–2026(예정)
            (현재 4학년 재학중)
          </div>
        </section>
      </article>
    </div>
  );
}