import Image from "next/image";

// 서버 컴포넌트에서 직접 API 호출
async function getResumeInfo() {
  const res = await fetch('https://raw.githubusercontent.com/dayeoni/first-deploy/refs/heads/0.3/resume/service/resume_general_info_service.json');
  // API 응답이 성공적인지 확인
  if (!res.ok) {
    // 응답이 실패하면 오류를 던져 Next.js가 오류 페이지를 보여주도록 함
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

// 서버 컴포넌트에서 직접 API 호출
async function getPortfolioInfo() {
  const res = await fetch('https://raw.githubusercontent.com/dayeoni/first-deploy/refs/heads/main/service/resume_portfolio_service.json');
  // API 응답이 성공적인지 확인
  if (!res.ok) {
    // 응답이 실패하면 오류를 던져 Next.js가 오류 페이지를 보여주도록 함
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {

  // getResumeInfo 함수를 호출하여 데이터를 기다림
  const data = await getResumeInfo()
  const portfolio = await getPortfolioInfo()

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          src="/cuti.png"
          alt="Next.js logo"
          width={300}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            안녕하세요{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              교육생 {data.name}입니다
            </code>
          </li>
          <li className="mb-2 tracking-[-.01em]">
            사진 속 동물은 호주에 사는 귀여운 쿼카입니다
          </li>
          <li className="mb-2 tracking-[-.01em]">
            귀엽다고 만지면..벌금
          </li>
          <li className="mb-2 tracking-[-.01em]">
            첫 프로젝트는 {portfolio.title} 입니다
          </li>
          <li className="mb-2 tracking-[-.01em]">
            LG CNS 부트캠프 교육생들을 위한 블로그입니다
          </li>
        </ol>
        <a
          className="flex items-center ml-20 gap-2 hover:underline hover:underline-offset-4 "
          href="https://github.com/StarChoiMarine/CNStudy-FE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          GitHub FE Repository →
        </a>
        <a
          className="flex items-center ml-20 gap-2 hover:underline hover:underline-offset-4 "
          href="https://github.com/aaahyunseo/inspire3-team6-pj1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          GitHub BE Repositoy →
        </a>
        <a
          className="flex items-center ml-20 gap-2 hover:underline hover:underline-offset-4 "
          href="https://github.com/aaahyunseo/inspire3-team6-pj1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Resume →
        </a>
        <a
          className="flex items-center ml-20 gap-2 hover:underline hover:underline-offset-4 "
          href="https://github.com/dayeoni"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          My GitHub →
        </a>
      </main>
    </div>
  );
}
