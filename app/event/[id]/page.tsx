import { 예매하기Button } from './예매하기Button';
import { LocalTimeDisplay } from './local-time-display';
import { CommentBox } from './comment-box';
import { Header } from '@/app/header';

export default function ShowDetailPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen p-6 gap-6 bg-white">
        {/* 왼쪽: 공연 정보 */}
        <div className="flex-1 overflow-y-scroll">
          {/* 공연 상단 정보 */}
          <section className="flex gap-6 mb-6">
            {/* 이미지 */}
            <div className="w-52 h-72 bg-gray-200 flex items-center justify-center text-red-500 font-semibold rounded-md shadow-inner">
              공연 이미지
            </div>

            {/* 텍스트 정보 */}
            <div className="flex-1 space-y-3">
              <h1 className="text-2xl font-bold text-red-500">재밌는 공연</h1>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>장소: 세종문화회관</li>
                <li>공연기간: 2025.06.01 ~ 2025.06.15</li>
                <li>공연시간: 평일 19:00 / 주말 14:00</li>
                <li>관람 연령: 만 7세 이상</li>
                <li>
                  가격: <span className="font-medium">R석 100,000원 / S석 70,000원</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 공연 상세 정보 */}
          <section className="mt-8">
            <h2 className="text-lg font-semibold mb-3 text-gray-800">공연 상세정보</h2>
            <div className="w-full aspect-[1/2] bg-gray-100 flex items-center justify-center text-red-500 rounded-md">
              상세 이미지
            </div>
          </section>
        </div>

        {/* 오른쪽: 예매 사이드바 */}
        <aside className="w-80 shrink-0 pl-6 h-[calc(100vh-120px)] flex flex-col gap-4 top-[95px] sticky">
          {/* 서버 시간 */}
          <LocalTimeDisplay />

          {/* 예매 버튼 */}
          <예매하기Button />

          <CommentBox />
        </aside>
      </main>
    </>
  );
}
