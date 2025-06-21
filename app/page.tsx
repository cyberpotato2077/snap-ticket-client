'use client';
import { Card } from '@radix-ui/themes';
import { EventCard } from './event-card';
import { EventCarousel } from './event-carousel';
import { Header } from './header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white p-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-9">
            <EventCarousel />
            {/* 공연 리스트 */}
            <section className="my-5">
              <h2 className="text-2xl font-semibold mb-4">공연 목록</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[...Array(10)].map((_, i) => (
                  <EventCard key={i} />
                ))}
              </div>
            </section>
          </div>
          <div className="col-span-3">
            <div className="top-[97px] sticky">
              <Card className="w-full">hi</Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
