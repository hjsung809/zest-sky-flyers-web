import { Navigation } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Schedule } from "@/components/Schedule";
import { Instructor } from "@/components/Instructor";
import { Gallery } from "@/components/Gallery";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-float">
            Team Zest
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            하늘을 바라만 보고는 것이 아닌 하늘을 날아 보는 것은 어떠세요?
            팀 제스트가 실현 시켜 드리겠습니다.
          </p>
          <Button size="lg" variant="default" className="text-lg">
            시작하기
          </Button>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">수업 시간표</h2>
          <Schedule />
        </div>
      </section>

      {/* Instructor Section */}
      <section id="instructor" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">강사 소개</h2>
          <Instructor />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">시설 안내</h2>
          <Gallery />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            강남아크로바틱트릭킹팀제스트
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                서울강남 아크로바틱 마샬아츠 트릭킹 무용테크닉
              </h3>
              <p className="text-gray-600 mb-6">
                팀 제스트는 전문적인 아크로바틱과 마샬아츠 트릭킹 교육을 제공합니다.
                초보자부터 전문가까지, 각자의 수준에 맞는 맞춤형 교육으로
                여러분의 꿈을 실현시켜 드립니다.
              </p>
              <Button variant="outline">자세히 알아보기</Button>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">프로그램</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "아크로바틱", desc: "기초부터 고급 기술까지" },
              { title: "마샬아츠", desc: "체계적인 무술 교육" },
              { title: "트릭킹", desc: "역동적인 동작 훈련" },
              { title: "무용테크닉", desc: "예술적 움직임 교육" },
            ].map((program) => (
              <div key={program.title} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">위치</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-gray-200 rounded-lg"></div>
            <div>
              <h3 className="text-2xl font-bold mb-4">찾아오시는 길</h3>
              <p className="text-gray-600 mb-6">
                서울특별시 강남구
              </p>
              <Button variant="default">
                길찾기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-8">문의하기</h2>
          <p className="text-xl mb-8">
            팀 제스트와 함께 시작해보세요
          </p>
          <Button variant="secondary" size="lg">
            상담 신청하기
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Team Zest</h3>
              <p className="text-gray-400">
                강남아크로바틱&마샬아츠트릭킹
              </p>
            </div>
            <div className="text-right">
              <h4 className="font-bold mb-2">연락처</h4>
              <p className="text-gray-400">이메일: contact@teamzest.com</p>
              <p className="text-gray-400">전화: 02-XXX-XXXX</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
